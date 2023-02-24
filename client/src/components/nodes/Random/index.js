import { NodeResizer } from "@reactflow/node-resizer";
import React from "react";
import { Handle, Position } from "reactflow";
import "@reactflow/node-resizer/dist/style.css";
import { BsArrowsAngleExpand } from "../../../styles/Icons";
import {
  Container,
  SquareContent,
  RandomLogo,
  Header,
  Text,
  Sub,
} from "./styles";
import { useDispatch } from "react-redux";
import { changeNode, undoChange } from "../../../redux/nodeSlice";

/*
  Position é um enum, facilita em que ponto do elemento se coloca os handles(As conexões)
*/

const RandomSquare = ({ selected, data, id }) => {
  const dispatch = useDispatch();

  if (selected) {
    dispatch(changeNode({ id, type: "random" }));
  } else {
    dispatch(undoChange());
  }

  return (
    <Container>
      <Header>
        <RandomLogo>
          <BsArrowsAngleExpand size={32} style={{ color: "#fff" }} />
        </RandomLogo>
        <Text>
          <p>Randomizador</p>
          <Sub>Se conecte com outro fluxo</Sub>
        </Text>
      </Header>
      {data ? (
        <>
          {data.randomRange ? (
          <>
            {data.randomRange.map((ran, index) => {
              return (
                <SquareContent>
                  <strong>{index + 1}</strong>
                  <span>{ran.value}%</span>
                </SquareContent>
              );
            })}
          </>
        ) : (
          <></>
      )}
        </>
      ): (<></>)}
      <NodeResizer
        minHeight={200}
        minWidth={200}
        isVisible={selected}
        lineClassName="border-blue-400"
        handleClassName="h-3 w-3 bg-white border-2 rounded border-blue-400"
      />
      <Handle
        id="right"
        type="source"
        position={Position.Right}
        className="-right-5 w-3 h-3 border-2 bg-transparent bg-blue-400/80"
      />

      <Handle
        id="left"
        type="source"
        position={Position.Left}
        className="-left-5 w-3 h-3 border-2 bg-transparent bg-blue-400/80"
      />

      <Handle
        id="top"
        type="source"
        position={Position.Top}
        className="-top-5 w-3 h-3 border-2 bg-transparent bg-blue-400/80"
      />

      <Handle
        id="bootom"
        type="source"
        position={Position.Bottom}
        className="-bottom-5 w-3 h-3 border-2 bg-transparent bg-blue-400/80"
      />
    </Container>
  );
};

export default RandomSquare;
