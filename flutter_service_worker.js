'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "e26b3f91068f34a6888fce2716c38c5a",
"assets/assets/18907-removebg-preview.png": "b05692b11e78440a18517a8899183baa",
"assets/assets/4861083-removebg-preview.png": "dcd7a5d784693ba57c148da46b93e8c3",
"assets/assets/abstract-textured-backgound.jpg": "bd1587c12f40c89b0b813d803e3cd46c",
"assets/assets/app-development.png": "00d260a223569db45583d418563433a5",
"assets/assets/background1.jpg": "bb5ddf3201e34fe99b5eaaaf21e1e2aa",
"assets/assets/cv_jeeva.pdf": "e605717a4f243b41e9dfac77e5ac7640",
"assets/assets/education/ccc%2520logo.jpg": "f41905c7764b681e6620767e74de6424",
"assets/assets/experience/jobsearch.jpg": "fac14bd519e3df0444ba0489ba60ddff",
"assets/assets/experience/kittivaasal%2520logo.jpg": "4df8805b215d4089f65ded4af1f56fac",
"assets/assets/experience/kittivaasal%2520logo.png": "64c77b15e8e2bf3fe596e58f4f32fb8d",
"assets/assets/giphy.gif": "51e31e451ee1005a38dc42ac6da836f7",
"assets/assets/mobile-application-ui-unscreen.gif": "8ba655a22d055604115e3267457a0be2",
"assets/assets/profileimage.jpeg": "aa5319561844dc418825e8d85e76d709",
"assets/assets/projects/chimpiklogo.png": "e9235de43d4d646394db419a988df402",
"assets/assets/projects/istitchlogo.png": "51fa51e8919c48bbcde344da3923479f",
"assets/assets/projects/playersmeetlogo.png": "82ce861daa802378b148a9dabb8031ab",
"assets/assets/skills/androidstudioimg.png": "ab34dbfd7de75d7947ef8d5d0e0a0461",
"assets/assets/skills/androiodimg1.png": "a2cc115f7286c345cfa62aeb2379f858",
"assets/assets/skills/dartimg.png": "8529bd9bbf95003d3b96045faa1d1dbf",
"assets/assets/skills/dartimg1.png": "3d00374adb317c1adb859500c0d45348",
"assets/assets/skills/firebaseimg.png": "a849d493f490f99faa7aac7e66bc404c",
"assets/assets/skills/flutterimg.png": "9171066ee7c8b67eeea72b6d2777501c",
"assets/assets/skills/flutterimg1.png": "a0703fce6709b833629ed62c9c62cbea",
"assets/assets/skills/githubimg.png": "a0abe1ec349f8a1b685a086f31be298d",
"assets/assets/skills/javaimg1.png": "2783ec8f4688496463d4e6fda4da66ba",
"assets/assets/skills/kotlinimg.png": "f1c046fbf6c8570f31a79eb43103c15f",
"assets/assets/skills/postgresqlimg.png": "ad7d4db7e3f748ceeb45faf28181f349",
"assets/assets/skills/supabaseimg.png": "caf8d7e9c8f61f947eec22f723455dac",
"assets/assets/skills/vscodeimg.png": "3d179a668b6739e9361eeca0fe014a0e",
"assets/assets/skills/vscodeimg1.png": "8095005dba6c2af7f48a5b6931994768",
"assets/assets/skills/xmlimg.png": "3401d19d71e6dbf335501e78b4d2bd8f",
"assets/assets/test.gif": "93d51a7d0d85401ec89761b9bd073324",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "ff9f3851d7186cb5f955391422c36393",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/shaders/ink_sparkle.frag": "ae6c1fd6f6ee6ee952cde379095a8f3f",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "3266c22d8700c77a1e794dd307f0a6d4",
"/": "3266c22d8700c77a1e794dd307f0a6d4",
"main.dart.js": "1c9eafed9a362bd14d886b38daf21830",
"manifest.json": "2fe52782ef3e47fb2bbd617dc23dcea3",
"version.json": "a30a2d7ba3ddc86bdcbfd4a2e2bd0ab1"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
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
