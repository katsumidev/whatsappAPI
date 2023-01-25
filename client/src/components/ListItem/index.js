import React, { useState, useEffect } from "react";
import {
  Container,
  Username,
  Numbername,
  Number,
  DeleteButton,
  ViewButton,
  Options
} from "./styles";

function ListItem(props) {
  const [insInfo, setInsInfo] = useState({ username: "", userId: "" });
  const [valid, setValid] = useState(true);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_URL}/instance/info?key=${props.name}`, {
      method: "get",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    }).then(async (res) => {
      let data = await res.json();

      switch (res.status) {
        case 200:
          setInsInfo({
            username: data.instance_data.user.name,
            userId: data.instance_data.user.id.split(":")[0],
          });
          break;
      }
    });
  }, []);

  const DeleteNumber = () => {
    fetch(`${process.env.REACT_APP_URL}/instance/delete?key=${props.name}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Methods": "*",
        "Access-Control-Allow-Methods": "GET, POST, OPTIONS, PUT, DELETE",
      },
    }).then(async (res) => {
      let data = await res.json();

      fetch(`${process.env.REACT_APP_URL}/instance/logout?key=${props.name}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Methods": "*",
          "Access-Control-Allow-Methods": "GET, POST, OPTIONS, PUT, DELETE",
        },
      });

      setValid(false);
    });
  };

  function phoneMask(phone) {
    return `+${phone[1], phone[2]}`
  }

  return (
    <>
      {valid && (
        <Container>
          <Username>{insInfo.username}</Username>
          <Number>{`+${insInfo.userId}`}</Number>
          <Options>
            <ViewButton size={20} onClick={props.redirect} />
            <DeleteButton size={20} onClick={DeleteNumber} />
          </Options>
        </Container>
      )}
    </>
  );
}

export default ListItem;
