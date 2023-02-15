import { NodeResizer } from "@reactflow/node-resizer";
import React, {useState} from "react";
import { Handle, Position } from "reactflow";
import "@reactflow/node-resizer/dist/style.css";
import { BsArrowLeftRight } from "react-icons/bs";
import { TbArrowFork } from "../../../styles/Icons";
import { Container, H1, Header, ConditionLogo, Text, Conditions, True, False } from "./styles";
import { useDispatch } from "react-redux";
import { changeNode, undoChange } from "../../../redux/nodeSlice";

/*
  Position é um enum, facilita em que ponto do elemento se coloca os handles(As conexões)
*/

const ConditionSquare = ({ selected, data }) => {
  const [condition, setCondition] = useState(data.condition);
  const [isOpen, setIsOpen] = useState(data.isOpen);
  const dispatch = useDispatch();

  if (selected) {
    dispatch(changeNode({ data, type: "condition" }));
  } else {
    dispatch(undoChange());
  }

  console.log(`Condição: ${data.condition}, isOpen: ${data.isOpen}`);

  return (
    <Container>
      <Header>
        <ConditionLogo>
          <TbArrowFork size={32} style={{ color: "#fff" }} />
        </ConditionLogo>
        <Text>
          <p>Condições</p>
        </Text>
      </Header>
      <Conditions>
        <True>
          <p>Alguma condição abaixo é verdadeira</p>
        </True>
          {data.condition ? (
          <>
            <p><strong>Horário de Atendimento</strong> é <b>{isOpen}</b></p>
            <hr />
          </>
        ): (
          <></>
        )}
        <False>
          <p>Todas as condições acima são falsas</p>
        </False>
      </Conditions>
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

export default ConditionSquare;
