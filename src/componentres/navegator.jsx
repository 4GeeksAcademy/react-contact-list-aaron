import React from "react";
import styled from "styled-components";
import '/workspaces/react-contact-list-aaron/src/index.css'
import { FaRegPlusSquare } from 'react-icons/fa';

export default function Navegacion() {
    return (
        <ContainerNavegacion>
            <div className="logo">
                <span className="icono">📞Lista de Contacto</span>
            </div>
            <div className="boton">
                <button >
                    <FaRegPlusSquare className='icon' />
                    
                </button>
            </div>
        </ContainerNavegacion>
    );
}

const ContainerNavegacion = styled.div`
    background-color: #1e2c2bff;
    width: 100vw;
    height: 3rem;
    display: flex;
    justify-content: space-between;
    padding: 0.5rem;
    align-items: center;

    .logo {
        span{
        color: #2ed65eff;
        }
    }
    
    .boton{
    
        button {
            border: none;
            padding: 0.5rem 2rem;
            background-color: #2edf7dff;
            border-radius: 5px;
            color: #000;
            display: flex;
            justify-content: center;
            cursor: pointer;
            transition: all 0.3s ease-in-out;
            :hover {
                background-color: #5cdb80ff;
            }
            .icon {
                font-size: 17px;
            }  
        }
    }
`;
// ...aquí va el contenido