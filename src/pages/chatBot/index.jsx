import { useState } from "react";
import { Button, ChatWrapper, Input, Message, MessagesContainer } from "./styles";

export function ChatBot() {
    const [input, setInput] = useState("");
    const [messages, setMessages] = useState([
      { role: "bot", text: "Como posso te ajudar?" },
    ]);
  
    const respostas = {
      elenco:
        "O elenco atual da FURIA conta com KSCERATO, yuurih, arT, chelo e FalleN. Um time de respeito! 🦁🔥",
      historia:
        "A FURIA foi fundada em 2017 e virou referência mundial no CS:GO. Agora dominando também o CS2!",
      titulos:
        "A FURIA já venceu campeonatos como ESL Pro League, DreamHack e muito mais. É braba demais! 🏆",
      proximoJogo:
        "O próximo confronto da FURIA será anunciado nas redes oficiais. Fica de olho! 👀",
      ranking:
        "A FURIA sempre tá entre os melhores times do mundo. Orgulho do Brasil! 🇧🇷💪",
      coach:
        "O coach da FURIA é o guerrilheiro Guerri. Um verdadeiro estrategista! 🧠🎯",
      torcida:
        "A torcida da FURIA é insana! Sempre apoiando com garra. Vai FURIA! 🦁🖤",
      default:
        "Não entendi 😅 Tente perguntar sobre elenco, história, títulos, próximo jogo, ranking ou torcida!",
    };
  
    function sendMessage() {
      if (input === "") return;
      const pergunta = input.toLowerCase();
      const novaMesg = { role: "user", text: input };
      let resposta = respostas.default;
  
      if (pergunta.includes("elenco")) resposta = respostas.elenco;
      else if (pergunta.includes("hist")) resposta = respostas.historia;
      else if (pergunta.includes("titulos")) resposta = respostas.titulos;
      else if (pergunta.includes("proximo")) resposta = respostas.proximoJogo;
      else if (pergunta.includes("ranking")) resposta = respostas.ranking;
      else if (pergunta.includes("coach")) resposta = respostas.coach;
      else if (pergunta.includes("torcida")) resposta = respostas.torcida;
  
      setMessages([...messages, novaMesg]);
      setInput("");
      setTimeout(() => {
        setMessages((messages) => [...messages, { role: "bot", text: resposta }]);
      }, 300);
    }
  
    return (
      <ChatWrapper>
        <MessagesContainer>
          {messages.map((message, index) => (
            <Message key={index} role={message.role}>
              {message.text}
            </Message>
          ))}
        </MessagesContainer>
        <Input
          type="text"
          placeholder="Digite sua mensagem"
          onChange={(e) => setInput(e.target.value)}
          value={input}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        />
        <Button onClick={sendMessage}>Enviar</Button>
      </ChatWrapper>
    );
  }