import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET || "jhgfdfgh567";

export const adminLogin = async (req: Request, res: Response) => {
    try {
        const { name, password } = req.body;

        if( name !== process.env.ADMIN_NAME || password !== process.env.ADMIN_PASSWORD) {
            res.status(401).json({ error: "Invalid credentials" });
            return;
        }

        const token = jwt.sign({name}, JWT_SECRET, { expiresIn: '1d' });

        res.status(200).json({
            message: "Login successful",
            token,
        });
    } catch (error) {
        console.error("Error during admin login:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};