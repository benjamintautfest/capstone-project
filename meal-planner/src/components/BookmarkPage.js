import styled from 'styled-components/macro'
import meals from '../data/recipeData.json'

export default function BookmarkPage() {
    return (
        <DivStyled>
            <h1> Lieblingsessen </h1>
            {meals.map(({ meal, image, id }) => (
                <div key={id} onClick={() => console.log('favourite')}>
                    <h3>{meal}</h3>
                    <img src={image} alt={meal} />
                </div>
            ))}
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
        font-size: 1.2em;
        margin-bottom: -10px;
        font-family: 'Sansita Swashed', cursive;
    }

    div {
        border-bottom: 1px dotted black;
    }

    .heart {
        width: 20px;
        margin-bottom: 0;
    }
`
