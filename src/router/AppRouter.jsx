import { Routes, Route } from 'react-router-dom';
import { LoginPage } from '../auth';
import { HeroesRoutes } from '../heroes';

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path='/*' element={<HeroesRoutes />} />
        <Route path='login' element={<LoginPage />} />
      </Routes>
    </>
  );
};
