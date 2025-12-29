import { useState } from "react";
import styled from "styled-components";

// Container for the quote
const Quote = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;  /* fixed typo */
  height: 100vh;
  background-color: maroon; /* fixed typo */
`;

// The main quote text
const QuoteCard = styled.p`
  font-size: 2em;
  color: pink;
  text-align: center;
  margin: 0;
  padding: 20px;
  font-style: italic;
`;

// The author text
const QuotesAuthor = styled.p`
  font-size: 1.5em;
  color: ${(props) => props.color};  // dynamic color from state
  font-weight: bold;  /* fixed CSS property */
  margin-top: 20px;
`;

function App() {
  const [color, setColor] = useState("green");  // state for author color

  return (
    <Quote>
      <QuoteCard>
        Education is the most powerful weapon that you can use to change the world.
      </QuoteCard>
      <QuotesAuthor color={color}>- Nelson Mandela</QuotesAuthor>
    </Quote>
  );
}

export default App;
