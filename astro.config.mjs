import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import icon from "astro-icon";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), icon(), tailwind({ applyBaseStyles: true })],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: ` 
          @use 'astro-scroll-observer/use-scroll-observer.scss' as *;
    `,
        },
      },
    },
  },
  i18n: {
    defaultLocale: "es",
    locales: ["es", "en"],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
