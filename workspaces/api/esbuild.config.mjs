import * as esbuild from "esbuild";
import { nodeExternalsPlugin } from "esbuild-node-externals";
import hbsPlugin from "esbuild-plugin-handlebars";
import { readdirSync, rmSync } from "fs";

const entryPoints = readdirSync(`src`, {
  recursive: true,
  encoding: "utf8",
})
  .filter(
    (f) =>
      f.endsWith(".ts") && !f.includes(".spec.") && !f.includes("__tests__")
  )
  .map((f) => `src/${f}`);

rmSync("dist", { recursive: true, force: true });

await esbuild.build({
  entryPoints,
  bundle: true,
  minify: false,
  platform: "node",
  outdir: "dist",
  outbase: "src",
  metafile: true,
  plugins: [nodeExternalsPlugin({ allowWorkspaces: true }), hbsPlugin()],
  logLevel: "info",
  treeShaking: true,
});
