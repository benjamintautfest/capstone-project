import styled from 'styled-components'
import mealplan from '../data/MealPlan.js'

export default function ShoppingList() {
    const shoppingItems = [
        { id: '1', title: '1 Dose Tomaten' },
        { id: '2', title: '1 Stange Lauch' },
        { id: '3', title: '1 Packung Nudeln' },
        { id: '4', title: '1 Baguette' },
        { id: '5', title: '1 Packung Spaghetti' },
        { id: '6', title: '1 Netz Mandarinen' },
    ]
    return (
        <DivStyled>
            <h1>Einkaufsliste</h1>
            <ul>
                {shoppingItems.map(({ title, id }) => (
                    <li key={id}>
                        {title}
                        <input id={id} type="checkbox" />
                        <label htmlFor={id}></label>
                    </li>
                ))}
            </ul>
        </DivStyled>
    )
}

const DivStyled = styled.div`
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
        content: '✔️';
    }
`
