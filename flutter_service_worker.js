'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "70ee2a09761f9e69dcb8f3ce4bbb9da0",
"index.html": "1ef0fdcad748f1a2d5880ba1eb7b11f6",
"/": "1ef0fdcad748f1a2d5880ba1eb7b11f6",
"main.dart.js": "e9f6243163ce395928847f4781e14fd7",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "3b89cfce9afed612b95cc824570e2f0b",
"assets/AssetManifest.json": "0fdfcdb7621d4e6d6012c1ebfcc2c6b8",
"assets/NOTICES": "08dbb86ee4d1b24cbc6da3da6ce33a59",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "c3c76dd2cf676b03cced731293251a68",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/record_web/assets/js/record.worklet.js": "356bcfeddb8a625e3e2ba43ddf1cc13e",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "0633bae3c12bd7866a3a452b1369948f",
"assets/fonts/MaterialIcons-Regular.otf": "5133dc5a466d6b2fb05694ed75ce3132",
"assets/assets/audios/hedwigs_theme.mp3": "f9311124e5f927ba6213a0380189d389",
"assets/assets/audios/hogwarts_march.mp3": "b934b57d78d497d7547692a1d588b2a0",
"assets/assets/audios/I%2520Like%2520You%2520So%2520Much,%2520You%25E2%2580%2599ll%2520Know%2520It%2520-%2520Ysabelle%2520Cuevas%2520(Lyrics)%2520.mp3": "9214300846a327a2cc1012044e95b0ab",
"assets/assets/audios/happy_birthday_instrumental.mp3": "284acd8981d8a480fbe33e908eda9182",
"assets/assets/audios/happy_birthday_cheers.mp3": "d717cd9a29c202f7a900b1c95d53e8d9",
"assets/assets/images/candle_orange_unlit.png": "34785b9a1d27aeab371087ecbf9df917",
"assets/assets/images/candle_green.png": "dad7e5db6963b858cfffc017a036e169",
"assets/assets/images/candle_pink_unlit.png": "0d7c9ceac6e0fd268da12cb8cd611f10",
"assets/assets/images/candle_red_unlit.png": "72bd2b3ea59de804e890fe0a715cb9cd",
"assets/assets/images/space_background.jpg": "d43e954c0b59ab3bb79597d44070fe0a",
"assets/assets/images/earth.png": "de1c678219bb3857903b91c4c83bea51",
"assets/assets/images/candle_purple.png": "30cdd135a59948688f5a5f510af95b76",
"assets/assets/images/moon.png": "11adc722d8218a9f68d835cbd7f2587c",
"assets/assets/images/candle_blue.png": "cb1e67d003ffcc67311de450d4ad688a",
"assets/assets/images/candle_blue_unlit.png": "fbdb6b69be2948ca57236a8a774d5a30",
"assets/assets/images/diary.png": "9d6b775517003eef083632522626c3ae",
"assets/assets/images/flame.png": "be5e637754be4f4137eddf549ced36a9",
"assets/assets/images/candle_green_unlit.png": "0c24cb38c33db17465d19be11497a26c",
"assets/assets/images/birthday_cake.png": "b2b9b43c9bb8ef33516772021ab85428",
"assets/assets/images/candle_yellow_unlit.png": "7c8c81e84026e4e86ce9d4abc5a8f952",
"assets/assets/images/candle_purple_unlit.png": "8a6abf3dd7e90ee31ca10906a82d993f",
"assets/assets/images/candle_red.png": "d747dcd79448715e7c5cc4e4fd55a663",
"assets/assets/images/balloons.png": "aa60191d2fd6aea4c8cbd6b17c14a32f",
"assets/assets/images/oldemort.png": "08b4b8f60ac7556a65cee29e8ef9cbfe",
"assets/assets/images/candle_orange.png": "f73636aa6da916e97a54f9db7638f97e",
"assets/assets/animations/Animation%2520-%25201721380570273.json": "c6ec6d166f05305e84743ec78e71210e",
"assets/assets/animations/Animation%2520-%25201721380304671.json": "3cd4ceb16a06cbf3490b3917e53749f7",
"assets/assets/animations/Animation%2520-%25201721380249634.json": "7c26f3c1a6546a0823aacbe0584a71c8",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
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
