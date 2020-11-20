import styled from 'styled-components/macro'
import risotto from '../assets/risotto.png'

export default function RecipePage({ closeRecipe, recipeTitle }) {
    return (
        <SectionStyled>
            <span onClick={closeRecipe}>&times;</span>

            <h2>{recipeTitle}</h2>
            <img src={risotto} alt="risotto" />
            <ul>
                <li>120 g Risottoreis (ca. 1/2 – 1 Tasse)</li>
                <li>1 kl Zwiebel oder 2 Schalotten</li>
                <li>Butter oder Butterschmalz</li>
                <li>100 ml Weißwein trocken</li>
                <li>ca. 1/2 l Gemüsebrühe</li>
                <li>Parmesankäse gerieben</li>
            </ul>
            <p>
                Die Butter / Butterschmalz in einem Topf heiß werden lassen und
                die Zwiebel glasig braten. Den Risottoreis zugeben und kurz mit
                anschwitzen. Mit dem Weißwein ablöschen, dann etwas Brühe
                zugeben. Sobald die Brühe verdampft ist, weitere hinzufügen.
                Regelmäßig umrühren, damit der Risotto nicht anhängt. Sobald die
                zuvor zugefügte Brühe durch den Reis aufgenommen wurde, weitere
                Brühe angießen. So lange umrühren und Brühe zufügen bis der Reis
                gar ist.
            </p>
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

    h2 {
        font-family: 'Sansita Swashed', cursive;
        color: ivory;
        margin: 10px 0 0;
        font-size: 2em;
    }

    span {
        position: absolute;
        right: 20px;
        top: 20px;
        font-size: 1.5em;
        color: white;
    }

    p {
        color: white;
        line-height: 1.5em;
        text-align: left;
        font-size: 0.88em;
        color: ivory;
    }

    ul {
        text-align: left;
        color: ivory;
        padding: 10px 0 10px;
        line-height: 1.5em;
        list-style-position: inside;
        font-size: 0.88em;
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
