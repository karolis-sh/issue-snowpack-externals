/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    public: { url: "/", static: true },
    renderer: "/",
  },
  devOptions: {
    output: "stream",
    open: "none",
  },
  packageOptions: {
    external: ["fs"],
  },
  workspaceRoot: "../..",
  exclude: ["**/node_modules/**/*", "**/my-node-package/**/*"],
};
