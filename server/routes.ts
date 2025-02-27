import type { Express } from "express";
import { createServer } from "http";
import { storage } from "./storage";
import { insertPropertySchema } from "@shared/schema";

export async function registerRoutes(app: Express) {
  app.post("/api/property", async (req, res) => {
    try {
      const data = insertPropertySchema.parse(req.body);
      const result = await storage.createProperty(data);
      res.json(result);
    } catch (error: any) {
      console.error('Error creating property:', error);
      res.status(400).json({ 
        error: error.message || "Invalid property data",
        details: error.details || undefined
      });
    }
  });

  app.get("/api/property/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const property = await storage.getProperty(id);

      if (!property) {
        return res.status(404).json({ error: "Property not found" });
      }

      res.json(property);
    } catch (error: any) {
      console.error('Error fetching property:', error);
      res.status(500).json({ error: "Failed to fetch property" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}