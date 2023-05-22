import logo from "../assets/logo.png"
import styled, { createGlobalStyle } from "styled-components"
import Cards from "./cards.jsx"
import React from "react"
import data from "./data"
import Reset from "./reset"
import sad from "../assets/sad.png"
import party from "../assets/party.png"
import Home from "./home"




export default function App() {
    const [concluidos, setConcluidos] = React.useState(0);
    const [respostas, setRespostas] = React.useState([]);
    const [mensagem, setMensagem] = React.useState([]);
    const [click,setClick] = React.useState(false);

    return (
        <div>
            <GlobalStyle />
            <Home click={click} setClick={setClick}/>
            <Title click={click}><Logo src={logo} alt="Logo" /> <h1>ZapRecall</h1> </Title>
            <Cards click={click} setConcluidos={setConcluidos} concluidos={concluidos} respostas={respostas} setRespostas={setRespostas} setMensagem={setMensagem} />
            <Bottom click={click}>
                {mensagem.map((mensagem, index) => {
                    if (mensagem.includes('Parábens!')) {
                        return (
                            <Display key={index}>
                                <img src={party} />
                                <h1>{mensagem}</h1>
                            </Display>)
                    }
                    if (mensagem.includes('Putz!')){
                        return (
                            <Display key={index}>
                                <img src={sad} />
                                <h1>{mensagem}</h1>
                            </Display>)
                    }
                }
                )}
                <h1>{concluidos}/{data.length} CONCLUÍDOS</h1>
                <Respostas>{respostas.map((respostas, index) => 
                    (
                        <img key={index} src={respostas} />
                    )
                )} </Respostas>

            </Bottom>
        </div>
    )
}
const GlobalStyle = createGlobalStyle`
        ${Reset}
        body{
            background-color: #FB6B6B;
            }
        
`

const Display = styled.div`
    display: flex;
    img{
        margin-right: 10px;
    }
    h1{
        font-family: 'Righteous', cursive;
        font-weight: 700;
        font-size: 20px;
        line-height: 22px;

    }
`
const Logo = styled.img`
    width: 52px;
    height: 60px;
`

const Title = styled.div`
    margin-top: 35px;
    display: ${({ click }) => (!click ? "none" : "flex")};
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
    display: ${({ click }) => (!click ? "none" : "flex")};
    flex-direction: column;
    position: fixed;
    bottom: 0px;
    right: 0px;
    background-color: white;
    width: 100%;
    min-height: 80px;
    box-shadow: 0px -4px 6px rgba(0, 0, 0, 0.05);
    align-items: center;
    justify-content: space-evenly;
    h1{
    font-family: 'Recursive', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: #333333;
    margin-top: 10px;
    }
    img{
        margin-bottom:10px;
        margin-top:10px;
    }

`
const Respostas = styled.div`
    display: flex;
`