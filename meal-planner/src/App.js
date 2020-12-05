import styled from 'styled-components/macro'
import woodBackground from './assets/wood_background.jpg'
import MainPage from './components/MainPage'
import { Switch, Route } from 'react-router-dom'
import ShoppingList from './components/ShoppingList'
import Header from './components/Header'
import Footer from './components/Footer'
import useRecipe from './hooks/useRecipe'

export default function App() {
    const {
        weekdays,
        selectedWeekday,
        selectedMeal,
        handleClick,
        handleCloseRecipe,
        handleShowRecipe,
        selectMeal,
        setSelectedWeekday,
    } = useRecipe()

    return (
        <AppStyled>
            <Header />
            <Switch>
                <Route path="/" exact>
                    <MainPage
                        weekdays={weekdays}
                        selectedWeekday={selectedWeekday}
                        showRecipe={!!selectedMeal}
                        selectedMeal={selectedMeal}
                        handleClick={handleClick}
                        handleCloseRecipe={handleCloseRecipe}
                        handleShowRecipe={handleShowRecipe}
                        selectMeal={selectMeal}
                    />
                </Route>
                <Route path="/shopping-list">
                    <ShoppingList weekdays={weekdays} />
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
    scrollbar-width: none;

    img {
        width: 130px;
        margin: 30px auto 10px;
    }

    section {
        overflow: auto;
        padding-top: 10px;
        scrollbar-width: none;
        &::-webkit-scrollbar {
            display: none;
        }
    }
`
