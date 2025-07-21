import type { Express } from "express";
import { createServer, type Server } from "http";
import nodemailer from "nodemailer";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const { name, email, interest, message } = req.body;

      // Validate required fields
      if (!name || !email || !interest || !message) {
        return res.status(400).json({ 
          message: "All fields are required" 
        });
      }

      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return res.status(400).json({ 
          message: "Invalid email format" 
        });
      }

      // In a real implementation, you would set up nodemailer with actual SMTP credentials
      // For now, we'll just log the contact form submission
      console.log("Contact form submission:", {
        name,
        email,
        interest,
        message,
        timestamp: new Date().toISOString()
      });

      // Simulate email sending delay
      await new Promise(resolve => setTimeout(resolve, 1000));

      res.status(200).json({ 
        message: "Contact form submitted successfully",
        data: { name, email, interest }
      });

    } catch (error) {
      console.error("Contact form error:", error);
      res.status(500).json({ 
        message: "Internal server error. Please try again later." 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
