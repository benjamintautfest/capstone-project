import { useState } from 'react'
import styled from 'styled-components/macro'
import woodBackground from './assets/wood_background.jpg'
import logo from './assets/logo.png'
import Button from './Button'
import MealSelect from './MealSelect'

import style from './App.css'

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
    const [mealMenu, setMealMenu] = useState(false)

    function handleClick(event) {
        const currentDay = event.currentTarget.id
        console.log(event.currentTarget.id)
        setIsWeekday(event.currentTarget.id)
    }

    return (
        <StyledDiv>
            <header>
                <img src={logo} alt="" />
            </header>
            <section className="content">
                {weekdays.map((weekday) => (
                    <div>
                        <Button
                            day={weekday}
                            id={weekday}
                            meal={'Auswahl'}
                            onClick={handleClick}
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
