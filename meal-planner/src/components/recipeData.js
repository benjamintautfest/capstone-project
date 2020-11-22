import { v4 as uuidv4 } from 'uuid'

const meals = [
    {
        meal: 'Käsestulle',
        id: uuidv4(),
        instructions: 'Stulle schmieren',
        ingredients: ['Käse', 'Stulle', 'Butter'],
    },
    {
        meal: 'Kartoffelsalat',
        id: uuidv4(),
        instructions: 'Kartoffeln kochen',
        ingredients: ['Käse', 'Stulle', 'Butter'],
    },
    {
        meal: 'Gemüselasagne',
        id: uuidv4(),
        instructions: 'Lasagne in Ofen',
        ingredients: ['Käse', 'Stulle', 'Butter'],
    },
    {
        meal: 'Steinpilzrisotto',
        id: uuidv4(),
        instructions: 'Risotto kochen',
        ingredients: ['Käse', 'Stulle', 'Butter'],
    },
    {
        meal: 'Currywurst',
        id: uuidv4(),
        instructions: 'Wurst braten',
        ingredients: ['Käse', 'Stulle', 'Butter'],
    },
    {
        meal: 'Linsensuppe',
        id: uuidv4(),
        instructions: 'Dose aufmachen',
        ingredients: ['Käse', 'Stulle', 'Butter'],
    },
    {
        meal: 'Spaghetti Carbonara',
        id: uuidv4(),
        instructions: 'Nudeln kochen',
        ingredients: ['Käse', 'Stulle', 'Butter'],
    },
    {
        meal: 'Banana Pancakes',
        id: uuidv4(),
        instructions: 'Pfannekuchen backen',
        ingredients: ['Käse', 'Stulle', 'Butter'],
    },
    {
        meal: 'Thai Gemüsecurry',
        id: uuidv4(),
        instructions: 'Curry kochen',
        ingredients: ['Käse', 'Stulle', 'Butter'],
    },
]

export default meals
