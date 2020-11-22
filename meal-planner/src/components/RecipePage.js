import styled from 'styled-components/macro'
import risotto from '../assets/risotto.png'

export default function RecipePage({
    closeRecipe,
    meals,
    recipeId,
    recipeTitle,
    recipeIngredients,
    recipeInstructions,
}) {
    return (
        <SectionStyled>
            <span onClick={closeRecipe}>&times;</span>
            <h2>{recipeTitle}</h2>
            <img src={risotto} alt="risotto" />
            <ul>
                <li>getrocknete Steinpilze</li>
                <li>Zwiebel</li>
                <li>Knoblauch</li>
                <li>Risottoreis</li>
            </ul>
            <p>
                Die getrockneten Steinpilze in eine Schüssel geben und mit
                heißem Wasser übergießen. Ca. 20 Min. ziehen lassen und
                anschließend abgießen. Frische Steinpilze in mundgerechte Stüce
                schneiden. Zwiebel und Knoblauch schälen und fein hacken. Butter
                in einem großen Topf über mittlerer Hitze schmelzen und Zwiebel
                und Knoblauch darin ca. 3 Min. anschwitzen.
            </p>
            <p>{recipeInstructions}</p>
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
        text-align: left;
        color: ivory;
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
