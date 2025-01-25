import { Box, VStack, HStack, Text, Link, Icon, useColorModeValue } from '@chakra-ui/react'
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';



const Footer = () => {
    const color = useColorModeValue("gray.800", "gray.100");
    const bg = useColorModeValue("gray.200", "gray.800");
    const hoverBg = useColorModeValue("gray.100", "gray.700");
    const hoverColor = useColorModeValue("blue.500", "cyan.400");

    return (
        <Box
            bg={bg}
            color={color}
            py={4}
            mt="auto"
            textAlign="center"
            width="100%"
        >
            <VStack spacing={4} textAlign="center">
                <Text fontSize="lg" fontWeight="bold" color='gray.500'>
                    SnapProducts ©{new Date().getFullYear()}
                </Text>
                <Text fontSize="sm" color='gray.700'>
                    Creado por{" "}
                    <Link href="https://everloza-porfolio.netlify.app/" isExternal color="gray.600">
                        Ever Loza
                    </Link> utilizando React y Chakra UI.
                </Text>
                <HStack spacing={6}>
                    <Link
                        color='gray.700'
                        href='https://github.com/never130'
                        isExternal
                        _hover={{
                            bg: hoverBg,
                            rounded: "full",
                            color: hoverColor,  // Cambiar el color del ícono
                            transform: "none",  // Evitar cualquier transformación de escala
                        }}
                    >
                        <Icon as={FaGithub} w={6} h={6} />
                    </Link>
                    <Link
                        color='gray.700'
                        href="https://linkedin.com/in/never130"
                        isExternal
                        _hover={{
                            bg: hoverBg,
                            rounded: "full",
                            color: hoverColor,  // Cambiar el color del ícono
                            transform: "none",  // Evitar cualquier transformación de escala
                        }}
                    >
                        <Icon as={FaLinkedin} w={6} h={6} />
                    </Link>
                    <Link
                        color='gray.700'
                        href="https://instagram.com/radiocreep95"
                        isExternal
                        _hover={{
                            bg: hoverBg,
                            rounded: "full",
                            color: hoverColor,  // Cambiar el color del ícono
                            transform: "none",  // Evitar cualquier transformación de escala
                        }}
                    >
                        <Icon as={FaInstagram} w={6} h={6} />
                    </Link>
                </HStack>
            </VStack>
        </Box>
    );
};

export default Footer;