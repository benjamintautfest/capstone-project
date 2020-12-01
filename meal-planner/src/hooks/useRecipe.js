import { useState } from 'react'
import mealPlan from '../data/MealPlan'
import loadLocally from '../lib/loadLocally'
import saveLocally from '../lib/saveLocally'

export default function useRecipe() {
    const [weekdays, setWeekdays] = useState(
        loadLocally('weekdays') ?? mealPlan
    )

    const [selectedWeekday, setSelectedWeekday] = useState('')
    const [showRecipe, setShowRecipe] = useState(false)

    const [selectedMeal, setSelectedMeal] = useState({
        title: '',
        ingredients: '',
        instructions: '',
        image: '',
    })

    function handleClick(event) {
        setSelectedWeekday(event.currentTarget.id)
    }

    function selectMeal(meal, id, ingredients, instructions, image) {
        setSelectedWeekday('')
        const updatedWeekdays = weekdays.map((weekday) =>
            weekday.id === id
                ? { ...weekday, meal, ingredients, instructions, image }
                : weekday
        )
        setWeekdays(updatedWeekdays)
        saveLocally('weekdays', updatedWeekdays)
    }

    function handleShowRecipe(title, ingredients, instructions, image) {
        setShowRecipe(true)
        setSelectedMeal({
            title,
            ingredients,
            instructions,
            image,
        })
    }

    function handleCloseRecipe() {
        setShowRecipe(false)
    }

    return {
        weekdays,
        selectedWeekday,
        showRecipe,
        selectedMeal,
        handleClick,
        handleCloseRecipe,
        handleShowRecipe,
        selectMeal,
        setWeekdays,
        shoppingListItems,
    }
}
