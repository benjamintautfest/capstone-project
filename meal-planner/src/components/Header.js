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
    box-shadow: 10px 0 10px #965a0f;
    padding-bottom: 30px;
    //z-index: 0;

    h1 {
        color: white;
    }

    img {
        width: 130px;
        margin: 30px auto 10px;
    }
`
