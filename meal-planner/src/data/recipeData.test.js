import recipeData from './recipeData.json'

it('delivers the correct recipe data', () => {
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

for (let i = 0; i < recipeData.length; i += 1) {
    test(`recipe[${i}] should have properties (id, image, meal, ingredients, instructions)`, () => {
        expect(recipeData[i]).toHaveProperty('id')
        expect(recipeData[i]).toHaveProperty('image')
        expect(recipeData[i]).toHaveProperty('meal')
        expect(recipeData[i]).toHaveProperty('ingredients')
        expect(recipeData[i]).toHaveProperty('instructions')
    })
}
