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
        },
        {
            weekday: 'Dienstag',
            id: uuidv4(),
            meal: '',
            instructions: '',
            ingredients: '',
        },
        {
            weekday: 'Mittwoch',
            id: uuidv4(),
            meal: '',
            instructions: '',
            ingredients: '',
        },
        {
            weekday: 'Donnerstag',
            id: uuidv4(),
            meal: '',
            instructions: '',
            ingredients: '',
        },
        {
            weekday: 'Freitag',
            id: uuidv4(),
            meal: '',
            instructions: '',
            ingredients: '',
        },
        {
            weekday: 'Samstag',
            id: uuidv4(),
            meal: '',
            instructions: '',
            ingredients: '',
        },
        {
            weekday: 'Sonntag',
            id: uuidv4(),
            meal: '',
            instructions: '',
            ingredients: '',
        },
    ]

    const [weekdays, setWeekdays] = useState(mealPlan)

    const [selectedWeekday, setSelectedWeekday] = useState('')

    const [showRecipe, setShowRecipe] = useState(false)

    const [selectedMealTitle, setSelectdedMealTitle] = useState('')
    const [selectedMealInstructions, setSelectedMealInstructions] = useState('')
    const [selectedMealIngredients, setSelectedMealingredients] = useState('')

    function handleClick(event) {
        setSelectedWeekday(event.currentTarget.id)
    }

    function selectMeal(meal, id, instructions, ingredients) {
        setSelectedWeekday('')
        const updatedWeekdays = weekdays.map((weekday) =>
            weekday.id === id
                ? { ...weekday, meal, ingredients, instructions }
                : weekday
        )
        setWeekdays(updatedWeekdays)
    }

    //button to show recipe
    function handleShowRecipe(meal, ingredients, instructions) {
        setShowRecipe(true)
        setSelectdedMealTitle(meal)
        setSelectedMealingredients(ingredients)

        setSelectedMealInstructions(instructions)
    }

    //closing box on recipe page
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
                        title={selectedMealTitle}
                        ingredients={selectedMealIngredients}
                        instructions={selectedMealInstructions}
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
