import styled from 'styled-components'
import { Link } from 'react-router-dom'
import shoppingCart from '../assets/shopping_cart.svg'
import home from '../assets/home.svg'

export default function Footer() {
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
                        onClick={() => {
                            console.log(
                                'load the god damn ingredients to the shopping list'
                            )
                        }}
                    />
                </Link>
            </div>
        </FooterStyled>
    )
}

const FooterStyled = styled.footer`
    position: relative;
    box-shadow: -10px 0 30px #b16c16;
    z-index: 0;
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
