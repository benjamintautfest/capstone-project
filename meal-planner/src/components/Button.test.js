import Button from './Button'
import { render } from '@testing-library/react'

describe('Button', () => {
    it('shows the day', () => {
        const { getByText } = render(<Button day="Test" />)
        expect(getByText(/Test/)).toBeInTheDocument()
    })

    it('shows the meal', () => {
        const { getByText } = render(<Button meal="Test" />)
        expect(getByText(/Test/)).toBeInTheDocument()
    })
})
