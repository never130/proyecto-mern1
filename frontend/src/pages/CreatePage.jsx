import { Box, Button, Container, Heading, Input, useColorModeValue, useToast, VStack } from "@chakra-ui/react";
import { useState } from "react"
import { useProductStore } from "../store/product.js"

const CreatePage = () => {
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    image: "",
  });
  const toast = useToast();
  const { createProduct } = useProductStore()

  const handleAddProduct = async () => {
    const { success, message } = await createProduct(newProduct);
    if (!success) {
      toast({
        "tittle": "Error",
        "description": message,
        status: "error",
        duration: 5000,
        isClosable: true
      })
    } else {
      toast({
        "tittle": "Producto Agregado",
        "description": "Producto agregado exitosamente",
        status: "success",
        duration: 5000,
        isClosable: true
      })

    }
    setNewProduct({ name: "", price: "", image: "" })
  }


  return <Container maxW={"container.sm"}>
    <VStack
      spacing={8}>
      <Heading as={"h1"} size={"2xl"} textAlign={"center"} mb={8}>
        Crear Nuevo Producto
      </Heading>
      <Box
        w={"full"} bg={useColorModeValue("white", "gray.800")}
        p={6} rounded={"lg"} shadow={"md"}>
        <VStack spacing={4}>
          <Input
            placeholder='Nombre del Producto'
            name='name'
            value={newProduct.name}
            onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
          />
          <Input
            placeholder='Precio'
            name='price'
            type="number"
            value={newProduct.price}
            onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
          />
          <Input
            placeholder='URL de la Imagen'
            name='image'
            value={newProduct.image}
            onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })}
          />
          <Button colorScheme={"blue"} onClick={handleAddProduct} w="full">
            Agregar Producto
          </Button>
        </VStack>
      </Box>
    </VStack>
  </Container>
}

export default CreatePage; 