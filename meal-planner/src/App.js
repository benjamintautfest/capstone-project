import styled from 'styled-components/macro'
import woodBackground from './assets/wood_background.jpg'
import logo from './assets/logo.svg'
import shoppingCart from './assets/shopping_cart.svg'
import home from './assets/home.svg'
import Button from './components/Button'
import MealSelectMenu from './components/MealSelectMenu'
import RecipePage from './components/RecipePage'
import useRecipe from './hooks/useRecipe'
import { Switch, Route, Link } from 'react-router-dom'
import ShoppingList from './components/ShoppingList'
import meals from './data/recipeData.json'

export default function App() {
    const {
        weekdays,
        selectedWeekday,
        showRecipe,
        selectedMeal,
        handleClick,
        handleCloseRecipe,
        handleShowRecipe,
        selectMeal,
    } = useRecipe()

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
                    <section>
                        {showRecipe ? (
                            <RecipePage
                                closeRecipe={handleCloseRecipe}
                                title={selectedMeal.title}
                                image={selectedMeal.image}
                                ingredients={selectedMeal.ingredients}
                                instructions={selectedMeal.instructions}
                            />
                        ) : (
                            ''
                        )}
                        {weekdays &&
                            weekdays.map(({ weekday, id, meal }) => (
                                <div key={id}>
                                    <Button
                                        day={weekday}
                                        id={weekday}
                                        meal={meal}
                                        onClick={handleClick}
                                    />
                                    {selectedWeekday === weekday && (
                                        <MealSelectMenu
                                            handleMealClick={selectMeal}
                                            weekdayId={id}
                                            handleRecipeClick={handleShowRecipe}
                                        />
                                    )}
                                </div>
                            ))}
                    </section>
                </Route>
                <Route path="/shopping-list" component={ShoppingList}>
                    <ShoppingList ingredients={shoppingItems} />
                </Route>
            </Switch>
            <footer>
                <div>
                    <Link to="/">
                        <img src={home} alt="" />
                    </Link>
                    <Link to="/shopping-list">
                        <img
                            src={shoppingCart}
                            alt=""
                            onClick={() => {
                                console.log('hallo')
                            }}
                        />
                    </Link>
                </div>
            </footer>
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
    }

    h1 {
        color: white;
    }

    img {
        width: 130px;
        margin: 30px auto 10px;
        outline: 0;
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

    footer {
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
            }
        }
    }
`
