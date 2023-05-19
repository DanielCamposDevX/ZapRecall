import styled from "styled-components";
import Open from "../assets/Vector.svg"
export default function Cards() {
    return (
        <ContainerCards>
            <Card><h1>Pergunta id</h1> <Abrir><img src={Open} /></Abrir></Card>
        </ContainerCards>
    );
}

const Abrir = styled.button`
    height: 23px;
    width: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    border: none;
    margin-right: 15px;
`
const ContainerCards = styled.div`
    display: flex;
    flex-direction: column;
    align-items:center;
    margin-top: 51px;
`
const Card = styled.div`
    background-color: white;
    width: 90%;
    height: 65px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 25px;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    h1{
        font-family: 'Recursive', sans-serif;
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 19px;
        color: #333333;
        margin-left: 15px;
    }   
    
`