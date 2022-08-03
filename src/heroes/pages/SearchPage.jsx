import { HeroCard } from '../components'
import { useForm } from '../../hooks'
import { useLocation, useNavigate } from 'react-router-dom'
import queryString from 'query-string'
import { getHeroesByName } from '../helpers'

export const SearchPage = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const { q = '' } = queryString.parse(location.search)

  const { searchText, onInputChange } = useForm({
    searchText: q,
  })

  const heroes = getHeroesByName(q)

  const onSearchSubmit = e => {
    e.preventDefault()

    navigate(`?q=${searchText.toLowerCase().trim()}`)
  }

  return (
    <>
      <h1>Search</h1>
      <hr />

      <div className='row'>
        <div className='col-5'>
          <h4>Searching...</h4>
          <hr />

          <form onSubmit={onSearchSubmit} data-testid='search-form'>
            <input
              type='text'
              placeholder='Search a Hero'
              className='form-control'
              name='searchText'
              autoComplete='off'
              value={searchText}
              onChange={onInputChange}
            />

            <button className='btn btn-outline-primary mt-1'>Search</button>
          </form>
        </div>

        <div className='col-7'>
          <h4>Results</h4>
          <hr />

          {q === '' ? (
            <div className='alert alert-primary'>Search a hero</div>
          ) : heroes.length ? (
            <>
              {heroes.map(hero => (
                <HeroCard {...hero} key={hero.id} />
              ))}
            </>
          ) : (
            <div className='alert alert-danger'>
              No hero with <b>{q}</b>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
