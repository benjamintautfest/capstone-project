import styled from 'styled-components'
import woodBackground from './assets/wood_background.jpg'
import slate from './assets/slate.jpg'
import logo from './assets/logo.png'

import style from './App.css'

export default function App() {
    return (
        <StyledDiv>
            <header>
                {' '}
                <img src={logo} />
            </header>
            <section className="content">
                <button>Montag</button>
                <button>Dienstag</button>
                <button>Mittwoch</button>
                <button>Donnerstag</button>
                <button>Freitag</button>
                <button>Samstag</button>
                <button>Sonntag</button>
            </section>
            <footer></footer>
        </StyledDiv>
    )
}

const StyledDiv = styled.div`
    display: grid;
    grid-template-rows: 180px auto 48px;
    font-family: sans-serif;
    text-align: center;
    background: url(${woodBackground});
    background-size: cover;
    height: 100vh;

    button {
        display: block;
        width: 90%;
        margin: 10px auto;
        border: none;
        height: 50px;
        border-radius: 50px;
        background: url(${slate});
        background-size: cover;
        color: white;
        font-size: 1em;
        color: #e5e0e0;
    }

    h1 {
        color: white;
    }

    img {
        width: 45%;
        margin: 0 auto;
        margin-top: 30px;
    }

    .content {
        overflow: auto;
    }

    footer {
        background: white;
    }
`
