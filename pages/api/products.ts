// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import fs from "fs/promises";
import Jabber from "jabber";

const jabber = new Jabber();

function capitalizeFirstLetter(str: string) {
  return str[0].toUpperCase() + str.slice(1);
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const categories = await fs.readdir(process.cwd() + "/public/");
  const products = await Promise.all(
    categories.map((category) =>
      fs.readdir(process.cwd() + "/public/" + category)
    )
  );

  const fruit = products[0];
  const vegetable = products[1];

  const fruits = fruit.map((fruit) => ({
    name: capitalizeFirstLetter(fruit.split(".")[0]),
    description: jabber.createParagraph(25),
    category: "fruit",
    image: "/fruit/" + fruit,
    price: fruit.length * 10,
    sale: fruit.length * 7,
  }));

  const vegetables = vegetable.map((vegetable) => ({
    name: capitalizeFirstLetter(vegetable.split(".")[0]),
    description: jabber.createParagraph(25),
    category: "vegetable",
    image: "/vegetable/" + vegetable,
    price: vegetable.length * 20,
    sale: vegetable.length * 15,
  }));

  res.status(200).json({ categories, products: [...fruits, ...vegetables] });
}
