import styled from 'styled-components/macro'
import RecipePage from './RecipePage'
import spoon from '../assets/spoon.svg'
export default function BookmarkPage({
    weekdays,
    showRecipe,
    handleCloseRecipe,
    selectedMeal,
    bookmarkRecipe,
    isBookmarked,
    handleShowRecipe,
}) {
    return (
        <DivStyled>
            <h1> Wochenplan </h1>
            {weekdays.map(
                ({ meal, image, id, weekday, ingredients, instructions }) => (
                    <details key={id} onClick={() => console.log('hallo')}>
                        <summary>
                            <h3>
                                {weekday} &nbsp;
                                <span>
                                    {meal ? meal : 'noch nichts geplant'}
                                </span>
                            </h3>
                            <img src={image} alt={meal} />
                        </summary>
                        <ul>
                            {ingredients.map((ingredient) => (
                                <li key={ingredient.id}>
                                    {`${ingredient.amount} ${ingredient.units} ${ingredient.item}`}
                                </li>
                            ))}
                        </ul>

                        <p>{instructions}</p>
                    </details>
                )
            )}
        </DivStyled>
    )
}

const DivStyled = styled.div`
    overflow: auto;
    scrollbar-width: none;
    z-index: 9999;
    &::-webkit-scrollbar {
        display: none;
    }

    h1 {
        color: maroon;
    }

    h3 {
        font-size: 1.4em;
        font-family: 'Sansita Swashed', cursive;
        margin-bottom: -20px;
    }

    span {
        color: darkorange;
    }

    section {
        width: 90%;
        margin: 0 auto;
        font-size: 1em;
    }

    ul {
        text-align: left;
        font-size: 1.3em;
        padding: 0;
        list-style-position: inside;
        line-height: 1.7em;
        position: relative;
        top: -30px;
    }

    li {
        border-bottom: 1px dotted ivory;
        font-family: 'Sansita Swashed', cursive;
        color: white;
    }

    p {
        line-height: 1.3em;
        color: ivory;
    }

    p {
        text-align: left;
    }

    details {
        width: 90%;
        margin: 0 auto;
        border-radius: 10px;
        margin: 20px;
        padding: 20px;
        background: maroon;
    }

    summary {
        color: ivory;
        border: none;
        outline: 0;
    }

    .heart {
        width: 20px;
        margin-bottom: 0;
    }

    img {
        transform: scale(0.9);
        margin: 0;
        padding: 0;
        filter: drop-shadow(0px 0px 10px #5d182155);
    }
`
