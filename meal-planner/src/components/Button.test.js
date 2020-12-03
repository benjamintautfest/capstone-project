import Button from './Button'
import { render } from '@testing-library/react'

describe('Button', () => {
    it('shows the day', () => {
        const { getByText } = render(<Button day="Day" meal="Meal" id="Id" />)
        expect(getByText(/Day/)).toBeInTheDocument()
        expect(getByText(/Meal/)).toBeInTheDocument()
    })
})
