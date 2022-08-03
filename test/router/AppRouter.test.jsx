import { render, screen } from '@testing-library/react'
import { AuthContext } from '../../src/auth'
import { MemoryRouter } from 'react-router-dom'
import { AppRouter } from '../../src/router'

describe('Pruebas en <AppRouter/>', () => {
  test('Debe mostrar el login si no estamos autenticados', () => {
    const contextValue = {
      logged: false,
    }

    render(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter initialEntries={['/marvel']}>
          <AppRouter />
        </MemoryRouter>
      </AuthContext.Provider>
    )

    expect(screen.getAllByText('Login').length).toBe(2)
  })

  test('Debe mostrar el componente de marvel si está autenticado', () => {
    const contextValue = {
      logged: true,
      user: {
        id: '123',
        name: 'Leninsin',
      },
    }

    render(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter initialEntries={['/marvel']}>
          <AppRouter />
        </MemoryRouter>
      </AuthContext.Provider>
    )

    expect(screen.getByText('Leninsin')).toBeTruthy()
  })
})
