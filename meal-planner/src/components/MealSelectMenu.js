import styled from 'styled-components'
import { v4 as uuidv4 } from 'uuid'

export default function MealSelect({ weekdayId, handleMealClick }) {
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
        <ListStyled>
            {meals.map(({ meal, id }) => (
                <li key={id} onClick={() => handleMealClick(meal, weekdayId)}>
                    {meal}
                </li>
            ))}
        </ListStyled>
    )
}

const ListStyled = styled.ul`
    display: flex;
    height: 100px;
    list-style: none;
    overflow: auto;

    li {
        display: grid;
        background: maroon;
        margin: 5px;
        color: ivory;
        place-items: center;
        padding: 0 30px;
        font-size: 0.8em;
        border-radius: 5px;
        line-height: 1.4em;
    }
`
