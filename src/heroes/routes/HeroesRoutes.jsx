import { Navbar } from '../../ui';
import { Navigate, Routes, Route } from 'react-router-dom';
import { DCPage, HeroPage, MarvelPage, SearchPage } from '../pages';

export const HeroesRoutes = () => {
  return (
    <>
      <Navbar />

      <div className='container'>
        <Routes>
          <Route path='/' element={<Navigate to='marvel' />} />
          <Route path='marvel' element={<MarvelPage />} />
          <Route path='dc' element={<DCPage />} />
          <Route path='search' element={<SearchPage />} />
          <Route path='hero/:heroId' element={<HeroPage />} />
        </Routes>
      </div>
    </>
  );
};
