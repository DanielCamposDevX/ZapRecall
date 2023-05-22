import styled from "styled-components";
import React from "react";
import data from "./data";
import Open from "../assets/Vector.svg";
import Open2 from "../assets/Vector2.svg";
import Image2 from "../assets/Vectorno.svg"
import Image3 from "../assets/Vectorpartial.svg"
import Image4 from "../assets/Vectoryes.svg"

export default function Cards(props) {

    const [numero, setNumero] = React.useState(Array(data.length).fill(1));
    const [acerto, setAcerto] = React.useState(Array(data.length).fill(1));
    const [clicked, setClicked] = React.useState(Array(data.length).fill(false));


    function handleClick(index) {


        setNumero((prevNumero) => {
            const newNumero = [...prevNumero];
            newNumero[index] = (prevNumero[index] % 4) + 1;
            return newNumero;
        });
        setClicked((prevClicked) => {
            const newClicked = [...prevClicked];
            newClicked[index] = true;
            return newClicked;
        });
    }
    function handleChute(index, chute) {
        setAcerto((prevAcerto) => {
            const newAcerto = [...prevAcerto];
            newAcerto[index] = chute;
            return newAcerto;
        });

        handleClick(index);
        let conc = props.concluidos;
        conc++;
        props.setConcluidos(conc);
    }



    return (
        <ContainerCards>
            {data.map((item, index) => (
                <Card key={index} numero={numero[index]} acerto={acerto[index]} data-test="flashcard">
                    {numero[index] === 1 && (
                        <>
                            <h1 data-test="flashcard-text">Pergunta {index + 1}</h1>
                            <Abrir disabled={clicked[index]} onClick={() => handleClick(index)} data-test="play-btn">
                                <img src={Open} alt="Abrir" />
                            </Abrir>
                        </>
                    )}
                    {numero[index] === 2 && (
                        <>
                            <h1 data-test="flashcard-text">{item.question}</h1>
                            <Abrir onClick={() => handleClick(index)} data-test="turn-btn">
                                <Abrir2 src={Open2} alt="Fechar" />
                            </Abrir>
                        </>
                    )}
                    {numero[index] === 3 && (
                        <>
                            <h1 data-test="flashcard-text">{item.answer}</h1>
                            <Botoes>
                                <Errado onClick={() => handleChute(index, 2)} data-test="no-btn" >Não Lembrei</Errado>
                                <Quase onClick={() => handleChute(index, 3)} data-test="partial-btn">Quase não lembrei</Quase>
                                <Certo onClick={() => handleChute(index, 4)} data-test="zap-btn">Zap!</Certo>
                            </Botoes>
                        </>
                    )}
                    {numero[index] === 4 && (
                        <>
                            <h1 data-test="flashcard-text">Pergunta {index + 1}</h1>
                            <Abrir data-test="play-btn">
                                {acerto[index] === 2 ? (<img src={Image2} alt="Abrir" data-test="no-icon" />)
                                :acerto[index] === 3 ? (<img src={Image3} alt="Abrir" data-test="partial-icon" />) :
                                (<img src={Image4} alt="Abrir" data-test="zap-icon"/>)
                                }
                            </Abrir>
                        </>
                    )}
                </Card>
            ))
            }
        </ContainerCards >
    );
}

const Certo = styled.button`
        background-color: #2FBE34;
        width: 90px;
        height: 37.17px;
        margin-right:10px;
        border-radius: 5px;
        border:none;
        color:white;
        font-family: 'Recursive', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 14px;`

const Quase = styled.button`
        background-color: #FF922E;
        width: 90px;
        height: 37.17px;
        margin-right:10px;
        border-radius: 5px;
        border:none;
        color:white;
        font-family: 'Recursive', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 14px;`

const Errado = styled.button`
        background-color: #FF3030;
        width: 90px;
        height: 37.17px;
        margin-right:10px;
        border-radius: 5px;
        border:none;
        color:white;
        font-family: 'Recursive', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 14px;`

const Botoes = styled.div`
        position: absolute;    
        display: flex;
        bottom: 10px;
        left: 17px;
`
const Abrir2 = styled.img`
      background-color: #ffffd4;
    `;

const Abrir = styled.button`
      height: 23px;
      width: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: white;
      border: none;
      margin-right: 15px;
      position: ${({ numero }) => (numero === 2 || numero === 3 ? "absolute" : "static")};
      bottom: ${({ numero }) => (numero === 2 || numero === 3 ? "1px" : "initial")};
      right: ${({ numero }) => (numero === 2 || numero === 3 ? "1px" : "initial")};
    `;

const ContainerCards = styled.div`
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 51px;
      margin-bottom: 60px;
    `;

const Card = styled.div`
      background-color: ${({ numero }) => (numero === 1 ? "white" : numero === 2 ? "#ffffd4" : "#ffffd4")};
      width: 90%;
      position: relative;
      height: ${({ numero }) => (numero === 2 || numero === 3 ? "131px" : "65px")};
      display: flex;
      align-items: ${({ numero }) => (numero === 3 ? "start" : "center")};
      justify-content: space-between;
      margin-bottom: 25px;
      box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
      border-radius: 5px;
    
      h1 {
        font-family: 'Recursive', sans-serif;
        font-style: normal;
        font-weight: ${({ numero }) => (numero === 1 ? "700" : numero === 2 ? "400" : "400")};
        font-size:  ${({ numero }) => (numero === 1 ? "16px" : numero === 2 ? "18px" : "18px")};
        line-height:${({ numero }) => (numero === 1 ? "19px" : numero === 2 ? "22px" : "22px")};
        color: ${({ acerto }) => (acerto === 4 ? "#2FBE34" : acerto === 2 ? "#FF3030" : acerto === 3 ? "#FF922E" : "#333333")};
        margin-left: 15px;
        margin-top: ${({ numero }) => (numero === 1 ? "10px" : numero === 2 ? "18px" : "18px")};
        text-decoration: ${({ acerto }) => (acerto === 2 ? "line-through" : acerto === 3 ? "line-through" : acerto === 4 ? "line-through" : "none")};
      }
    `;