import styled from 'styled-components'
import { Link } from 'react-router-dom'

export default function ShoppingList() {
    return (
        <DivStyled>
            <h1>Einkaufsliste</h1>
            <ul>
                <li>
                    1 Dose Tomaten
                    <input id="1" type="checkbox" />
                    <label for="1"></label>
                </li>
                <li>
                    1 Stange Lauch
                    <input id="2" type="checkbox" />
                    <label for="2"></label>
                </li>
                <li>
                    1 Packung Nudeln
                    <input id="3" type="checkbox" />
                    <label for="3"></label>
                </li>
            </ul>
        </DivStyled>
    )
}

const DivStyled = styled.div`
    ul {
        text-align: left;
        font-family: 'Sansita Swashed', cursive;
        font-size: 1.5em;
        list-style: none;
        line-height: 1.75em;
        width: 90%;
    }

    li {
        display: flex;
        justify-content: space-between;
        border-bottom: 1px dotted black;
    }

    input[type='checkbox'] {
        display: none;
    }

    input[type='checkbox'] + label::before {
        width: 25px;
        height: 25px;
        color: white;
        border: 1px solid white;
        content: '';
        display: grid;
        place-items: center;
        border-radius: 50%;
        position: relative;
        top: 8px;
        line-height: 0;
    }

    input[type='checkbox']:checked + label::before {
        background-color: transparent;
        content: '✔️';
        border: none;
    }
`
