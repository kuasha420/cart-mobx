import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import {
  Flex,
  HStack,
  IconButton,
  Image,
  Stack,
  StackItem,
  Text,
} from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";

const cartitems = [
  {
    name: "Product 1",
    price: 10,
    quantity: 1,
    image: "https://picsum.photos/200",
  },
  {
    name: "Product 2",
    price: 20,
    quantity: 2,
    image: "https://picsum.photos/200",
  },
  {
    name: "Product 3",
    price: 30,
    quantity: 3,
    image: "https://picsum.photos/200",
  },
];

const Cart: NextPage = () => {
  return (
    <>
      <Head>
        <title>Cart | Basic Mobx Example</title>
      </Head>
      <HStack m="4">
        <StackItem flex={1}>
          <Text>#</Text>
        </StackItem>
        <StackItem flex={8}>
          <Text>Product Name</Text>
        </StackItem>
        <StackItem flex={2}>
          <Text>Price</Text>
        </StackItem>
        <StackItem flex={2}>
          <Text>Quantity</Text>
        </StackItem>
        <StackItem flex={2}>
          <Text>Total</Text>
        </StackItem>
      </HStack>
      {cartitems.map((item, index) => (
        <HStack key={item.name} m="4">
          <StackItem flex={1}>
            <Text>{index + 1}</Text>
          </StackItem>
          <StackItem flex={8}>
            <HStack spacing={3}>
              <Image src={item.image} alt={item.name} h="20px" />
              <Text>{item.name}</Text>
            </HStack>
          </StackItem>
          <StackItem flex={2}>
            <Text>$ {item.price}</Text>
          </StackItem>
          <StackItem flex={2}>
            <HStack>
              <IconButton aria-label="Decrease Quantity" icon={<MinusIcon />} />
              <Text>{item.quantity}</Text>
              <IconButton aria-label="Increase Quantity" icon={<AddIcon />} />
            </HStack>
          </StackItem>
          <StackItem flex={2}>
            <Text>$ {item.price * item.quantity}</Text>
          </StackItem>
        </HStack>
      ))}
      <Flex m="4" justify="center">
        <StackItem>
          <Text>Grand Total: $ 0000</Text>
        </StackItem>
      </Flex>
    </>
  );
  cartitems;
};

export default Cart;
