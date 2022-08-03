import { render, screen } from '@testing-library/react'
import { AuthContext } from '../../src/auth'
import { PublicRoute } from '../../src/router'
import { MemoryRouter, Routes, Route } from 'react-router-dom'

describe('Pruebas sobre <PublicRoute/>', () => {
  test('Si no estoy autenticado, debe mostrar el children ', () => {
    const contextValue = {
      logged: false,
    }

    render(
      <AuthContext.Provider value={contextValue}>
        <PublicRoute>
          <h1>Ruta pública</h1>
        </PublicRoute>
      </AuthContext.Provider>
    )

    expect(screen.getByText('Ruta pública')).toBeTruthy()
  })

  test('Si estoy autenticado debe navegar a /marvel', () => {
    const contextValue = {
      logged: true,
      user: {
        name: 'Juan',
        id: '123',
      },
    }

    render(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter initialEntries={['/login']}>
          <Routes>
            <Route
              path='login'
              element={
                <PublicRoute>
                  <h1>Ruta pública</h1>
                </PublicRoute>
              }
            />

            <Route path='marvel' element={<h1>Página Marvel</h1>} />
          </Routes>
        </MemoryRouter>
      </AuthContext.Provider>
    )

    // expect(screen.getByText('Ruta pública')).toBeTruthy()
  })
})
