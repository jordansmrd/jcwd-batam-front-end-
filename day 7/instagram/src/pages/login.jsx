import  { Center,Flex,Box,Image } from "@chakra-ui/react";
import InstagramLogin from "../assets/ig-login.png"
import Login from "../components/login";

export default function LoginPage() {

return ( 
    <>
    <Box bgColor={"#FAFAFA"} minW={821} minH={"100vh"}  >
    <Center gap={8} flexWrap="wrap" paddingY={"14"} minH={"100vh"}>
        <Flex display="inline-flex" flexDir={"column"} >
        <Image src={InstagramLogin} width="100%" h="100%" />
        </Flex>

        <Flex display="inline-flex" flexDir={"column"}>
        <Login/>
        </Flex>
    </Center>
    </Box>
    </>
)
}
