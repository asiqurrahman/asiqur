"use client";

import styled from "styled-components";
import { Button } from "@chakra-ui/react";

const MainContainer = styled.div`
  height: 100vh;
  width: 100vw;

  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #12181b;
  background-image: url("/images/Sprinkle.svg");


  button {
    background-color: #6675ff;

    color: whitesmoke;
  }

  button:hover {
    background-color: #6675ff;
    opacity: 0.9;
  }
`;

export default function Home() {
  return (
    <MainContainer>
      <main>
        <Button size="lg">Enter site</Button>
      </main>
    </MainContainer>
  );
}
