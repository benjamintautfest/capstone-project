import styled from 'styled-components/macro'
import { v4 as uuidv4 } from 'uuid'
import { useState } from 'react'

export default function MealSelectMenu({
    weekdayId,
    handleMealClick,
    handleRecipeClick,
}) {
    const meals = [
        { meal: 'Käsestulle', id: uuidv4() },
        { meal: 'Kartoffelsalat', id: uuidv4() },
        { meal: 'Gemüselasagne', id: uuidv4() },
        { meal: 'Steinpilzrisotto', id: uuidv4() },
        { meal: 'Currywurst', id: uuidv4() },
        { meal: 'Linsensuppe', id: uuidv4() },
        { meal: 'Tofufrikassee', id: uuidv4() },
        { meal: 'Banana Pancakes', id: uuidv4() },
        { meal: 'Thai Gemüsecurry', id: uuidv4() },
    ]

    return (
        <>
            <ListStyled>
                {meals.map(({ meal, id }) => (
                    <li key={id}>
                        {meal}
                        <div>
                            <button
                                onClick={() => handleMealClick(meal, weekdayId)}
                            >
                                ok
                            </button>
                            <button onClick={handleRecipeClick}>Rezept</button>
                        </div>
                    </li>
                ))}
            </ListStyled>
        </>
    )
}

const ListStyled = styled.ul`
    display: flex;
    height: 100px;
    list-style: none;
    overflow: auto;

    div {
        display: flex;
    }

    button {
        border: none;
        margin-right: 5px;
        padding: 2px 15px;
        border-radius: 5px;
    }

    li {
        display: grid;
        place-items: center;
        background: maroon;
        margin: 5px;
        color: ivory;
        padding: 0 30px;
        font-size: 0.8em;
        border-radius: 5px;
    }
`
