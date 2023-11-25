import { defineConfig } from "tsup";

export default defineConfig(async () => {
  return [
    {
      entry: ["packages/**/*.ts"],
      format: ["esm", "cjs"],
      dts: true,
      sourcemap: true,
    },
  ];
});
