import mongoose from "mongoose";

export async function connect() {
  const site = process.env.DB_SITE;

  try {
    if (!site) return;
    const connection = await mongoose.connect(site);
  } catch (err) {
    console.log(err);
  }
}
