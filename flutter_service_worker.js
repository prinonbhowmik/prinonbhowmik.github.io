'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "45e8f0c91fae5844223ae260001b4e97",
"version.json": "e5d57d4e475cc8a711764c8aef61d978",
"splash/img/light-2x.png": "bb480b0fb63bf1b57e878c0700ba5ad3",
"splash/img/dark-4x.png": "e417356273199b13567474c845ba862d",
"splash/img/light-3x.png": "5f1edadab05f4f31ba0b5090ab7ca6cf",
"splash/img/dark-3x.png": "5f1edadab05f4f31ba0b5090ab7ca6cf",
"splash/img/light-4x.png": "e417356273199b13567474c845ba862d",
"splash/img/dark-2x.png": "bb480b0fb63bf1b57e878c0700ba5ad3",
"splash/img/dark-1x.png": "6fb1893b02b2a7ecc1ad9b730cdd746d",
"splash/img/light-1x.png": "6fb1893b02b2a7ecc1ad9b730cdd746d",
"splash/splash.js": "123c400b58bea74c1305ca3ac966748d",
"splash/style.css": "fd07e329d0addaee7af5d9dfe633aa54",
"index.html": "64840a99823b1ebdb463f3cb26b3c0fc",
"/": "64840a99823b1ebdb463f3cb26b3c0fc",
"main.dart.js": "cf04fd9878845b574bc167883c4317ea",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"icons/favicon.ico": "5122351650ae623a757289c48338a8f4",
"icons/apple-touch-icon.png": "c8722fb470a194fd892e7ca76e8d7248",
"icons/icon-192.png": "0acd9f9c92e61e45e7474f900c54efad",
"icons/icon-192-maskable.png": "3835c97708e1788952d43e6a2a081da2",
"icons/passport.jpg": "500e1e4a1fe89c700d4f742a9ba51dbd",
"icons/icon-512-maskable.png": "c1ef942cdfca19bcc456f5903e17736c",
"icons/icon-512.png": "851030b8b32eeaf3b2715b5ddebe0a43",
"manifest.json": "d28b84500e1d4631c76293f224ddb025",
".git/config": "14ae5581bcdf7fed5fd394a03a136d2a",
".git/objects/68/18edd1311631b0b6077c7e68f084f1aa36885d": "f23ca26a35eb10e4384f8fc29176f930",
".git/objects/3b/ef82bc93db6999e9a6e142e7f124c7c79801b4": "e5ba8bd1e379844f3a8ec80469d0d23d",
".git/objects/3b/6ed11f30a1b110c3196b960bcfcb084fb9f34e": "95bcdc396c263db334341f38066280e6",
".git/objects/9b/d3accc7e6a1485f4b1ddfbeeaae04e67e121d8": "784f8e1966649133f308f05f2d98214f",
".git/objects/9c/c24e32e0d9aae3876603186443a0ae07a2e1b0": "30d773c184428dd459ca9c61160e64c2",
".git/objects/02/7cd24442ee28614a4cc82f528221ae51355e31": "f616e0d346c1506435dd1fb9de7caa93",
".git/objects/a4/bd4667fc031cf8345d99bac09a08a42a2c32a1": "3034bfa64693579d951fb305efbb1083",
".git/objects/b2/717b5f9a4595d19d2c261a82086f4bb4ecfca7": "73d1360d95b4fa41dc9e3c366fd261fa",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/a2/ff3681c50dc9190766f5b8719aae05ef964049": "dffe123d1ba1a60816302704a4401ea2",
".git/objects/bd/0c4e9d3cffc440c34ca0e554f4b7fa629ebda7": "23571000fbeb82d26634605114cc533a",
".git/objects/e5/8b14cead71668ff78506388e65fcff307a38bd": "dce67fcd6932207a80706be22db27565",
".git/objects/e5/0753948ebdb3881c9ce3d3e654e05ceef9b6c6": "350fe961c82b3f612d809939d8cd7751",
".git/objects/f4/ff99c490fede3dc2bd0fee7f1bc17ea48341aa": "ba9cdf018b2df7ab20f4518b5d5644a1",
".git/objects/eb/b1081ca6a540eceb54d5fd1e946f76f04c8f43": "3025f6eca98489caf037c264bf928f0d",
".git/objects/ee/0e319c5539dbb17d9167d3b7194b5e1a963b42": "b8904b0dc33f998f23b01fa587059178",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/ca/11f8501ac8df09e2d0e1f32aa5a3406ec75b57": "850e7d4da29ff4af00c5efa43385b7c1",
".git/objects/c8/18e65b0584832b870f681be6f56cec97da7f15": "2810caaa930460d474ed77a77f6afa1d",
".git/objects/c8/08fb85f7e1f0bf2055866aed144791a1409207": "92cdd8b3553e66b1f3185e40eb77684e",
".git/objects/c6/d6212fdb4dae9dfb57e46a01de69506c895fc4": "2f4a3eab1269cce5d6cf9b4bd40f85bf",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/16/c18f26f6fc408112ebf99d7788ca442f81188e": "92300d9dc8dd111a4c36eb74495501f2",
".git/objects/89/28c6920b849a1f42019dfcaf92644a941818ec": "1f1c953286f7cf1c7c417a2b32f5d37d",
".git/objects/73/c63bcf89a317ff882ba74ecb132b01c374a66f": "6ae390f0843274091d1e2838d9399c51",
".git/objects/80/fb99a841a0f732addc42be3f1b3dbd79ecca81": "b472842b6b33f55e9a7a9f36cd75262a",
".git/objects/74/c726e32781bc2c0a83170f6800c0ef4cb9ddcf": "69a43282cb8038fd0577dc0529e5d6cb",
".git/objects/1a/4bf437fa604b380aab222e1425614baee0a9ba": "cb9a05af7530dd668d097dcabb269462",
".git/objects/1a/d7683b343914430a62157ebf451b9b2aa95cac": "94fdc36a022769ae6a8c6c98e87b3452",
".git/objects/4c/cc545d6cda796291b2aecd3c8f51d4970d26b9": "8c9bfa4b9ee36ccc542aed27f04392b1",
".git/objects/75/1e836c98e12df9ac372c3b3d3d94cfd2fc3524": "81d4a9f2820f141c2c1d314a622d8899",
".git/objects/81/3434c1f80ea0df4ff385613ee36bfaac9939e7": "02fcf37749ab59df51df2259f4886cad",
".git/objects/2a/a7c1b027b605cb4bcf19cd8606abd50727d369": "f472e087a96342a05c68268ba904123f",
".git/objects/2f/053410a4f42110e806f71e875f405bbc498b11": "f9bb1d3868f2eaf2591a89b3ada309b3",
".git/objects/9f/0c71b70a49664ced448c63edc9c4ff2bf8cf4a": "bfe12b0c8078a4f477699ecebf5fd96c",
".git/objects/9f/30dc3993502355f18d5c32aa74b0d25bb4ece1": "555c9dbff624e32cde68b81cf8ad1fac",
".git/objects/6b/cdcc27f22e001e46defdfd9e23f224ff65dd67": "624b5324c1f5198f7f6ede95410d5b7b",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/00/559eeb290fb8036f10633ff0640447d827b27c": "7fbd4486d5ea862eb2c1d2a07b06b395",
".git/objects/00/b898cb4f427f02f5c3821d74b38523008d93ee": "e84abb7b36d2078d2d561f3413592145",
".git/objects/6e/320510fb33d4d5f0f33f124e4d1785786e7788": "9a7e012ac25a71d8d1bd5de6971b1bd4",
".git/objects/09/4c12255146c58c029f8e2e4669c4ec74d1c75c": "34c3193ee6d93f1c300090ea87d20e81",
".git/objects/09/43496c7e54e2ac86c573e3698268b2f5135aff": "91229673487be7eb9a58ca6fdfa02ec1",
".git/objects/5d/77a6946da39c6ee2708d9253ce449a34aa5535": "95dee5eb655cca553819bb249d0976bf",
".git/objects/91/b5b59df77e226685be96524339fedb115a0ecb": "6e7584bcaa46fa43774139b9aca818e0",
".git/objects/96/aa9078913fe255d3c0ed3edd6120ceb35c050f": "3dffe385572819c139c50da249f734aa",
".git/objects/96/18fd81a4e17e8eed139e2e2f28289132147878": "8673b9440b30fc2971f6f0f0ad17e094",
".git/objects/3a/4796f6e5d20423f0e5d7c99baa33769c928252": "6c3e291968ff8034d081952d5788ed6d",
".git/objects/98/68325a425dfcc1f34a99335aaaec44efcd8e6b": "c8f973ca745ae587138faf8edebc1358",
".git/objects/53/18a6956a86af56edbf5d2c8fdd654bcc943e88": "a686c83ba0910f09872b90fd86a98a8f",
".git/objects/53/3d2508cc1abb665366c7c8368963561d8c24e0": "4592c949830452e9c2bb87f305940304",
".git/objects/30/effbc980a88c1b600437a935c8916f5fb426f4": "cee189739030ca3fc1004579e2915bd5",
".git/objects/30/ca7b881f36d33afdc4fe12bb297ee5c3b60f1b": "cb5f3dc12915885d97828a54427e698b",
".git/objects/5b/ee4bd4d4863ba372dbe614e3615679e50cf1f4": "cd223c5fe94dba0b30da9350bbef1b1e",
".git/objects/39/a17c87d70e95bbf953b813b4195c40babe2ecb": "ea57041db59107030d7dae7000f0904b",
".git/objects/52/3f50597d4f3de5979e1ea81ba1f66bfb9d0f8e": "9f0d09eb3da5a73e86422b161dc38e80",
".git/objects/0a/44d0c63ea65dce1c935dd0c729e70a59a92b74": "17e24890cbcca16282dc2bf096950f16",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/b8/cbedb82e954ee5eb8e5912a0a848a84e5d74f4": "e5469d30e0bec352de3be43971dfb72b",
".git/objects/dc/be5fc317bc90e246bdb7fbdea368dec0638cb9": "e72f5eaf05c824dddef22bacfb98b6fc",
".git/objects/dc/11fdb45a686de35a7f8c24f3ac5f134761b8a9": "761c08dfe3c67fe7f31a98f6e2be3c9c",
".git/objects/a9/d25ffe5259a2f30bb8d50b3ce2cf08220929dc": "8657f3fd107d19615d820ec03d036958",
".git/objects/a9/0bdb88c5ac37dc39280c076a3cc3b7969353c7": "39cb18a63e0309230689cc0355c1abe3",
".git/objects/d5/cf29abdb09c24a656f6aa575c3b02f489d8c9f": "7aab2e2e0f346e0df1a62139a4d4fcce",
".git/objects/af/3f81a2832b2d0a141a2fe08eb31d5a0d81d22b": "af1555f4030b303c9cd9ba0d5c509027",
".git/objects/b7/3fec63090a6b410b665a5b01d14e335ba3dac8": "73ea3783ccacd3a05b1a29fbb2cb599b",
".git/objects/b9/6a5236065a6c0fb7193cb2bb2f538b2d7b4788": "4227e5e94459652d40710ef438055fe5",
".git/objects/c4/28e14a86446ff81c9d15488e278192a1080a27": "495e558f76a736ce9ed505751d17227e",
".git/objects/f9/d240a94e6a7d6600fa3ce6c9caea17c4fd10be": "07199dd20b186e7faf409dcabff1aa69",
".git/objects/ff/93ccc6e32913579415993a49b40cd88c418587": "5a6790dd92089318e6617d341c8b45d8",
".git/objects/c5/63494cb49230a2b513310503194e43e9768dc0": "62cf013e144d4df4bfcb9bf4f5caaa7a",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/e0/7ac7b837115a3d31ed52874a73bd277791e6bf": "74ebcb23eb10724ed101c9ff99cfa39f",
".git/objects/2c/c0dc6a6a38e83245731bfae0fd09806c7f18f5": "be51a425a576c698d547e7e448b92a52",
".git/objects/48/69530e5dfe26b47bf5c245e5c2e493dbe07281": "af53b9ffca0aa3c4a92a48e52306c9d4",
".git/objects/70/a234a3df0f8c93b4c4742536b997bf04980585": "d95736cd43d2676a49e58b0ee61c1fb9",
".git/objects/70/a3b3cfcb1bbcce1fa85a38a9332b6e6e371706": "43de2665fcf2b07e67725a1224a61a86",
".git/objects/8d/8d329c62cd7829d8717128e196ef101940a906": "635c47f7dc37df7bf8061eecfe142a80",
".git/objects/15/406aa397e0c46145efc4e7d1fb883c83b384e5": "d4dde3037cd562d129fa106c496f21b5",
".git/objects/71/c6120c45fcbca803d8b5f7c01fd051912822ed": "d70406897291dd8795f85da8e87d21a3",
".git/objects/78/44a1567a477eab9764fcd64ac5f6a26da72b48": "4aa26dc1acc289bd45f33c2cf06617e6",
".git/objects/22/0ae2fde2f2230eb952892b1b15f278a73cc330": "f3568412d29512f9c09369cfb39374da",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "3d67f19a26d892c8c6a2b55cce73df5b",
".git/logs/refs/heads/main": "57cc8c52480140d72ec178f8cacc5fe2",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "53f151c70567588a68906ee249391084",
".git/index": "98b7778427e8f278bc1df361501a2a11",
".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
"assets/AssetManifest.json": "ad6c085fb4ca5ca2fd2c2088e96795af",
"assets/NOTICES": "06f31f61143f718077fe3bfc3fe04962",
"assets/FontManifest.json": "d5c53906b6d86d304b23aa61eec71815",
"assets/AssetManifest.bin.json": "e2fd3078f5411b5dc053ce41ecfddaf9",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "6d38fe5a94548919114a17f169047b5b",
"assets/fonts/MaterialIcons-Regular.otf": "b9dd810b4b5ea9fca3cca5aebdfe0bcd",
"assets/assets/images/nibm.png": "b0842646385fb6105a447c069b668579",
"assets/assets/images/mms.png": "84789cb6e6a39ac00508cb478f88ee13",
"assets/assets/images/github.png": "bada3b2dca0911637f07d961cd7da5d5",
"assets/assets/images/bdtask.png": "bacbad02a81bb7b6eceb6a34d2bdd352",
"assets/assets/images/diu.png": "dc101a64aa5b3377987abeb7eb475a91",
"assets/assets/images/hyder.png": "561d194f773b4225aec9998d95f957b3",
"assets/assets/images/easital.png": "1290c0c9af919d5729b0889d151bcaa7",
"assets/assets/images/mlsa.png": "ac77090e37e75814439d7134e6f38d28",
"assets/assets/images/logo.jpg": "500e1e4a1fe89c700d4f742a9ba51dbd",
"assets/assets/images/flutterscope.png": "bf9d96f9660b19b398e0b02316f65523",
"assets/assets/images/selise.png": "19e3759f81f5ace91564c0a7d9b539a6",
"assets/assets/icons/telegram.png": "c89ff009e3e05233e29b53baea4b57de",
"assets/assets/icons/volunteer.png": "7c2b0e4e0cd150fd439e01cd60da1261",
"assets/assets/icons/instagram.png": "78064309e7314e8399f3f83d715aecc7",
"assets/assets/icons/github.png": "e6b2daf427b81c388625ffee75f2acf4",
"assets/assets/icons/dev.png": "136350fd9f00dc8d1dd1514e40b9f9cd",
"assets/assets/icons/developer.png": "6576f0932f8dc70413579a59715c184b",
"assets/assets/icons/student.png": "e9e5874f03b649f3101e7458f3b7acdf",
"assets/assets/icons/done.png": "d3786409b1df621a0b55e61d92430590",
"assets/assets/icons/twitter.png": "632f6320a7e3538439ffafd9ee8a03cd",
"assets/assets/icons/linkedin.png": "1816e5c1168ca75e4e824ed21c4f002a",
"assets/assets/icons/hashnode.png": "5830176711a7028847bb9ef5fba9b39b",
"assets/assets/icons/youtube.png": "92d7341ea8fd5c88350cbd570a145f43",
"assets/assets/icons/facebook.png": "cb055867df3c7b03ef1135f77d1a9411",
"assets/assets/fonts/Poppins-Medium.ttf": "bf59c687bc6d3a70204d3944082c5cc0",
"assets/assets/fonts/Poppins-Regular.ttf": "093ee89be9ede30383f39a899c485a82",
"assets/assets/fonts/Poppins-Bold.ttf": "08c20a487911694291bd8c5de41315ad",
"assets/assets/fonts/Poppins-SemiBold.ttf": "6f1520d107205975713ba09df778f93f",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
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
