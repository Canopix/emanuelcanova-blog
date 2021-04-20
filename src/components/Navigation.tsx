import Link from "next/link";
import { useRouter } from "next/router";
import Burger from "./Burger";
import { useState } from "react";
import Image from "next/image";
import { Container, StyledLink } from "../styles/Navigation";

export default function Navigation() {
  const router = useRouter();
  const [active, setActive] = useState(false);

  return (
    <Container>
      <Burger active={active} onClick={() => setActive(!active)} />
      <StyledLink href="/" pointer>
        <Image src="/1.svg" height={300} width={300} />
      </StyledLink>
      <Link href="/">
        <StyledLink pointer active={router.pathname === "/" ? "active" : null}>
          About
        </StyledLink>
      </Link>
      <Link href="/posts">
        <StyledLink
          pointer
          active={router.pathname.startsWith("/posts") ? "active" : null}
        >
          Blog
        </StyledLink>
      </Link>
    </Container>
  );
}
