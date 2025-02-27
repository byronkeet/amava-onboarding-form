import { VercelRequest, VercelResponse } from "@vercel/node";
import dotenv from "dotenv";

// Load environment variables
dotenv.config({ path: ".env.local" });

// Import the Express app
import express from "express";
import { registerRoutes } from "../server/routes";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Setup routes
registerRoutes(app);

// Create a handler for Vercel
const handler = async (req: VercelRequest, res: VercelResponse) => {
	// This is a simple proxy to the Express app
	return new Promise((resolve, reject) => {
		const expressReq = {
			...req,
			url: req.url || "/",
			method: req.method || "GET",
			headers: req.headers,
			body: req.body,
		};

		const expressRes = {
			...res,
			statusCode: 200,
			end: (chunk: any) => {
				res.end(chunk);
				resolve(undefined);
			},
			setHeader: (name: string, value: string) => {
				res.setHeader(name, value);
				return expressRes;
			},
		};

		app(expressReq as any, expressRes as any, (err: any) => {
			if (err) {
				reject(err);
				return;
			}
			resolve(undefined);
		});
	});
};

export default handler;
