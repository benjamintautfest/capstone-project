import styled from 'styled-components/macro'
import { Link } from 'react-router-dom'
import shoppingCart from '../assets/shopping_cart.svg'
import home from '../assets/home.svg'

export default function Footer({ shoppingListClick }) {
    return (
        <FooterStyled>
            <div>
                <Link to="/">
                    <img src={home} alt="" />
                </Link>
                <Link to="/shopping-list">
                    <img
                        src={shoppingCart}
                        alt=""
                        onClick={shoppingListClick}
                    />
                </Link>
            </div>
        </FooterStyled>
    )
}

const FooterStyled = styled.footer`
    position: relative;
    //z-index: 0;
    display: grid;
    place-items: center;
    color: white;
    background: white;

    div {
        display: flex;
        align-items: center;
        padding: 0;
        height: 48px;
        justify-content: space-around;
        width: 70%;

        img {
            width: 25px;
            position: relative;
            bottom: 10px;
            outline: 0;
        }
    }
`
