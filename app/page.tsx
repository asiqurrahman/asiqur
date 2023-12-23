"use client";

import styled, { keyframes } from "styled-components";
import { useState, useEffect } from "react";
import { Button } from "@chakra-ui/react";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

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

  .rick-roll {
    opacity: 0;
    animation: ${fadeIn} 5s forwards;
    color: whitesmoke;
    width: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    h2 {
      text-align: center;
      font-weight: 500;
      line-height: 2;
      font-size: 20px;
      color: #b2becd;
    }
  }
`;

export default function Home() {
  const [didClick, setDidClick] = useState(false);
  const [audioVolume, setAudioVolume] = useState(0.03); // Adjust the volume as needed

  useEffect(() => {
    const audioElement = document.getElementById("audio"); // Set the actual ID of your audio element

    if (audioElement) {
      //@ts-ignore
      audioElement.volume = audioVolume;
    }
  }, [audioVolume, didClick]);

  return (
    <MainContainer>
      <main>
        {!didClick ? (
          <Button size="lg" onClick={() => setDidClick(true)}>
            Enter site
          </Button>
        ) : (
          <div className="rick-roll">
            <h2>
              Still coming up with ideas for this domain
              <br />
              In the meantime, enjoy the bait
            </h2>
            <img src="https://i.pinimg.com/originals/75/98/d1/7598d103a735d5568964e4967e42823d.gif" />
            <audio src="/rick.MP3" autoPlay id="audio" />
          </div>
        )}
      </main>
    </MainContainer>
  );
}
