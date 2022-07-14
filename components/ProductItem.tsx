import {
  Badge,
  Button,
  Heading,
  HStack,
  Image,
  Stack,
  StackItem,
  Text,
} from "@chakra-ui/react";

export interface ProductItemProps {
  name: string;
  description: string;
  category: string;
  image: string;
  price: number;
  sale: number;
}

const ProductItem = ({
  name,
  image,
  description,
  price,
  sale,
}: ProductItemProps) => (
  <Stack>
    <StackItem>
      <Image src={image} alt={name} h="200px" w="100%" />
    </StackItem>
    <StackItem>
      <Heading>{name}</Heading>
    </StackItem>
    <StackItem>
      <Text noOfLines={4}>{description}</Text>
    </StackItem>
    <StackItem>
      <HStack>
        <StackItem mr={2}>
          <Badge colorScheme="green">$ {sale}</Badge>
        </StackItem>
        <StackItem>
          <Badge textDecor="line-through">$ {price}</Badge>
        </StackItem>
      </HStack>
    </StackItem>
    <StackItem>
      <Button colorScheme="blue" variant="outline">
        Add to Cart
      </Button>
    </StackItem>
  </Stack>
);

export default ProductItem;
