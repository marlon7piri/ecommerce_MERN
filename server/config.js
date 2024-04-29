import {config} from "dotenv"

config()

export const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/test";
export const PORT = process.env.PORT || 8080 ;
export const PUBLIC_KEY_STRIPE = process.env.PUBLIC_KEY_STRIPE;
export const MY_DOMAIN = process.env.MY_DOMAIN

/* export const API_KEY_CLOUDINARY = process.env.API_KEY_CLOUDINARY
export const API_SECRET_CLOUDINARY = process.env.API_SECRET_CLOUDINARY
export const  CLOUD_NAME = process.env.CLOUD_NAME */