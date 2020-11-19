import styled from 'styled-components'

export default function MealSelect({ key, onClick }) {
    const meals = [
        'Käsestulle',
        'Kartoffelsalat',
        'Gemüselasagne',
        'Mayo',
        'Currywurst',
        'Linsensuppe',
        'Frikassee',
        'Currywurst',
        'Katzenfutter',
    ]

    function onMealClick(meal) {
        console.log(meal)
    }

    return (
        <ListStyled>
            {meals.map((meal, index) => (
                <li key={index} onClick={() => onMealClick(meal)}>
                    {meal}
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

    li {
        display: grid;
        background: maroon;
        margin: 5px;
        color: ivory;
        justify-content: center;
        align-items: center;
        padding: 0 30px;
        font-size: 0.8em;
        border-radius: 5px;
        width: 800px;
    }
`
