import styled from 'styled-components'
import logo from '../assets/logo.svg'

export default function Header() {
    return (
        <HeaderStyled>
            <img src={logo} alt="" />
        </HeaderStyled>
    )
}

const HeaderStyled = styled.header`
    position: relative;
    box-shadow: 0 0 10px #965a0f;
    padding-bottom: 30px;

    h1 {
        color: white;
    }

    img {
        width: 130px;
        margin: 30px auto 10px;
    }
`
