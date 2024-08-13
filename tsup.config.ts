import { defineConfig } from "tsup"

export default defineConfig([
  {
    entry: ["src/index.ts"],
    format: "cjs",
    dts: true,
    clean: true,
    shims: true,
  },
  {
    entry: ["src/index.ts"],
    format: "esm",
    dts: true,
    clean: true,
    shims: true,
  },
])
