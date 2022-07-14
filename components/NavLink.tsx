import NextLink from "next/link";
import { Link } from "@chakra-ui/react";
import { ReactNode } from "react";

interface NavLinkProps {
  children: ReactNode;
  href: string;
}

const NavLink = ({ children, href }: NavLinkProps) => (
  <NextLink href={href} passHref>
    <Link
      px={2}
      py={1}
      rounded={"md"}
      _hover={{
        textDecoration: "none",
        bg: "gray.200",
      }}
      href={"#"}
    >
      {children}
    </Link>
  </NextLink>
);

export default NavLink;
