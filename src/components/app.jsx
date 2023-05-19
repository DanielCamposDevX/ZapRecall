import logo from "../assets/logo.png"
import styled, { createGlobalStyle } from "styled-components"
import Cards from "./cards.jsx"



export default function App() {
    let concluidos = 0
    return (
        <div>
            <GlobalStyle />
            <Title><Logo src={logo} alt="Logo" /> <h1>ZapRecall</h1> </Title>
            <Cards />
            <Bottom>{concluidos}/4 CONCLUÍDOS</Bottom>
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
    position: fixed;
    bottom: 0px;
    right: 0px;
    background-color: white;
    width: 100%;
    height: 70px;
    box-shadow: 0px -4px 6px rgba(0, 0, 0, 0.05);
    align-items: center;
    justify-content:center;
    font-family: 'Recursive', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: #333333;

`