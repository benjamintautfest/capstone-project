import logo from './assets/logo.svg'
import styled from 'styled-components/macro'
import woodBackground from './assets/wood_background.jpg'

import MainPage from './components/MainPage'
import { Switch, Route, Link } from 'react-router-dom'
import ShoppingList from './components/ShoppingList'
import Footer from './components/Footer'
export default function App() {
    const shoppingItems = [
        { id: '1', ingredient: '1 Dose Tomaten' },
        { id: '2', ingredient: '1 Stange Lauch' },
        { id: '3', ingredient: '1 Packung Nudeln' },
        { id: '4', ingredient: '1 Baguette' },
        { id: '5', ingredient: '1 Packung Spaghetti' },
        { id: '6', ingredient: '1 Netz Mandarinen' },
        { id: '7', ingredient: '1 Dose Tomaten' },
        { id: '8', ingredient: '1 Stange Wasser' },
    ]

    return (
        <AppStyled>
            <header>
                <img src={logo} alt="" />
            </header>
            <Switch>
                <Route path="/" exact>
                    <MainPage />
                </Route>
                <Route path="/shopping-list" component={ShoppingList}>
                    <ShoppingList ingredients={shoppingItems} />
                </Route>
            </Switch>
            <Footer />
        </AppStyled>
    )
}

const AppStyled = styled.div`
    display: grid;
    grid-template-rows: 190px auto 48px;
    font-family: sans-serif;
    text-align: center;
    background: url(${woodBackground});
    background-color: #2e2d2d;
    background-size: cover;
    height: 100vh;
    max-width: 600px;

    header {
        box-shadow: 10px 0 30px #b16c16;
        padding-bottom: 30px;
        position: sticky;
    }

    h1 {
        color: white;
    }

    img {
        width: 130px;
        margin: 30px auto 10px;
    }

    section {
        overflow: auto;
        padding-top: 10px;
        scrollbar-width: none;
        z-index: 9999;
        &::-webkit-scrollbar {
            display: none;
        }
    }
`
