import styled from 'styled-components'
import PropTypes from 'prop-types'

ShoppingList.propTypes = {
    recipes: PropTypes.string.isRequired,
}

export default function ShoppingList({ recipes }) {
    return (
        <DivStyled>
            <h1>Einkaufsliste</h1>
            <ul>
                {recipes.map(({ ingredients, id }) =>
                    ingredients.map((item, index) => (
                        <li key={index}>
                            {item}
                            <input id={item} type="checkbox" />
                            <label htmlFor={item}></label>
                        </li>
                    ))
                )}
            </ul>
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

    ul {
        text-align: left;
        font-family: 'Sansita Swashed', cursive;
        font-size: 1.5em;
        list-style: none;
        line-height: 1.75em;
        width: 90%;
    }

    li {
        display: flex;
        justify-content: space-between;
        border-bottom: 1px dotted black;
        font-size: 0.9em;
    }

    input[type='checkbox'] {
        display: none;
    }

    input[type='checkbox'] + label::before {
        width: 20px;
        height: 20px;
        padding: 6px;
        color: white;
        border: 2px solid papayawhip;
        position: relative;
        content: '';
        display: grid;
        line-height: 0;
        place-items: center;
        top: 4px;
        border-radius: 3px;
        transform: scale(0.75);
    }

    input[type='checkbox']:checked + label::before {
        background-color: transparent;
        content: '🍅';
    }
`
