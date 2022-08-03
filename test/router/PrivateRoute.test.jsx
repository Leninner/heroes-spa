import { render, screen } from '@testing-library/react'
import { AuthContext } from '../../src/auth'
import { PrivateRoute } from '../../src/router'
import { MemoryRouter } from 'react-router-dom'

describe('Pruebas en el <PrivateRoute/>', () => {
  test('Si estoy autenticado, debe mostrar el children ', () => {
    Storage.prototype.setItem = jest.fn()

    const contextValue = {
      logged: true,
      user: {
        name: 'Juan',
        id: '123',
      },
    }

    render(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter initialEntries={['/search?q=batman']}>
          <PrivateRoute>
            <h1>Ruta privada</h1>
          </PrivateRoute>
        </MemoryRouter>
      </AuthContext.Provider>
    )

    expect(screen.getByText('Ruta privada')).toBeTruthy()
    expect(Storage.prototype.setItem).toHaveBeenCalledWith(
      'lastPath',
      '/search?q=batman'
    )
  })
})
