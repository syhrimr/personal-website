import { defineConfig } from "sanity";

import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";
import { codeInput } from "@sanity/code-input";

import schemas from "./sanity/schemas";

const config = defineConfig({
  title: 'my-portfolio',
  projectId: 'zbyhb19n',
  dataset: 'production',
  apiVersion: "2023-10-06",
  basePath: "/admin",
  plugins: [deskTool(), visionTool(), codeInput()],
  schema: {
    types: schemas
  }
});

export default config;