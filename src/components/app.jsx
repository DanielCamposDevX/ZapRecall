import logo from "../assets/logo.png"
import styled, { createGlobalStyle } from "styled-components"
import Cards from "./cards.jsx"
import React from "react"
import data from "./data"




export default function App() {
    const [concluidos, setConcluidos] = React.useState(0);
    const [respostas, setRespostas] = React.useState([]);
    const [mensagem,setMensagem] = React.useState([])

    return (
        <div>
            <GlobalStyle />
            <Title><Logo src={logo} alt="Logo" /> <h1>ZapRecall</h1> </Title>
            <Cards setConcluidos={setConcluidos} concluidos={concluidos} respostas={respostas} setRespostas={setRespostas} setMensagem={setMensagem}/>
            <Bottom>
                {mensagem.map((mensagem,index)=> (<h1 key={index}>{mensagem}</h1>))}
                <h1>{concluidos}/{data.length} CONCLUÍDOS</h1>
                <Respostas>{respostas.map((respostas, index) => (
                    <img key={index} src={respostas} />
                ))} </Respostas>

            </Bottom>
        </div>
    )
}
const GlobalStyle = createGlobalStyle`
        body{
            background-color: #FB6B6B;
            }
`

const Logo = styled.img`
    width: 52px;
    height: 60px;
`

const Title = styled.div`
    margin-top: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
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
    };
`
const Bottom = styled.div`
    display: flex;
    flex-direction: column;
    position: fixed;
    bottom: 0px;
    right: 0px;
    background-color: white;
    width: 100%;
    
    box-shadow: 0px -4px 6px rgba(0, 0, 0, 0.05);
    align-items: center;
    justify-content: space-evenly;
    h1{
    font-family: 'Recursive', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: #333333;}

`
const Respostas = styled.div`
    display: flex;
`