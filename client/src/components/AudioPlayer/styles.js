import styled from "styled-components";
import { BsFillPlayFill, BsFillPauseFill } from "../../styles/Icons";

export const Container = styled.div``;

export const PlayerBtn = styled.div`
    cursor: pointer;
`;

export const Slider = styled.div``;

export const Play = styled(BsFillPlayFill)`
  color: var(--grey);
`;

export const Pause = styled(BsFillPauseFill)`
  color: var(--grey);
`;
