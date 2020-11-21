import App from './App'
import { render } from '@testing-library/react'
import user from '@testing-library/user-event'

describe('App', () => {
    it('renders correctly', () => {
        const { container } = render(<App />)
        expect(container.firstChild).toMatchSnapshot()
    })

    it('shows submenu item after button click', () => {
        const { getByText, queryByText, getByRole } = render(<App />)
        const button = getByRole('button', { name: /montag/i })
        expect(queryByText('Käsestulle')).not.toBeInTheDocument()

        user.click(button)
        const listitem = getByText('Käsestulle')

        expect(listitem).toBeInTheDocument()
    })
})
