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
        {
            weekday: 'Montag',
            id: uuidv4(),
            meal: '',
            instructions: '',
            ingredients: '',
            image: '',
        },
        {
            weekday: 'Dienstag',
            id: uuidv4(),
            meal: '',
            instructions: '',
            ingredients: '',
            image: '',
        },
        {
            weekday: 'Mittwoch',
            id: uuidv4(),
            meal: '',
            instructions: '',
            ingredients: '',
            image: '',
        },
        {
            weekday: 'Donnerstag',
            id: uuidv4(),
            meal: '',
            instructions: '',
            ingredients: '',
            image: '',
        },
        {
            weekday: 'Freitag',
            id: uuidv4(),
            meal: '',
            instructions: '',
            ingredients: '',
            image: '',
        },
        {
            weekday: 'Samstag',
            id: uuidv4(),
            meal: '',
            instructions: '',
            ingredients: '',
            image: '',
        },
        {
            weekday: 'Sonntag',
            id: uuidv4(),
            meal: '',
            instructions: '',
            ingredients: '',
            image: '',
        },
    ]

    const [weekdays, setWeekdays] = useState(mealPlan)
    const [selectedWeekday, setSelectedWeekday] = useState('')
    const [showRecipe, setShowRecipe] = useState(false)

    const [selectedMeal, setSelectedMeal] = useState({
        title: '',
        instructions: '',
        ingredients: '',
        image: '',
    })

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
    grid-template-rows: 190px auto 48px;
    font-family: sans-serif;
    text-align: center;
    background: url(${woodBackground});
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
