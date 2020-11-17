import { useState } from 'react'
import styled from 'styled-components'
import woodBackground from './assets/wood_background.jpg'
import logo from './assets/logo.png'
import Button from './Button'
import MealSelect from './MealSelect'

import style from './App.css'

export default function App() {
    const [mealMenu, setMealmenu] = useState(false)

    function handleClick(event) {
        mealMenu ? setMealmenu(false) : setMealmenu(true)
    }

    return (
        <StyledDiv>
            <header>
                <img src={logo} alt="" />
            </header>
            <section className="content">
                <Button
                    onClick={handleClick}
                    day={'Montag'}
                    meal={'Spargel-Pasta'}
                    id="mo"
                />
                {mealMenu ? <MealSelect></MealSelect> : ''}
                <Button id="di" day={'Dienstag'} meal={'Gemüselasagne'} />
                <Button day={'Mittwoch'} meal={'Avocado-Risotto'} />
                <Button day={'Donnerstag'} meal={'Ofengemüse mit Pesto'} />
                <Button day={'Freitag'} meal={'Spargel-Pasta'} />
                <Button day={'Samstag'} meal={'Spargel-Pasta'} />
                <Button day={'Montag'} meal={'Spargel-Pasta'} />
            </section>
            <footer></footer>
        </StyledDiv>
    )
}

const StyledDiv = styled.div`
    display: grid;
    grid-template-rows: 180px auto 48px;
    font-family: sans-serif;
    text-align: center;
    background: url(${woodBackground});
    background-size: cover;
    height: 100vh;

    h1 {
        color: white;
    }

    img {
        width: 50%;
        margin: 0 auto;
        margin-top: 30px;
    }

    .content {
        overflow: auto;
    }

    footer {
        background: white;
    }
`
