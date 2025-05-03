import styled from "styled-components";

export const ChatWrapper = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 300px;
  max-height: 400px;
  background-color: #111111;
  border: 1px solid #ff4c00;
  border-radius: 10px;
  padding: 1rem;
  color: white;
  font-family: sans-serif;
  box-shadow: 0 0 10px rgba(255, 76, 0, 0.3);
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media(max-width: 827px ) {
    bottom: 170px;
  }
`;

export const MessagesContainer = styled.div`
  overflow-y: auto;
  max-height: 250px;
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const Message = styled.p`
  align-self: ${({ role }) => (role === "user" ? "flex-end" : "flex-start")};
  background-color: ${({ role }) => (role === "user" ? "#ff4c00" : "#222")};
  color: ${({ role }) => (role === "user" ? "#000" : "#fff")};
  padding: 0.5rem 0.75rem;
  border-radius: 12px;
  max-width: 80%;
  font-size: 14px;
  line-height: 1.3;
`;
export const Input = styled.input`
  padding: 0.5rem;
  border: none;
  border-radius: 5px;
  outline: none;
  background-color: #222;
  color: white;
  margin-bottom: 0.5rem;
`;

export const Button = styled.button`
  padding: 0.5rem;
  background-color: #ff4c00;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.2s ease;

  &:hover {
    background-color: #e24300;
  }
`;