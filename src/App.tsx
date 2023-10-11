import { FC } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { NavigateList } from '@/routes/routeList';
import './App.css';

const App: FC = () => {
  return (
    <BrowserRouter>
      <NavigateList />
    </BrowserRouter>
  );
}

export default App;
