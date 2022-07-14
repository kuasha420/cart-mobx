import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import {
  Flex,
  HStack,
  IconButton,
  Image,
  StackItem,
  Text,
} from "@chakra-ui/react";
import { observer } from "mobx-react-lite";
import type { NextPage } from "next";
import Head from "next/head";
import { useRootStore } from "../stores/RootStoreProvider";

const Cart: NextPage = observer(() => {
  const store = useRootStore();
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
      {store.cart.map((item, index) => (
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
              <IconButton
                onClick={item.decrement}
                aria-label="Decrease Quantity"
                icon={<MinusIcon />}
              />
              <Text>{item.quantity}</Text>
              <IconButton
                onClick={item.increment}
                aria-label="Increase Quantity"
                icon={<AddIcon />}
              />
            </HStack>
          </StackItem>
          <StackItem flex={2}>
            <Text>$ {item.price * item.quantity}</Text>
          </StackItem>
        </HStack>
      ))}
      <Flex m="4" justify="center">
        <StackItem>
          <Text>Grand Total: $ {store.grandTotal}</Text>
        </StackItem>
      </Flex>
    </>
  );
});

export default Cart;
