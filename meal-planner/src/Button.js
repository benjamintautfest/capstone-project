import styled from 'styled-components'
import slate from './assets/slate.jpg'

export default function Button({ day, meal, onClick }) {
    return (
        <ButtonStyled onClick={onClick}>
            <span className={'day'}>{day}</span>{' '}
            <span className={'meal'}>{meal}</span>
        </ButtonStyled>
    )
}

const ButtonStyled = styled.button`
    display: flex;
    width: 90%;
    margin: 10px auto;
    border: none;
    height: 50px;
    border-radius: 50px;
    background: url(${slate});
    background-size: cover;
    color: white;
    font-size: 0.9em;
    color: #e5e0e0;
    padding: 0 30px;
    align-items: center;
    outline: 0;

    .day {
        color: orange;
        margin-right: auto;
    }

    .meal {
        margin-left: auto;
    }
`
