import dotenv from "dotenv";
import { env } from "node-environment";

const result = dotenv.config();
if (result.error && !env("production")) {
  console.debug("🚨 Failed to parser /.env file");
}

const config = {
  port: +(process.env.PORT ?? "3000"),
  logLevel: process.env.LOG_LEVEL ?? "info",
  telegram: {
    token: process.env.TELEGRAM_ACCESS_TOKEN,
  },
  env,
  noLog: ["true", "1"].some(v => v === process.env.NO_LOG?.toLowerCase()),
};

export default config;
