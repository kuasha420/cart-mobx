import { Grid, GridItem } from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import ProductItem, { ProductItemProps } from "../components/ProductItem";

const Home: NextPage = () => {
  const [products, setProducts] = useState<ProductItemProps[]>([]);
  useEffect(() => {
    (async () => {
      const res = await fetch("/api/products");
      const data = await res.json();
      setProducts(data.products);
    })();
  }, []);
  return (
    <>
      <Head>
        <title>Home | Basic Mobx Example</title>
      </Head>
      <Grid
        templateColumns="repeat(auto-fit, minmax(200px, 1fr))"
        gap="4"
        m="4"
      >
        {products.map((product) => (
          <GridItem key={product.name}>
            <ProductItem {...product} />
          </GridItem>
        ))}
      </Grid>
    </>
  );
};

export default Home;
