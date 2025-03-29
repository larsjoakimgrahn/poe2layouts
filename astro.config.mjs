// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
    site: "https://larsjoakimgrahn.github.io/poe2layouts/",
    base: "/poe2layouts/",
    vite: {
        plugins: [tailwindcss()],
    },
});
