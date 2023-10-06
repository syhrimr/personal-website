import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";

const config = defineConfig({
  title: 'my-portfolio',
  projectId: 'zbyhb19n',
  dataset: 'production',
  apiVersion: "2023-10-06",
  basePath: "/admin",
  plugins: [deskTool()]
});

export default config;