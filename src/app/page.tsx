import  Box  from "@mui/material/Box";
import FAQContainer from "./components/FAQContainer";
import Image from "next/image";
export default function Home() {
  return (
      <Box sx={{
          height:"95vh",
          display:"flex",
          justifyContent:"center",
          alignItems:"center",
          overflow:"hidden",
          backgroundColor:"#f8eeff",
          marginTop:"2rem"
          }}>
          <Image src='assets/images/background-pattern-desktop.svg' alt="background" width={1440} height={320} style={{position:"absolute",top:"0",zIndex:1}}/>
          <FAQContainer />
      </Box>
  );
}
