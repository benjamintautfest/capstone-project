import styled from 'styled-components/macro'
import meals from '../data/recipeData.json'
import PropTypes from 'prop-types'

MealSelectMenu.propTypes = {
    weekdayId: PropTypes.string.isRequired,
    handleMealClick: PropTypes.func.isRequired,
    handleRecipeClick: PropTypes.func.isRequired,
}

export default function MealSelectMenu({
    weekdayId,
    handleMealClick,
    handleRecipeClick,
}) {
    return (
        <ListStyled>
            {meals.map(({ meal, id, ingredients, instructions, image }) => (
                <li key={id}>
                    {meal}
                    <div>
                        <button
                            onClick={() =>
                                handleMealClick(
                                    meal,
                                    weekdayId,
                                    ingredients,
                                    instructions,
                                    image,
                                    id
                                )
                            }
                        >
                            Übernehmen
                        </button>
                        <button
                            onClick={() =>
                                handleRecipeClick(
                                    meal,
                                    ingredients,
                                    instructions,
                                    image,
                                    id
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
    scrollbar-width: none;
    &::-webkit-scrollbar {
        display: none;
    }

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
        cursor: pointer;
    }

    li {
        display: grid;
        place-items: center;
        background: var(--red);
        margin: 5px;
        color: ivory;
        padding: 0 30px;
        font-size: 0.8em;
        border-radius: 5px;
        line-height: 1.3em;
    }
`
