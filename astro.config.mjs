// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightThemeFlexoki from "starlight-theme-flexoki";

// https://astro.build/config
export default defineConfig({
  site: "https://belajar-postgresql.lutfiandri.my.id",
  integrations: [
    starlight({
      plugins: [starlightThemeFlexoki()],
      title: "Belajar PostgreSQL",

      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/lutfiandri/belajar-postgresql",
        },
      ],
      customCss: ["./src/styles/custom.css"],
      sidebar: [
        {
          label: "LeetCode SQL 50",
          autogenerate: { directory: "leetcode-sql-50" },
        },
        {
          label: "Basic SQL",
          autogenerate: { directory: "basic" },
        },
      ],
    }),
  ],
});
