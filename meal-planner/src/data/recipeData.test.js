import recipeData from './recipeData.json'

test('delivers the correct recipe data', () => {
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

test('mock implementation of a basic function', () => {
    const mock = jest.fn(() => 'i am a mock function')
    expect(mock('calling my mock function !')).toBe('i am a mock function')
    expect(mock).toHaveBeenCalledWith('calling my mock function !')
})

test('mock to return value of a function one time', () => {
    const mock = jest.fn()
    mock.mockReturnValueOnce('Hello')
    mock.mockReturnValueOnce('there')

    mock()
    mock()

    expect(mock).toHaveBeenCalledTimes(2)

    mock('hello', 'there', 'Ben')
    expect(mock).toHaveBeenCalledWith('hello', 'there', 'Ben')

    mock('Ben')
    expect(mock).toHaveBeenLastCalledWith('Ben')
})

test('mock implementation of a function', () => {
    const mock = jest.fn().mockImplementation(() => 'Hamburg')
    expect(mock('Location')).toBe('Hamburg')
    expect(mock).toHaveBeenCalledWith('Location')
})
