import "./Styles.css";
import { Box, HStack, Link, Spacer, Image } from "@chakra-ui/react";
import useScrollControl from "./useScrollControl";
import FullLogo from "./assets/FullLogo.png";

export default function NavigationBar() {
  const showHeader = useScrollControl();
  return (
    <Box
      as="header"
      // Apply the className to the Box
      className="header"
      transform={showHeader ? "translateY(0)" : "translateY(-100%)"}
    >
      <HStack spacing={4} alignItems="center" height="100%" width="100%">
        {/* Left side: Logo and Restaurant Name */}
        <HStack spacing={2}>
          <Image
            src={FullLogo}
            alt="Logo"
            boxSize="45%"
            objectFit="contain"
          />
        </HStack>
        <Spacer />
        {/* Right side: Navigation Links */}
        <HStack spacing={5}>
          <Link href="/" className="nav-btn">
            Home
          </Link>
          <Link href="#order-section" className="nav-btn">
            Menu
          </Link>
          <Link href="#about-section" className="nav-btn">
            About Us
          </Link>
          <Link href="/login" className="login-btn">
            Login
          </Link>
        </HStack>
      </HStack>
    </Box>
  );
}