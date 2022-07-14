import {
  Badge,
  Box,
  Flex,
  HStack,
  Icon,
  Image,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import { MdShoppingCart } from "react-icons/md";
import CartBadge from "./CartBadge";
import NavLink from "./NavLink";

const Header = () => (
  <Box bg="gray.100" px={4} pos="sticky" top="0">
    <Flex h={16} alignItems="center" justifyContent="space-between">
      <HStack spacing={8} alignItems="center">
        <HStack>
          <Image alt="logo" h={"6"} src="https://mobx.js.org/assets/mobx.png" />
          <Text>Mobx Example</Text>
        </HStack>
        <HStack as="nav" spacing={4} display={{ base: "none", md: "flex" }}>
          <NavLink href="/">Home</NavLink>
          <NavLink href="/cart">Cart</NavLink>
        </HStack>
      </HStack>
      <Flex alignItems="center">
        <CartBadge />
      </Flex>
    </Flex>
  </Box>
);

export default Header;
