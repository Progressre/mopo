'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "37aaeaade0a02b63248f10b3e0ae47c1",
"assets/assets/images/1226a8ad032f0bb10e63155d34e95ed8448811cc.png": "a37cedc8402b02e2f226a7825f55e297",
"assets/assets/images/140dd222a1db4b6334ab94a67d704804c39899cb.png": "131693c931f906d7670f3b6f533d454c",
"assets/assets/images/168dac0f7e75526a719d21869b61042485a521f1.png": "1a030a2a44d205bcb1446fc2ef2978a3",
"assets/assets/images/16978205f5f97ccedcbf9148d7ec3d32f62b1faa.png": "4503daa1e1e9281ca83e9e8af0a794b1",
"assets/assets/images/18cf9d1a02aed1b7db0493341539e904981450e7.png": "5296324bf5a465488f37dd2c16a2cfaa",
"assets/assets/images/198c9014edd140239dcb49d7a58cac0c3626fb69.png": "8496c166d686a50a0efca91f9b537eed",
"assets/assets/images/1ab5a23ae209092709bf56534171dda321a8f86a.png": "090a8a2dac05f6ac381bd9812dde9876",
"assets/assets/images/1adb59d6856abc8ce6905c139d29672e043e326b.png": "0d723893a7d0aee8671bd27606af0133",
"assets/assets/images/1e6305323af78e040caf666d03bea182e4f30ee3.png": "1fc77c105620c23574cf485a70f050c8",
"assets/assets/images/2135108289cfc8ece94cbfce290a32ecd4a0107d.png": "d1a79f1ca3b604c12e5c1a936a76cf77",
"assets/assets/images/227d7ac5736b1b5cc446b9ac1f64635caa9239e6.png": "5364f27df98e255d240dab2676559efd",
"assets/assets/images/245b5176d6384ba483087e4dcab1bcc4": "04f45a5f2f89a94d299dc928b594df5c",
"assets/assets/images/2484e00c7168a80cf4f15689fc536285e59f89a7.png": "e7cb34f2803c9b4c12543a6151cbd6f3",
"assets/assets/images/2c84844b77bc28f72ec7bc45f8abfe699f078319.png": "6e9af1a8eb463b3bc13fcd7cc447263d",
"assets/assets/images/2f30f65f13286285bb2854868b4a6afa87b4783b.png": "99395843bc923b116fa6459a8150b78e",
"assets/assets/images/3202f2770bc4ec6fdd512d4656d2faa31777765e.png": "aab8ff2e52f2eb4f5bc8ce84c27d2b38",
"assets/assets/images/35925a89708057d511845f2de0567a847c45dd70.png": "d869f63e3abf570f8efdd9b1872158a9",
"assets/assets/images/3ade4440c0e0620a0a0474f177d26acadb65ff25.png": "c1b1a21be8ad0783332a74f75078b0dc",
"assets/assets/images/3ae42cca657cccc57f3933bf995bf9dcf8de43c9.png": "7bbae54ccbaa288b07b8ad897aefe8e1",
"assets/assets/images/40a34671e231292b9e7ad2d78a740b788df43e97.png": "ee1dbcb80bff549af635fa76b9460efb",
"assets/assets/images/519571410655bf20527872cee211fb304f947a49.png": "e586758e48c15d82ae752ba3049afc1e",
"assets/assets/images/5347e089b630267cb7ce1c99311cf23495ddc7e9.png": "acf51c178bdbd5d73f5ed39eb53d9970",
"assets/assets/images/58c2830dda2414b4cea24f634bd714b9261da09d.png": "a35e9267f2342a09e08e9df5772c6122",
"assets/assets/images/5937ddce3e9185bc949f5a07dde60caf390eb556.png": "af4c4e7c1466cf818ce291d55fda0a99",
"assets/assets/images/5fda653ec0108448dbce6e85143f166824a93f55.png": "4061035d676d877ce298b6dca442d833",
"assets/assets/images/64794a65503ea43075d5f25d48654c26e45ca858.png": "f68294d77425f0d46e7188004f90454d",
"assets/assets/images/64ff571c7fb9e2e98b33dfab58736eb29582a1f7.png": "967b1b52f7d5c196a609d61ad971af0e",
"assets/assets/images/69da99abfb2a51cfa7ac2f5a5980dd4489aa86f4.png": "3ddfb1192bf8780dfd20a8f6e5c8c8a5",
"assets/assets/images/6c1441a9d7144a66ba2a252112b4d0fc": "04f45a5f2f89a94d299dc928b594df5c",
"assets/assets/images/6cb7afafe73ceb331206ea5103eb5bad4e8adccc.png": "4d999236938b3f3c6de8e1c3764c6522",
"assets/assets/images/6e3e8c64b3af69ce52b0fa095e1bebfb3ace9552.png": "de478f1f2e8ff94d9b6c179c6c317cd8",
"assets/assets/images/7f40fbb477a04e5354db7113356cfbfea05e4d76.png": "4ea0ebea0ae9d3ab67be90f7482cefa4",
"assets/assets/images/80c57169c1cd0c02745f78812ac20793e0cdbd5b.png": "66e51d496617074bdf2d1edcbc751178",
"assets/assets/images/88a086c7c04ff6a7f43d80d27f043398566a3879.png": "58c8200d612e1896a2028ebca916bd9b",
"assets/assets/images/88f98726c20175cb0ae3806db24c8eb9c45949f1.png": "5f56439f2ae5fa64c64598068349dd29",
"assets/assets/images/89dd88456a2e263237994cd5f194a6282b1a3fb7.png": "e00870e9ba081b7e22fedb4de4b33dbc",
"assets/assets/images/8ee04b58b9978726785fb480192062aff92d296c.png": "abdb10f66fd01b249f3ff9bc30573342",
"assets/assets/images/915f3341cb099b6c7c25f0989be202fa2144e4f3.png": "b2f62191e610b8ca7150e9447364a9c3",
"assets/assets/images/a40246b45b591e5d276f63478f2d2fa0a90a25f9.png": "9c5e662957dcb22c0866fcc99a1c9d01",
"assets/assets/images/a4c31dfce0af77948ebb1e45652ff5eb77fd0c10.png": "43c25a3e3a63442e6bf380e842d21682",
"assets/assets/images/a8a23c49e9c689b958107845344dfc127078831e.png": "82dcfc68b15669a3e20384a512be439a",
"assets/assets/images/ab90156b6ca4a38451f650c0d02a65d8a511073c.png": "580f4bb3c093365225eb87788e33e5be",
"assets/assets/images/abdf614f055d50cd24f547ed64968cb26e61fc97.png": "7139d5928d786a4a0154ed878898852a",
"assets/assets/images/ac17fe17cbcc72c90a51b1fe805f85e367f943b5.png": "9fdac86b37262547c7bb28bc7ef1769e",
"assets/assets/images/b22ac57e41ef70f20ec0c4f138e781a7b55ea5f7.png": "b53b9509d41f30eecd10586ca816d5ad",
"assets/assets/images/b231f6fa8bef2711b8bbe5fe1f13554a100ac8fa.png": "bffe00788db26833088c2346dee6d944",
"assets/assets/images/b5fa5f2ce8b8b25c37e81ba62e1d921a94759f37.png": "02bb920ba5633e6a8d9f56f3d489acb8",
"assets/assets/images/b6e884f7ca35d37cefb6457f40a8d787a1cae02a.png": "cf3f4decf062fa47cb6e923a2251d8af",
"assets/assets/images/b874430f39a37a6dff5d33867e0553fbc99f57a0.png": "c924f2fc4f9e4dfb60effb4f3e315337",
"assets/assets/images/b883a4de192c1d905508cf0e4c079b1b591704a3.png": "fce847402fb0ab4ecf832855682cd9ba",
"assets/assets/images/c76a1a66b409666b400ea6b9c04f3efbe40615ad.png": "ca85b854e73d303f2cddcdfd1369dcab",
"assets/assets/images/c7e7cbeda4eb4352a9e9055baf221bbf": "e8d2917bf1bb201fb3c6835e858be000",
"assets/assets/images/c92da042a4fc6441059f7147c75852261da91d87.png": "0e0b66fbddc9abfd57ed63454337bda4",
"assets/assets/images/ca7d313bbe55fa6d375ead8e7311231aecff0d9e.png": "69308669acec3a001efb1a3922fe55ce",
"assets/assets/images/ca89ae3fa10acb5d4c53c1c1963d113ccfd29220.png": "70e6c109511f88ee066d3e6a23581539",
"assets/assets/images/d08a963054c9ebe893abaedcbeb3aa16415ee6b5.png": "812c625ca122a803b7090bb9743b8a9d",
"assets/assets/images/d1aec5a0aef6c5d5549d2bcd1462ac07ac2429b4.png": "74201ea2d1572e979565c583f8c24e99",
"assets/assets/images/da12b268673e4c77a023f826e395199f": "e8d2917bf1bb201fb3c6835e858be000",
"assets/assets/images/daf5b5c7c21746ae8219c5bb84b7ebdd": "04f45a5f2f89a94d299dc928b594df5c",
"assets/assets/images/db6c536462bd39b75913abd8ea909212b9a1db4d.png": "920e5febe373dc9b8dc137f5b02a6872",
"assets/assets/images/dbe1bbb2baf14013bee1f2cf51199cbe": "e8d2917bf1bb201fb3c6835e858be000",
"assets/assets/images/e3173cacb841af99f4a7ede57493740297381cb8.png": "9ab2141c933c15580ff8bfe0e6394d49",
"assets/assets/images/e71608176a55bda89c24b2fd9690c397616ea193.png": "f1a3100488cf3b72a773d3e12579563f",
"assets/assets/images/e81872723beb90d65092d7ddef90a9eabc1998cd.png": "febebf451051999daaa17368d3241e97",
"assets/assets/images/ea7b5254ced06ebabcfda25ce99bb73916a81d02.png": "46be50aced59051a464dd17e35c1c964",
"assets/assets/images/eaad01d69edfd58e33d568273938bc0cf5b90eda.png": "89021de6f6c8fc4d5b364f293170c37a",
"assets/assets/images/eb74a0a8b06a86979e42674e91de46ab1d971444.png": "6054435c09dcc009b0ffc250352d40bc",
"assets/assets/images/ed8332a8f99f0dddca646f98350af5a3632de3e0.png": "e6a56f66bf408dd9520c953257f9e253",
"assets/assets/images/f165cdede5ba9f9296ad8dfa2d9f305085f82d31.png": "4009f22249580e460d02c35a5691cd35",
"assets/assets/images/f4b296f236c73d6136cb86d31e4e340ff3d4c9f7.png": "b27ed952112dc88eab7eb4582b1a0d47",
"assets/assets/images/f6482de239a786c457bdc04ef2324776dac19d9f.png": "0cde34b3f120993d304ebf927541a18e",
"assets/assets/images/f9eeb521fc3ec01c50f70e782f634008e3cdb773.png": "058190a18fd24f665e491e6ce6cc81b4",
"assets/assets/images/fe9bda8f891484da30e6d30d8f0f169dd160fec4.png": "dc7aa53ec38ca19bf8bbfee6bac1884b",
"assets/assets/images/index.png": "d41d8cd98f00b204e9800998ecf8427e",
"assets/FontManifest.json": "359e8999ada820d025f913d2b98d4804",
"assets/fonts/AveriaGruesaLibre-regular.ttf": "fbc1e363cdce2f56b5a4a57dd6f1def9",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/fonts/Roboto-300.ttf": "88823c2015ffd5fa89d567e17297a137",
"assets/fonts/Roboto-700.ttf": "e07df86cef2e721115583d61d1fb68a6",
"assets/fonts/Roboto-700italic.ttf": "5b44818d2b9eda3e23cd5edd7b49b7d5",
"assets/fonts/Roboto-regular.ttf": "11eabca2251325cfc5589c9c6fb57b46",
"assets/NOTICES": "5bff6592115fcaabd0ac7fcd4f0e4f96",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"canvaskit/canvaskit.js": "43fa9e17039a625450b6aba93baf521e",
"canvaskit/canvaskit.wasm": "04ed3c745ff1dee16504be01f9623498",
"canvaskit/profiling/canvaskit.js": "f3bfccc993a1e0bfdd3440af60d99df4",
"canvaskit/profiling/canvaskit.wasm": "a9610cf39260f60fbe7524a785c66101",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "70507b0312f3fc6a35889730ff00670e",
"/": "70507b0312f3fc6a35889730ff00670e",
"main.dart.js": "05625bc516e4b43b466c98ef6592d70f",
"manifest.json": "290285abf1b02519753940a8a015426e",
"version.json": "c72dd9007e6fa6ce5029cbe514299506"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
