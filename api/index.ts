import type { VercelRequest, VercelResponse } from "@vercel/node";
import express from "express";

const app = express();

app.use(express.json());

// Health check
app.get("/api/health", (_req, res) => {
  res.json({ status: "ok" });
});

// Catch-all for API routes
app.use("/api", (_req, res) => {
  res.status(404).json({ error: "Not found" });
});

export default function handler(req: VercelRequest, res: VercelResponse) {
  return app(req as any, res as any);
}
