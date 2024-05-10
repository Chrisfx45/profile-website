"use client"

import { Box, Center,Text } from "@chakra-ui/react";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import LOGO from "../../public/LOGO.png"
import IMG1 from "../../public/IMG1.jpg"
import IMG2 from "../../public/IMG2.jpg"
import IMG3 from "../../public/IMG3.jpg"
import IMG4 from "../../public/IMG4.jpg"
import IMG5 from "../../public/IMG5.jpg"
import localfont from "next/font/local"


const TNRfont = localfont({
  src: [
    {
      path :"/TNR.woff2",
      style: "normal",
      weght : "400"
    }

]})
const myFont = localfont({
  src: [
    {
      path :"/Lucida.woff2",
      style: "normal",
      weght : "400"
    }

]})

export default function Home() {
  const [width, setWidth] = useState(0)
  const [height, setHeight] = useState(0)

  const handleWindowResize = () => {
    setWidth(window.innerWidth * 0.98);
    setHeight(window.innerHeight);
  }
  useEffect(() => {
    // component is mounted and window is available
    handleWindowResize();
    window.addEventListener('resize', handleWindowResize);
    // unsubscribe from the event on component unmount
    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);
  const Screens = ()=>{
    if (width > 800){
      let widthLogo = width/ 3.3
      return(
        <>
        <Image src={IMG2} alt = "img2" style={{
            position : "absolute",
            top : 0,
            left: 0 ,
            minWidth : "10",
            width : width/20,
            height : "auto"
          }}></Image>
        <Image src={IMG3} alt = "img2" style={{
            position : "absolute",
            top : height/7,
            right: width/70 ,
            minWidth : "10",
            width : width/20,
            height : "auto"
          }}></Image>
        <Image src={IMG4} alt = "img3" style={{
            position : "absolute",
            top : height/1.2,
            right: width/70 ,
            minWidth : "10",
            width : width/20,
            height : "auto"
          }}></Image>
        <Image src={IMG5} alt = "img5" style={{
            position : "absolute",
            top : height/1.25,
            left: 0 ,
            minWidth : "10",
            width : width/20,
            height : "auto"
          }}></Image>
        <Center width={"100%"} padding={"3%"}  className= {myFont.className} style={{
          color: "black",
          fontSize: 24
        }}>
          <Center width={"95%"} flex={true}>
          <p>Christine•  </p>
          <Box padding={"1%"} w={"75%"}><hr style={{
              display: "block",
              height: "3px",
              borderBlockColor: "black"


          }}/></Box>
          <p>Foodirectory.sg</p>

          </Center>

        </Center>
        <Center marginBottom={"5%"}>

          <Image src={LOGO} alt = "LOGO" style={{
            width : widthLogo,
            height : "auto"
          }}></Image>
        </Center>
        <Image src={IMG1} alt = "img1" style={{
            marginLeft: width/20,
            minWidth : "10",
            width : width/27,
            height : "auto"
          }}></Image>
        <Box style={{ color : "black"}} paddingLeft={"5%"} paddingTop={"2%"} className={TNRfont.className} fontSize={"1.5vw"}>

          Wandering gastronaut on a quest of unpretentious<br/>
          food, hidden gems and exquisite staycation ❈
        </Box>
        </>

      )
    }
    else{
      return(
        <>
        <Image src={IMG2} alt = "img2" style={{
            padding : "2%",
            minWidth : "10",
            width : width/7,
            height : "auto"
          }}></Image>
        <Image src={IMG1} alt = "img1" style={{
            marginLeft: width/1.1,
            minWidth : "10",
            width : width/12,
            height : "auto"
          }}></Image>
        <Center width={"100%"} padding={"3%"} flex={true} className= {myFont.className} style={{
          color: "black",
          fontSize:"3vw"
        }}>

          <p>Christine</p>         
          <Box padding={"1%"} w={"75%"}><hr style={{
              display: "block",
              height: "3px",
              borderBlockColor: "black"
          }}/></Box>
          <p>Foodirectory.sg</p>
        </Center>
        <Center>

          <Image src={LOGO} alt = "LOGO" style={{
            minWidth : "600",
            width : width* 0.8,
            height : "auto"
          }}></Image>
 
        </Center>
        <Box wid style={{ color : "black"}} paddingLeft={"5%"} paddingTop={"15%"} className={TNRfont.className} fontSize={"2.5vw"}>
                    Wandering gastronaut on a quest of unpretentious<br/>
                    food, hidden gems and exquisite staycation
        </Box>
        <Image src={IMG1} alt = "img1" style={{
            marginLeft: width * 0.1,
            minWidth : "10",
            width : width/12,
            height : "auto",
            paddingTop : height * 0.03
          }}>

          </Image>
          <Image src={IMG4} alt = "img4" style={{
            marginLeft: width * 0.8,
            minWidth : "10",
            width : width/8,
            height : "auto",
            paddingTop : height * 0.12
          }}>

          </Image>
        </>

      )
    }

  }
  return (
    <main style={{backgroundColor:"#f6f1eb"}} >
      
      <Box w = {width} h= {height *1.1} backgroundColor="#f6f1eb">
        <Box  w = {width * 0.98}><Screens/> </Box>
         </Box>
     


    </main>
  );
}
