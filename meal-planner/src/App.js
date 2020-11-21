import { useState } from 'react'
import styled from 'styled-components/macro'
import woodBackground from './assets/wood_background.jpg'
import logo from './assets/logo.svg'
import Button from './components/Button'
import MealSelectMenu from './components/MealSelectMenu'
import RecipePage from './components/RecipePage'
import { v4 as uuidv4 } from 'uuid'

export default function App() {
    const mealPlan = [
        { weekday: 'Montag', id: uuidv4(), meal: '' },
        { weekday: 'Dienstag', id: uuidv4(), meal: '' },
        { weekday: 'Mittwoch', id: uuidv4(), meal: '' },
        { weekday: 'Donnerstag', id: uuidv4(), meal: '' },
        { weekday: 'Freitag', id: uuidv4(), meal: '' },
        { weekday: 'Samstag', id: uuidv4(), meal: '' },
        { weekday: 'Sonntag', id: uuidv4(), meal: '' },
    ]

    const [weekdays, setWeekdays] = useState(mealPlan)

    const [selectedWeekday, setSelectedWeekday] = useState('')

    const [showRecipe, setShowRecipe] = useState(false)

    const [selectedMeal, setSelectdedMeal] = useState('')

    function handleClick(event) {
        setSelectedWeekday(event.currentTarget.id)
    }

    function selectMeal(meal, id) {
        setSelectedWeekday('')
        const updatedWeekdays = weekdays.map((weekday) =>
            weekday.id === id ? { ...weekday, meal } : weekday
        )
        setWeekdays(updatedWeekdays)
    }

    function handleShowRecipe(meal) {
        setShowRecipe(true)
        setSelectdedMeal(meal)
    }

    function handleCloseRecipe() {
        setShowRecipe(false)
    }

    return (
        <AppStyled>
            <header>
                <img src={logo} alt="" />
            </header>
            <section>
                {showRecipe ? (
                    <RecipePage
                        recipeTitle={selectedMeal}
                        closeRecipe={handleCloseRecipe}
                    />
                ) : (
                    ''
                )}
                {weekdays.map(({ weekday, id, meal }) => (
                    <div key={id}>
                        <Button
                            day={weekday}
                            id={weekday}
                            meal={meal}
                            onClick={handleClick}
                        />
                        {selectedWeekday === weekday && (
                            <MealSelectMenu
                                handleMealClick={selectMeal}
                                weekdayId={id}
                                handleRecipeClick={handleShowRecipe}
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
    grid-template-rows: 180px auto 48px;
    font-family: sans-serif;
    text-align: center;
    background: url(${woodBackground});
    background-size: cover;
    height: 100vh;
    max-width: 600px;

    header {
        //   box-shadow: 30px 0 30px #b16c16;
    }

    h1 {
        color: white;
    }

    img {
        width: 170px;
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
