import styled from 'styled-components/macro'
import meals from '../data/recipeData.json'

export default function MealSelectMenu({
    weekdayId,
    handleMealClick,
    handleRecipeClick,
}) {
    return (
        <ListStyled>
            {meals.map(({ meal, id, ingredients, instructions }) => (
                <li key={id}>
                    {meal}
                    <div>
                        <button
                            onClick={() =>
                                handleMealClick(
                                    meal,
                                    weekdayId,
                                    ingredients.map((ingredient) => (
                                        <li>ingredient</li>
                                    )),
                                    instructions
                                )
                            }
                        >
                            ok
                        </button>
                        <button
                            onClick={() =>
                                handleRecipeClick(
                                    meal,
                                    ingredients,
                                    instructions
                                )
                            }
                        >
                            Rezept
                        </button>
                    </div>
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

    div {
        display: flex;
        justify-content: space-space-around;
    }

    button {
        border: none;
        padding: 5px 10px;
        border-radius: 5px;
        margin: 0 4px;
        background: ivory;
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
        line-height: 1.3em;
    }
`
