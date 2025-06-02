import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  // Ignore generated files globally
  {
    ignores: [
      "lib/generated/prisma/**/*",
      "lib/generated/prisma/runtime/**/*",
      "node_modules/**/*",
      ".next/**/*",
      "**/*.d.ts",
    ],
  },

  // Apply Next.js rules to all other files
  ...compat.extends("next/core-web-vitals", "next/typescript"),

  // Optional: Override rules for specific patterns if needed
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    rules: {
      // Add any custom rule overrides here if needed
    },
  },
];

export default eslintConfig;

// import { dirname } from "path";
// import { fileURLToPath } from "url";
// import { FlatCompat } from "@eslint/eslintrc";

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);

// const compat = new FlatCompat({
//   baseDirectory: __dirname,
// });

// const eslintConfig = [
//   ...compat.extends("next/core-web-vitals", "next/typescript"),
// ];

// export default eslintConfig;
