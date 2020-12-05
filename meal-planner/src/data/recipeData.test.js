import recipeData from './recipeData.json'

test('the recipe data is correct', () => {
    expect(recipeData).toMatchSnapshot()
    expect(recipeData).toHaveLength(9)
    expect(recipeData.map((recipe) => recipe.meal)).toEqual([
        'Gemüselasagne',
        'Vegetarisches Chili',
        'Steinpilzrisotto',
        'Banana Pancakes',
        'Paprika-Zwiebel-Quiche',
        'Käse-Lauch-Suppe',
        'Linsensuppe',
        'Spaghetti Carbonara',
        'Thai Gemüsecurry',
    ])
})
