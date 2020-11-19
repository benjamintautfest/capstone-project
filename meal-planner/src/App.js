import { useState } from 'react'
import styled from 'styled-components/macro'
import woodBackground from './assets/wood_background.jpg'
import logo from './assets/logo.svg'
import Button from './components/Button'
import MealSelectMenu from './components/MealSelectMenu'
import { v4 as uuidv4 } from 'uuid'

export default function App() {
    const [weekdays, setWeekdays] = useState([
        { weekday: 'Montag', id: uuidv4(), meal: '' },
        { weekday: 'Dienstag', id: uuidv4(), meal: '' },
        { weekday: 'Mittwoch', id: uuidv4(), meal: '' },
        { weekday: 'Donnerstag', id: uuidv4(), meal: '' },
        { weekday: 'Freitag', id: uuidv4(), meal: '' },
        { weekday: 'Samstag', id: uuidv4(), meal: '' },
        { weekday: 'Sonntag', id: uuidv4(), meal: '' },
    ])

    const [selectedWeekday, setSelectedWeekday] = useState(null)

    function handleClick(event) {
        setSelectedWeekday(event.currentTarget.id)
    }

    function selectMeal(meal, id) {
        setSelectedWeekday(null)
        const updatedWeekdays = weekdays.map((weekday) =>
            weekday.id === id ? { ...weekday, meal } : weekday
        )
        setWeekdays(updatedWeekdays)
    }

    return (
        <AppStyled>
            <header>
                <img src={logo} alt="" />
            </header>
            <section>
                {weekdays.map(({ weekday, id, meal }) => (
                    <div>
                        <Button
                            day={weekday}
                            id={weekday}
                            meal={meal}
                            onClick={handleClick}
                            key={id}
                        />
                        {selectedWeekday === weekday && (
                            <MealSelectMenu
                                handleMealClick={selectMeal}
                                weekdayId={id}
                            />
                        )}
                    </div>
                ))}
            </section>
            <footer></footer>
        </AppStyled>
    )
}

const AppStyled = styled.div`
    display: grid;
    grid-template-rows: 180px auto 60px;
    font-family: sans-serif;
    text-align: center;
    background: url(${woodBackground});
    background-size: cover;
    height: 100vh;
    max-width: 600px;

    header {
        box-shadow: 0 5px 5px #ee000000;
    }

    h1 {
        color: white;
    }

    img {
        width: 45%;
        margin-top: 30px;
        margin-right: 30px;
    }

    section {
        overflow: auto;
    }

    footer {
        background: white;
    }
`
