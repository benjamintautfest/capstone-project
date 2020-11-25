import { useState, useEffect } from 'react'
import styled from 'styled-components/macro'
import woodBackground from './assets/wood_background.jpg'
import logo from './assets/logo.svg'
import Button from './components/Button'
import MealSelectMenu from './components/MealSelectMenu'
import RecipePage from './components/RecipePage'
import mealPlan from './data/MealPlan'
import saveLocally from './lib/saveLocally'
import loadlocally from './lib/loadLocally'

export default function App() {
    const [weekdays, setWeekdays] = useState([])
    const [selectedWeekday, setSelectedWeekday] = useState('')
    const [showRecipe, setShowRecipe] = useState(false)

    const [selectedMeal, setSelectedMeal] = useState({
        title: '',
        instructions: '',
        ingredients: '',
        image: '',
    })

    useEffect(() => {
        setWeekdays(loadlocally('weekdays') ?? mealPlan)
    }, [])

    function handleClick(event) {
        setSelectedWeekday(event.currentTarget.id)
    }

    function selectMeal(meal, id, instructions, ingredients, image) {
        setSelectedWeekday('')
        const updatedWeekdays = weekdays.map((weekday) =>
            weekday.id === id
                ? { ...weekday, meal, ingredients, instructions, image }
                : weekday
        )
        setWeekdays(updatedWeekdays)
        console.log(updatedWeekdays)
        console.log(meal)
        saveLocally('weekdays', updatedWeekdays)
    }

    function handleShowRecipe(meal, ingredients, instructions, image) {
        setShowRecipe(true)
        setSelectedMeal({
            title: meal,
            ingredients,
            instructions,
            image,
        })
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
                        closeRecipe={handleCloseRecipe}
                        title={selectedMeal.title}
                        image={selectedMeal.image}
                        ingredients={selectedMeal.ingredients}
                        instructions={selectedMeal.instructions}
                    />
                ) : (
                    ''
                )}
                {weekdays.length > 0 &&
                    weekdays.map(({ weekday, id, meal }) => (
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
    grid-template-rows: 190px auto 48px;
    font-family: sans-serif;
    text-align: center;
    background: url(${woodBackground});
    background-color: #2e2d2d;
    background-size: cover;
    height: 100vh;
    max-width: 600px;

    header {
        box-shadow: 10px 0 30px #b16c16;
        padding-bottom: 30px;
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
        padding-top: 10px;
        scrollbar-width: none;
        z-index: 9999;
    }

    footer {
        background: transparent;
        box-shadow: -10px 0 30px #b16c16;
        z-index: 0;
    }
`
