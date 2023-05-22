import logo from "../assets/logo.png"
import styled from "styled-components"
import React, { useState } from "react";

export default function Home(props) {
    const [aparece, setAparece] = useState(false);

    function handleClick() {
        props.setClick(true);
        setAparece(true);
        console.log(props.click);
    }

    return (
        <Page aparece={aparece}>
            <Logo src={logo} />
            <Title><h1>ZapRecall</h1></Title>
            <Botao onClick={() => handleClick()}>Iniciar Recall!</Botao>
        </Page>
    )
}

const Page = styled.div`
    height: 100vh;
    width: 100vw;
    background-color: #FB6B6B;
    display: ${({ aparece }) => (aparece ? "none" : "flex")};
    flex-direction: column;
    justify-content: start;
    align-items: center;
    z-index: 1;
`

const Logo = styled.img`
    height: 161px;
    width: 136px;
    margin-top: 148px;
`
const Title = styled.div`

        h1{
        font-family: 'Righteous', cursive;
        font-style: normal;
        font-weight: 400;
        font-size: 36px;
        line-height: 45px;
        display: flex;
        align-items: center;
        text-align: center;
        letter-spacing: -0.012em;
        color: #FFFFFF;
        transform: rotate(0.58deg);
        margin-left: 20px;
        margin-top:13px;
        }`

const Botao = styled.button`
    width: 246px;
    height: 54px;
    background-color: #FFFFFF;
    border: 1px solid #D70900;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    margin-top:30px;
    color:#FB6B6B;

    font-family: 'Righteous', cursive;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
`