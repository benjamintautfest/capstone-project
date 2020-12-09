import MainPage from './MainPage'
import { render } from '@testing-library/react'
import user from '@testing-library/user-event'

describe('MainPage', () => {
    beforeEach(() => {
        Object.defineProperty(window, 'localStorage', {
            value: {
                getItem: jest.fn(() => null),
                setItem: jest.fn(() => null),
            },
            writable: true,
        })
    })
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
        const { getByText, queryByText } = render(
            <MainPage
                weekdays={[
                    { weekday: 'Montag', meal: 'Gemüselasagne', id: '01' },
                ]}
            />
        )
        const button = getByText('Montag')
        expect(queryByText('Gemüselasagne')).toBeInTheDocument()

        user.click(button)
        const listitem = getByText('Gemüselasagne')

        expect(listitem).toBeInTheDocument()
    })
})
