import styled from 'styled-components/macro'
import PropTypes from 'prop-types'

RecipePage.propTypes = {
    closeRecipe: PropTypes.func.isRequired,
    id: PropTypes.number,
    title: PropTypes.string.isRequired,
    image: PropTypes.any.isRequired,
    ingredients: PropTypes.array.isRequired,
    instructions: PropTypes.string.isRequired,
}

export default function RecipePage({
    closeRecipe,
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
    background: #800000fe;
    max-width: 600px;
    position: absolute;
    top: 0;
    height: 100%;
    display: block;
    padding: 0 30px;
    width: 100%;
    scrollbar-width: none;
    z-index: 9999;
    &::-webkit-scrollbar {
        display: none;
    }

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
        top: 0;
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
        padding: 15px;
        line-height: 1.5em;
        border-bottom: ivory dotted 1px;
        border-top: ivory dotted 1px;
    }

    img {
        margin-bottom: 10px;
        display: box;
        margin: 30px auto;
        filter: drop-shadow(0px 0px 10px #5d1821);
    }
`
