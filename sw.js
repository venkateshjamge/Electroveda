self.addEventListener("install", e => {
    e.waitUntill(
        caches.open("static").then(cache => {
            return cache.addAll(["./", "./styles.css", "./images/ElectrovedaImg.png"]);
        })
    );
});
self.addEventListener("fetch", e => {
    console.log('Intercepting fetch request for: ' + e.request.url);
});