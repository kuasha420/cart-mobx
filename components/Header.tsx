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
import NavLink from "./NavLink";

const Links = ["Home", "Cart"];

const Header = () => (
  <Box bg="gray.100" px={4} pos="sticky" top="0">
    <Flex h={16} alignItems="center" justifyContent="space-between">
      <HStack spacing={8} alignItems="center">
        <HStack>
          <Image alt="logo" h={"6"} src="https://mobx.js.org/assets/mobx.png" />
          <Text>Mobx Example</Text>
        </HStack>
        <HStack as="nav" spacing={4} display={{ base: "none", md: "flex" }}>
          {Links.map((link) => (
            <NavLink key={link}>{link}</NavLink>
          ))}
        </HStack>
      </HStack>
      <Flex alignItems="center">
        <Menu>
          <MenuButton rounded="full" cursor="pointer" minW={0}>
            <HStack>
              <Icon as={MdShoppingCart} />
              <Badge colorScheme="purple">0</Badge>
            </HStack>
          </MenuButton>
          <MenuList>
            <MenuItem>View Cart</MenuItem>
            <MenuDivider />
            <MenuItem>Clear Cart</MenuItem>
          </MenuList>
        </Menu>
      </Flex>
    </Flex>
  </Box>
);

export default Header;
