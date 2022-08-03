import { render, screen, act } from '@testing-library/react'
import { AuthContext } from '../../../src/auth'
import { Navbar } from '../../../src/ui'
import { MemoryRouter } from 'react-router-dom'

const mockNavigate = jest.fn()

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate,
}))

describe('Pruebas en <NavBar/>', () => {
  const contextValue = {
    logged: true,
    user: {
      id: '123',
      name: 'Leninsin',
    },
    logout: jest.fn(),
  }

  beforeEach(() => jest.clearAllMocks())

  test('Debe de mostrar el nombre del usuario logeado', () => {
    render(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter initialEntries={['/marvel']}>
          <Navbar />
        </MemoryRouter>
      </AuthContext.Provider>
    )

    expect(screen.getByText('Leninsin')).toBeTruthy()
  })

  test('Debe de llamar al logout y al navigate, cuando se de click en el botón', () => {
    render(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter initialEntries={['/marvel']}>
          <Navbar />
        </MemoryRouter>
      </AuthContext.Provider>
    )

    const logoutButton = screen.getByRole('button', { name: 'Logout' })

    act(() => {
      logoutButton.click()
    })

    expect(contextValue.logout).toHaveBeenCalled()
    expect(mockNavigate).toHaveBeenCalledWith('/login', { replace: true })
  })
})
