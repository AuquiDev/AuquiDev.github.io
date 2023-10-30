'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "9761f7a2b73ec226c4639495b13d1ce0",
"index.html": "5ffbd2ace5e98cf3fc5e31b24a0c3625",
"/": "5ffbd2ace5e98cf3fc5e31b24a0c3625",
"main.dart.js": "f7cdf652b938b2961946ffd1cdf1db46",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "e63d49fb900f40b7b94d17b22a4b73bb",
"assets/images/002.png": "783f9530fdc6e090bf6260e17c563de4",
"assets/images/003.png": "cba2addc8ea65f7fbf2a9fd3a863bf74",
"assets/images/001.png": "da680faed3a0756c6adf46df6b1c7d02",
"assets/images/004.png": "936bc8d39bd83929bdad0116c21a0a94",
"assets/images/cielo.png": "34830f89118ec34d34bf856025f445cd",
"assets/images/cielos.png": "756106f1e73218c44150447848d8528a",
"assets/images/logo2.jpeg": "7dd306f92044de6cc6a534b9f4ce0661",
"assets/images/logo.png": "4022ee4a2ec073da4212a8cf44797eb5",
"assets/AssetManifest.json": "61c557efe30ec3bf8c053de15dbc3a35",
"assets/NOTICES": "d69c3a0cf50ee676683d47a12855072b",
"assets/FontManifest.json": "daf1f817658c2d4328a27ae7e3af9150",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "626f79a806df49a15471e929623246ea",
"assets/fonts/Electrolize-Regular.ttf": "1be3e0aaeb2bbd1985615a49da7f2eaf",
"assets/fonts/Montserrat-Regular.ttf": "ee6539921d713482b8ccd4d0d23961bb",
"assets/fonts/MaterialIcons-Regular.otf": "fb37f0a530cdf0a10ee52d85b89c11f4",
"assets/assets/svg/home-svg.svg": "30b882276885249aac9f30d05a0e90f3",
"assets/assets/svg/like.svg": "cf841d53d0cf0fe35dcf86bb3d6c4ee5",
"assets/assets/svg/money_final.svg": "ea0cc773302c901d4a9da07e789a4882",
"assets/assets/svg/left-arrow-back.svg": "62ea26749de8d03b50ac63b7bf16e94c",
"assets/assets/svg/comprar.svg": "480e32ceb7a185dc552e67891715c872",
"assets/assets/svg/person.svg": "e04d97699d38bd815dfba8583447e383",
"assets/assets/svg/screenshot-svg.svg": "d6abd18c4fea7f1107a3036a4a5173b4",
"assets/assets/svg/edit-svgr.svg": "ec5a691360235ea7836406f645a8a305",
"assets/assets/svg/drive-svg.svg": "27010ed96268af81aef939ac3c743986",
"assets/assets/svg/stock.svg": "0e1de2cd823f7103a838063148f311be",
"assets/assets/svg/dislike.svg": "e78ba6130857e509f77aab7e9ada09eb",
"assets/assets/svg/money_inicio.svg": "d599e7e9d46fd6ce0e431ff7388700ee",
"assets/assets/svg/pdf-document.svg": "0303b7cb36bf9416bae15783671319fb",
"assets/assets/svg/pie-chart-svg.svg": "651009de022afe66b621078705df43ef",
"assets/assets/svg/ms-excel.svg": "eeb0106239007c07e1dd2a1aafd39a27",
"assets/assets/svg/cloud-sync.svg": "5d16dc0727a1fbe63928fc36d438839f",
"assets/assets/svg/document-svg.svg": "d31faf8f63d7bfd14f0c1baef08122bd",
"assets/assets/svg/add-svgrepo-com.svg": "6604d40d309f9399c8e77fedbc9866c3",
"assets/assets/svg/cash.svg": "c9ab42c0c9a5b25553046d9ff8850f80",
"assets/assets/svg/pax1.svg": "188c031586fd0346529a39269f83c2da",
"assets/assets/images/animals.jpg": "2e218a94e7842a946d772082ac8c5590",
"assets/assets/images/antarctica.jpg": "71e86242fca831839833d1caa23f107e",
"assets/assets/images/asia.jpg": "bbcf97c1be29e77360e8407b7e2eaa05",
"assets/assets/images/australia.jpg": "6170e8a703652c6b814dca7020050086",
"assets/assets/images/europe.jpg": "29a721b78efc7f928faf042c88806468",
"assets/assets/images/africa.jpg": "27fc2c6667bd5bd7bba8117fafe28d86",
"assets/assets/images/test1.jpeg": "9bb4e188581240286417187e232c4b38",
"assets/assets/images/background.png": "0564de0c80dbcae74ffce0f6a09dc3c0",
"assets/assets/images/test2.jpeg": "11346c7dce688552f9b834067e2120d5",
"assets/assets/images/trekking.jpg": "283eae13ae9587874b93fed5c9b4a118",
"assets/assets/images/photography.jpeg": "b0d14d6d4a94d33404a7df1344e7533b",
"assets/assets/images/south_america.jpg": "1920c86e11a06921b339f00ff1d0ddea",
"assets/assets/images/cover.jpg": "e1e4b2e46b8d6eabb7330afb0c0d30ff",
"assets/assets/images/test3.jpeg": "74e1950d7c75cce212743bfd5a0bf432",
"assets/assets/images/north_america.jpg": "867d729d34a03bf38136bd45954ec218",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "1a074e8452fe5e0d02b112e22cdcf455",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "be0e3b33510f5b7b0cc76cc4d3e50048",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/canvaskit.wasm": "42df12e09ecc0d5a4a34a69d7ee44314",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
