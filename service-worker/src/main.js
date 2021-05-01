(() => {
    console.log("[main.js] hello world");

    if ("serviceWorker" in navigator) {
        navigator.serviceWorker
            .register("./src/sw.js")
            .then((reg) => {
                // registration worked
                console.log(
                    "[main.js] service worker registration successful with scope: " +
                        reg.scope
                );
            })
            .catch((error) => {
                // registration failed
                console.log(
                    "[main.js] service worker registration failed with: " +
                        error
                );
            });
    }
})();
