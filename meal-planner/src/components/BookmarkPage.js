import styled from 'styled-components/macro'
import meals from '../data/recipeData.json'

export default function BookmarkPage({ weekdays }) {
    return (
        <DivStyled>
            <h1> Wochenplan </h1>
            {weekdays.map(({ meal, image, id, weekday }) => (
                <div key={id} onClick={() => console.log('favourite')}>
                    <h3>
                        {weekday}{' '}
                        <span> {meal ? meal : 'noch nichts geplant'}</span>
                    </h3>
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
        font-family: 'Sansita Swashed', cursive;
        margin-bottom: -20px;
    }

    span {
        color: maroon;
    }

    div {
        border-top: 1px dotted black;
        width: 90%;
        margin: 0 auto;
    }

    .heart {
        width: 20px;
        margin-bottom: 0;
    }

    img {
        transform: scale(0.9);
        margin: 0;
        padding: 0;
    }
`
