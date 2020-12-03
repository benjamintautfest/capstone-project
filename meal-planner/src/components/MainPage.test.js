import MainPage from './MainPage'
import { render } from '@testing-library/react'
import user from '@testing-library/user-event'

describe('MainPage', () => {
    it('renders correctly', () => {
        const { container } = render(
            <MainPage
                weekdays={[
                    { weekday: 'Montag', meal: 'Gemüselasagne', id: '01' },
                ]}
            />
        )
        expect(container.firstChild).toMatchSnapshot()
    })

    it('shows submenu item after button click', () => {
        const { getByText, queryByText } = render(<MainPage />)
        const button = getByText('Montag')
        expect(queryByText('Gemüselasagne')).not.toBeInTheDocument()

        user.click(button)
        const listitem = getByText('Gemüselasagne')

        expect(listitem).toBeInTheDocument()
    })
})
