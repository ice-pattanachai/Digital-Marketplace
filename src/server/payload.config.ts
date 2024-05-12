import dotenv from "dotenv";
import path from "path";
import { buildConfig } from "payload/config";
import { mongooseAdapter } from "@payloadcms/db-mongodb";
import { slateEditor } from "@payloadcms/richtext-slate";
import { webpackBundler } from "@payloadcms/bundler-webpack";

dotenv.config({
  path: path.resolve(__dirname, "../../.env"),
});

export default buildConfig({
  serverURL: process.env.NEXT_PUBLIC_SERVER_URL || "",
  // collections: [Users, Products, Media, ProductFiles, Orders],
  collections: [],
  routes: {
    admin: "/seller",
  },
  admin: {
    // user: "users",
    bundler: webpackBundler(),
    meta: {
      titleSuffix: "- Little Shop.",
      favicon: "/L.ico",
      ogImage: "/night-view-1277021_1280.jpg",
    },
  },
  rateLimit: {
    max: 2000,
  },
  editor: slateEditor({}),
  // Mongodb
  db: mongooseAdapter({
    url: process.env.MONGODB_URL!,
  }),
  typescript: {
    outputFile: path.resolve(__dirname, "payload-types.ts"),
  },
});
