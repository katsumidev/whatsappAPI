import React, {useEffect, useState} from "react";
import { convertToPhone } from "../../../utils/conversions";
import {
  Container,
  HeaderContainer,
  ContactName,
  ContactInfo,
  ContactPfp,
  ContactNumber,
  Time,
  Description,
  Options,
  CloseHeader
} from "./styles";
import defaultPic from "../../../assets/defaultPic.jpg";
import { getUserStatus } from "../../../services/api";
import { useParams } from "react-router";
import {IoClose} from "../../../styles/Icons"

function ContactInfoPage(props) {
  const [status, setStatus] = useState("");
  const { userIns } = useParams();

  useEffect(() => {
    const getStatus = async () => {
      let data = await getUserStatus({ user_id: userIns, contact_number: props.number });
      console.log(data)
      setStatus(data.data.status)
    }
    getStatus()
  }, [props.number]);

  return (
    <Container>
      <CloseHeader>
        <IoClose size={25} onClick={props.closeView} />
      </CloseHeader>
      <HeaderContainer>
        <ContactPfp src={props.picture ? props.picture : defaultPic} />
        <ContactName>{props.name}</ContactName>
        <ContactNumber>{convertToPhone(props.number)}</ContactNumber>
      </HeaderContainer>
      <ContactInfo>
        <Time></Time>
        <small>Recado</small>
        <Description>{status}</Description>
      </ContactInfo>
      <Options>

      </Options>
    </Container>
  );
}

export default ContactInfoPage;
