import { defineConfig } from "cf/config";

// The site is a client-side Vue SPA: `vp build` writes `dist/index.html` plus
// hashed assets, and the Worker only serves those static files. Vue Router
// owns `/rules`, so any unmatched path falls back to the SPA entry point.
export default defineConfig({
  worker: {
    name: "las-web",
    compatibilityDate: "2026-11-06",
    assets: { notFoundHandling: "single-page-application" },
    domains: ["lzalien.org"],
    workersDev: true,
    previewUrls: true,
    observability: { enabled: true },
  },
});
