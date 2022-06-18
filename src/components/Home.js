import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Robot from "../components/img/welcome_img.png";


export default function Home() {
  const [userName, setUserName] = useState("");
  useEffect(async () => {
    setUserName(
      await JSON.parse(
        localStorage.getItem("chat-app-current-user")
      ).username
    );
  }, []);
  return (
   
    <Container>
       <span>Hello👋, {userName}!</span>
      <img src={Robot} alt="" />
      <h1>
        Let's Chat ! ! !
      </h1>
      <h3>Now send and receive messages without keeping your phone online.
        <br/>
        Use Message on up to All devices at the same time.
      </h3>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  flex-direction: column;
  img {
    height: 20rem;
  }
  span {
    color: #de0c0c;
    position: absolute;
    top: 90px;
    font-size: 32px;
    font-family: system-ui;
  }
  h1{
    font-family: "Segoe UI", "Helvetica Neue", Helvetica, "Lucida Grande", Arial, Ubuntu, Cantarell, "Fira Sans", sans-serif;
    color: #41525d;
    font-size: 32px;
    font-weight: 300;
  }
  h3{
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    color: #667781;
  }
  
`;
