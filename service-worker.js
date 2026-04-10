// Service Worker for 小学英语同步学习平台
// 实现离线访问功能 - 优化版本

const CACHE_VERSION = '6.0';
const CACHE_NAME = `english-cs-v${CACHE_VERSION}`;

// 核心资源 - 优先缓存
const CORE_ASSETS = [
  './',
  './index.html',
  './app.js',
  './style.css',
  './START_HERE.html'
];

// 模块资源
const MODULE_ASSETS = [
  './js/core/state.js',
  './js/core/storage.js',
  './js/core/timer.js',
  './js/core/dataLoader.js',
  './js/utils/speech.js',
  './js/utils/errorHandler.js',
  './js/utils/performance.js',
  './js/utils/loading.js',
  './js/utils/mobile.js'
];

// 数据资源 - 按需缓存
const DATA_ASSETS = [
  './versions/pep.js',
  './versions/waiyan.js',
  './versions/general.js'
];

// 所有需要缓存的资源
const ASSETS_TO_CACHE = [...CORE_ASSETS, ...MODULE_ASSETS, ...DATA_ASSETS];

// 安装事件：缓存所有资源
self.addEventListener('install', (event) => {
  console.log('[Service Worker] Installing...');
  
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('[Service Worker] Caching assets...');
        // 使用 addAll 并捕获单个资源失败
        return Promise.all(
          ASSETS_TO_CACHE.map(url => 
            cache.add(url).catch(err => {
              console.warn(`[Service Worker] Failed to cache: ${url}`, err);
            })
          )
        );
      })
      .then(() => {
        console.log('[Service Worker] Installation complete');
        return self.skipWaiting();
      })
  );
});

// 激活事件：清理旧缓存
self.addEventListener('activate', (event) => {
  console.log('[Service Worker] Activating...');
  
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames
          .filter((cacheName) => cacheName !== CACHE_NAME)
          .map((cacheName) => {
            console.log(`[Service Worker] Deleting old cache: ${cacheName}`);
            return caches.delete(cacheName);
          })
      );
    }).then(() => {
      console.log('[Service Worker] Activation complete');
      return self.clients.claim();
    })
  );
});

// 获取策略：根据资源类型使用不同策略
self.addEventListener('fetch', (event) => {
  // 只处理 GET 请求
  if (event.request.method !== 'GET') return;
  
  const url = new URL(event.request.url);
  
  // 根据资源类型选择策略
  if (isCoreAsset(url.pathname)) {
    // 核心资源：Cache First
    event.respondWith(cacheFirst(event.request));
  } else if (isDataAsset(url.pathname)) {
    // 数据资源：Stale While Revalidate
    event.respondWith(staleWhileRevalidate(event.request));
  } else if (isImage(url.pathname)) {
    // 图片资源：Cache First with fallback
    event.respondWith(cacheFirstWithFallback(event.request));
  } else {
    // 其他资源：Network First
    event.respondWith(networkFirst(event.request));
  }
});

// 判断是否为核心资源
function isCoreAsset(pathname) {
  return CORE_ASSETS.some(asset => pathname.includes(asset.replace('./', ''))) ||
         MODULE_ASSETS.some(asset => pathname.includes(asset.replace('./', '')));
}

// 判断是否为数据资源
function isDataAsset(pathname) {
  return DATA_ASSETS.some(asset => pathname.includes(asset.replace('./', '')));
}

// 判断是否为图片
function isImage(pathname) {
  return /\.(jpg|jpeg|png|gif|webp|svg)$/i.test(pathname);
}

// Cache First 策略
async function cacheFirst(request) {
  const cache = await caches.open(CACHE_NAME);
  const cached = await cache.match(request);
  
  if (cached) {
    return cached;
  }
  
  try {
    const response = await fetch(request);
    if (response.ok) {
      cache.put(request, response.clone());
    }
    return response;
  } catch (error) {
    console.error('[Service Worker] Fetch failed:', error);
    throw error;
  }
}

// Network First 策略
async function networkFirst(request) {
  try {
    const networkResponse = await fetch(request);
    if (networkResponse.ok) {
      const cache = await caches.open(CACHE_NAME);
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  } catch (error) {
    const cache = await caches.open(CACHE_NAME);
    const cached = await cache.match(request);
    if (cached) {
      return cached;
    }
    throw error;
  }
}

// Stale While Revalidate 策略
async function staleWhileRevalidate(request) {
  const cache = await caches.open(CACHE_NAME);
  const cached = await cache.match(request);
  
  // 后台更新缓存
  const fetchPromise = fetch(request).then(response => {
    if (response.ok) {
      cache.put(request, response.clone());
    }
    return response;
  }).catch(error => {
    console.warn('[Service Worker] Background fetch failed:', error);
  });
  
  // 立即返回缓存（如果有）
  if (cached) {
    return cached;
  }
  
  // 否则等待网络请求
  return fetchPromise;
}

// Cache First with fallback 策略（图片）
async function cacheFirstWithFallback(request) {
  const cache = await caches.open(CACHE_NAME);
  const cached = await cache.match(request);
  
  if (cached) {
    return cached;
  }
  
  try {
    const response = await fetch(request);
    if (response.ok) {
      cache.put(request, response.clone());
    }
    return response;
  } catch (error) {
    // 返回默认图片
    return new Response('Image not available', { 
      status: 404,
      headers: { 'Content-Type': 'text/plain' }
    });
  }
}

// 消息事件：接收来自客户端的消息
self.addEventListener('message', (event) => {
  if (!event.data) return;
  
  switch (event.data.type) {
    case 'SKIP_WAITING':
      self.skipWaiting();
      break;
      
    case 'GET_VERSION':
      event.ports[0].postMessage({ version: CACHE_VERSION });
      break;
      
    case 'CLEAR_CACHE':
      caches.keys().then(cacheNames => {
        return Promise.all(
          cacheNames.map(cacheName => caches.delete(cacheName))
        );
      }).then(() => {
        event.ports[0].postMessage({ success: true });
      });
      break;
      
    case 'CACHE_STATUS':
      caches.open(CACHE_NAME).then(cache => {
        cache.keys().then(requests => {
          event.ports[0].postMessage({ 
            cached: requests.length,
            version: CACHE_VERSION
          });
        });
      });
      break;
  }
});

// 后台同步（用于离线数据同步）
self.addEventListener('sync', (event) => {
  if (event.tag === 'sync-data') {
    event.waitUntil(syncData());
  }
});

// 后台数据同步
async function syncData() {
  console.log('[Service Worker] Syncing data...');
  // 这里可以实现离线数据同步逻辑
}

// 推送通知支持
self.addEventListener('push', (event) => {
  if (event.data) {
    const data = event.data.json();
    event.waitUntil(
      self.registration.showNotification(data.title, {
        body: data.body,
        icon: './icon.png',
        badge: './badge.png'
      })
    );
  }
});

console.log('[Service Worker] Script loaded');
