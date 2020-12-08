import { useEffect, useState } from 'react'
import mealPlan from '../data/MealPlan'
import loadLocally from '../lib/loadLocally'
import saveLocally from '../lib/saveLocally'

export default function useRecipe() {
    const [weekdays, setWeekdays] = useState(
        loadLocally('weekdays') ?? mealPlan
    )

    const [selectedWeekday, setSelectedWeekday] = useState('')

    const [selectedMeal, setSelectedMeal] = useState(null)
    const showRecipe = !!selectedMeal

    const [isBookmarked, setIsBookmarked] = useState([])

    console.log(isBookmarked)

    function bookmarkRecipe(id) {
        setIsBookmarked(!isBookmarked)
        const upDateBookmarked = isBookmarked.includes(id)
            ? isBookmarked.filter((bookmarkId) => bookmarkId !== id)
            : [...isBookmarked, id]
        setIsBookmarked(upDateBookmarked)
    }

    useEffect(() => {
        saveLocally('weekdays', weekdays)
    }, [weekdays])

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
    }

    function handleShowRecipe(title, ingredients, instructions, image, id) {
        setSelectedMeal({
            title,
            ingredients,
            instructions,
            image,
            id,
        })
    }

    function handleCloseRecipe() {
        setSelectedMeal(null)
    }

    return {
        weekdays,
        selectedWeekday,
        showRecipe,
        selectedMeal,
        isBookmarked,
        handleClick,
        handleCloseRecipe,
        handleShowRecipe,
        selectMeal,
        setWeekdays,
        setSelectedWeekday,
        bookmarkRecipe,
        setIsBookmarked,
    }
}
