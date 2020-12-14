import styled from 'styled-components/macro'
import slate from '../assets/slate.jpg'
import PropTypes from 'prop-types'

Button.propTypes = {
    day: PropTypes.string.isRequired,
    meal: PropTypes.string,
    onClick: PropTypes.func,
    id: PropTypes.string.isRequired,
}

export default function Button({ day, meal, onClick, id }) {
    meal = meal ? meal : 'Auswählen'
    return (
        <ButtonStyled data-testid={day} id={id} onClick={onClick}>
            <span className={'day'}>{day}</span>
            <span className={'meal'}>{meal}</span>
        </ButtonStyled>
    )
}

const ButtonStyled = styled.button`
    display: flex;
    width: 90%;
    margin: 8px auto;
    border: none;
    height: 50px;
    border-radius: 50px;
    background: url(${slate});
    background-color: --var(primary-red);

    background-size: cover;
    color: white;
    font-size: 0.9em;
    padding: 0 30px;
    align-items: center;
    outline: 0;
    cursor: pointer;

    .day {
        color: orange;
        color: var(--orange);
        margin-right: auto;
    }

    .meal {
        margin-left: auto;
    }
`
