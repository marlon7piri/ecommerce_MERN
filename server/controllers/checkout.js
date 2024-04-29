import { MY_DOMAIN, PUBLIC_KEY_STRIPE } from "../config.js";
import Stripe from "stripe";

const stripe = new Stripe(PUBLIC_KEY_STRIPE);
export const getStripe = async (req, res) => {
  const carrito = req.body;

  const linea_productos = await Promise.all(
    carrito.map((item) => {
      const { url } = item.image;
      return {
        price_data: {
          currency: "usd",
          product_data: {
            name: item.nombre,
            images: [url],
          },
          unit_amount: item.precio * 100,
        },
        quantity: item.cantidad,
      };
    })
  );

  const session = await stripe.checkout.sessions.create({
    success_url: `https://ecommerce-mern-pied.vercel.app/`,
    cancel_url: `https://ecommerce-mern-pied.vercel.app/`,
    line_items: linea_productos,
    mode: "payment",
  });

  return res.json(session);
};
