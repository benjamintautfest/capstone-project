import { useState } from 'react'
import styled from 'styled-components/macro'
import woodBackground from './assets/wood_background.jpg'
import logo from './assets/logo.png'
import Button from './components/Button'
import MealSelect from './components/MealSelect'

export default function App() {
    const weekdays = [
        'Montag',
        'Dienstag',
        'Mittwoch',
        'Donnerstag',
        'Freitag',
        'Samstag',
        'Sonntag',
    ]

    const [isWeekday, setIsWeekday] = useState()

    function handleClick(event) {
        setIsWeekday(event.currentTarget.id)
    }

    return (
        <StyledDiv>
            <header>
                <img src={logo} alt="" />
            </header>
            <section>
                {weekdays.map((weekday, index) => (
                    <div>
                        <Button
                            day={weekday}
                            id={weekday}
                            meal={'Auswahl'}
                            onClick={handleClick}
                            key={index}
                        />
                        {isWeekday === weekday && <MealSelect />}
                    </div>
                ))}
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

    header {
        box-shadow: 0 5px 5px #ee000000;
    }

    h1 {
        color: white;
    }

    img {
        width: 60%;
        margin-top: 40px;
    }

    section {
        overflow: auto;
    }

    footer {
        background: white;
    }
`
