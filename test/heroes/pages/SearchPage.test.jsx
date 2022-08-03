import { render, screen, fireEvent } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { SearchPage } from '../../../src/heroes'

const mockNavigateFunction = jest.fn()

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigateFunction,
}))

describe('Pruebas en <SearchPage/>', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  test('Debe de mostrarse corectamente con valores por defecto', () => {
    const { container } = render(
      <MemoryRouter>
        <SearchPage />
      </MemoryRouter>
    )

    expect(container).toMatchSnapshot()
  })

  test('Debe de mostrar batman y el input con el queryString', () => {
    render(
      <MemoryRouter initialEntries={['/search?q=batman']}>
        <SearchPage />
      </MemoryRouter>
    )

    const input = screen.getByRole('textbox')
    expect(input.value).toBe('batman')

    const img = screen.getByRole('img')
    expect(img.src).toContain('/assets/heroes/dc-batman.jpg')
  })

  test('Debe mostrar un error si no se encuentra el heroe (batman123)', () => {
    render(
      <MemoryRouter initialEntries={['/search']}>
        <SearchPage />
      </MemoryRouter>
    )

    const form = screen.getByTestId('search-form')
    const input = screen.getByRole('textbox')

    fireEvent.change(input, { target: { value: 'batman123' } })
    fireEvent.submit(form)

    const error = screen.getByText('Search a hero')
    expect(error).toBeTruthy()
  })

  test('Debe llamar a navigate a la pantalla nueva', () => {
    render(
      <MemoryRouter initialEntries={['/search']}>
        <SearchPage />
      </MemoryRouter>
    )

    const form = screen.getByTestId('search-form')
    const input = screen.getByRole('textbox')

    fireEvent.change(input, { target: { value: 'batman' } })
    fireEvent.submit(form)

    expect(mockNavigateFunction).toHaveBeenCalledWith('?q=batman')
  })
})
