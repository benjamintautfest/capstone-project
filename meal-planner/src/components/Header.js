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
    box-shadow: 10px 0 30px #b16c16;
    padding-bottom: 30px;
    position: sticky;

    h1 {
        color: white;
    }

    img {
        width: 130px;
        margin: 30px auto 10px;
    }
`
