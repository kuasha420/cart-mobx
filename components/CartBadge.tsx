import { Badge, HStack, Icon } from "@chakra-ui/react";
import { observer } from "mobx-react-lite";
import { MdShoppingCart } from "react-icons/md";
import { useRootStore } from "../stores/RootStoreProvider";

const CartBadge = observer(() => {
  const store = useRootStore();
  return (
    <HStack>
      <Icon as={MdShoppingCart} />
      <Badge colorScheme="purple">{store.totalItems}</Badge>
    </HStack>
  );
});

export default CartBadge;
