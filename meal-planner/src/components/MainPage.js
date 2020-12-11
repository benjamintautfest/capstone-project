import styled from 'styled-components/macro'
import Button from './Button'
import MealSelectMenu from './MealSelectMenu'
import RecipePage from './RecipePage'

export default function MainPage({
    handleCloseRecipe,
    selectedMeal,
    weekdays,
    handleClick,
    showRecipe,
    selectedWeekday,
    selectMeal,
    handleShowRecipe,
}) {
    return (
        <SectionStyled>
            {showRecipe ? (
                <RecipePage
                    closeRecipe={handleCloseRecipe}
                    title={selectedMeal.title}
                    image={selectedMeal.image}
                    ingredients={selectedMeal.ingredients}
                    instructions={selectedMeal.instructions}
                    id={selectedMeal.id}
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
        </SectionStyled>
    )
}

const SectionStyled = styled.section`
    overflow-y: auto;
    padding-top: 10px;
    scrollbar-width: none;
    &::-webkit-scrollbar {
        display: none;
    }
`
