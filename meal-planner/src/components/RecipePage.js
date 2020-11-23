import styled from 'styled-components/macro'
import risotto from '../assets/risotto.png'

export default function RecipePage({
    closeRecipe,
    meals,
    id,
    title,
    image,
    ingredients,
    instructions,
}) {
    return (
        <SectionStyled key={id}>
            <span onClick={closeRecipe}>&times;</span>
            <h2>{title}</h2>
            <img src={image} alt={image} />
            <ul>
                {ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                ))}
            </ul>
            <p>{instructions}</p>
        </SectionStyled>
    )
}

const SectionStyled = styled.section`
    background: #800000;
    position: absolute;
    top: 0;
    height: 100%;
    display: block;
    padding: 0 30px;
    width: 100%;

    h2 {
        font-family: 'Sansita Swashed', cursive;
        color: ivory;
        margin: 10px 0 0;
        padding: 0 0 10px;
        font-size: 2em;
        border-bottom: 1px dotted white;
    }

    span {
        position: absolute;
        right: 10px;
        top: 5px;
        font-size: 1.5em;
        color: white;
        padding: 5px;
    }

    p {
        color: white;
        line-height: 1.5em;
        color: ivory;
        hyphens: auto;
        text-align: left;
    }

    ul {
        text-align: left;
        color: ivory;
        padding: 10px 0 10px;
        line-height: 1.5em;
        list-style-position: inside;
        color: ivory;
        border-bottom: ivory dotted 1px;
        border-top: ivory dotted 1px;
    }

    img {
        margin-bottom: 10px;
        display: box;
        margin-left: 30px;
    }
`
