import { ChatBot } from "../chatBot";
import { Button, Footer, ContainerHome, Main, Nav } from "./styles"
import { FaTwitch, FaYoutube, FaInstagram, FaXTwitter } from "react-icons/fa6";


export function Home() {

  return (
   <>
     <header>
      <Nav>
       <a href="/">FURIA</a>
        <ContainerHome href="/">Home</ContainerHome>
      </Nav>
    </header>

    <Main>
      <h1>Furia <span>Esports</span></h1>
      <p>Uma das principais organizações de esports do Brasil</p>
      <Button href="https://www.furia.gg/" target="_blank" rel="noopener noreferrer">conheça a furia</Button>
    </Main>
    <Footer>
      <a href="https://www.twitch.tv/team/furia" target="_blank" rel="noopener noreferrer">
        <FaTwitch size={24} color="#9146FF" />
      </a>
      <a href="https://www.youtube.com/channel/UCE4elIT7DqDv545IA71feHg" target="_blank" rel="noopener noreferrer">
        <FaYoutube size={24} color="#FF0000" />
      </a>
      <a href="https://www.instagram.com/furiagg" target="_blank" rel="noopener noreferrer">
        <FaInstagram size={24} color="#C13584" />
      </a>
      <a href="https://x.com/furia" target="_blank" rel="noopener noreferrer">
        <FaXTwitter size={24} color="#000000" />
      </a>
    </Footer>
    <ChatBot />
   </>
  )
}
