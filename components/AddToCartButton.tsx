import { Button } from "@chakra-ui/react";
import { observer } from "mobx-react-lite";
import { useRootStore } from "../stores/RootStoreProvider";

interface Props {
  name: string;
  image: string;
  price: number;
}

const AddToCartButton = observer(({ name, image, price }: Props) => {
  const store = useRootStore();
  return (
    <Button
      onClick={() => {
        store.addToCart(name, image, price);
      }}
      colorScheme="blue"
      variant="outline"
    >
      Add to Cart
    </Button>
  );
});

export default AddToCartButton;
