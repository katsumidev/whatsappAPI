import React, { useEffect, useRef, useState } from "react";
import { Container, PlayerBtn, Slider, Play, Pause } from "./styles";
import ReactHowler from "react-howler";

function AudioPlayer({ music }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef()

  console.log(audioRef.current.duration)

  return (
    <Container>
        <ReactHowler playing={isPlaying} src={music} ref={audioRef} />
      <PlayerBtn onClick={() => setIsPlaying(!isPlaying)}>
        {isPlaying ? <Pause size={30} /> : <Play size={30} />}
      </PlayerBtn>
      <Slider />
    </Container>
  );
}

export default AudioPlayer;
