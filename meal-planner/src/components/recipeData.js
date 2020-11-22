import { v4 as uuidv4 } from 'uuid'

const meals = [
    {
        meal: 'Käsestulle',
        id: uuidv4(),
        instructions: 'Stulle schmieren',
        ingredience: ['Käse', 'Stulle', 'Butter'],
    },
    {
        meal: 'Kartoffelsalat',
        id: uuidv4(),
        instructions: 'Kartoffeln kochen',
        ingredience: ['Käse', 'Stulle', 'Butter'],
    },
    {
        meal: 'Gemüselasagne',
        id: uuidv4(),
        instructions: 'Lasagne in Ofen',
        ingredience: ['Käse', 'Stulle', 'Butter'],
    },
    {
        meal: 'Steinpilzrisotto',
        id: uuidv4(),
        instructions: 'Risotto kochen',
        ingredience: ['Käse', 'Stulle', 'Butter'],
    },
    {
        meal: 'Currywurst',
        id: uuidv4(),
        instructions: 'Wurst braten',
        ingredience: ['Käse', 'Stulle', 'Butter'],
    },
    {
        meal: 'Linsensuppe',
        id: uuidv4(),
        instructions: 'Dose aufmachen',
        ingredience: ['Käse', 'Stulle', 'Butter'],
    },
    {
        meal: 'Spaghetti Carbonara',
        id: uuidv4(),
        instructions: 'Nudeln kochen',
        ingredience: ['Käse', 'Stulle', 'Butter'],
    },
    {
        meal: 'Banana Pancakes',
        id: uuidv4(),
        instructions: 'Pfannekuchen backen',
        ingredience: ['Käse', 'Stulle', 'Butter'],
    },
    {
        meal: 'Thai Gemüsecurry',
        id: uuidv4(),
        instructions: 'Curry kochen',
        ingredience: ['Käse', 'Stulle', 'Butter'],
    },
]

export default meals
