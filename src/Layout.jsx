import { Outlet } from 'react-router-dom';
import './App.css';
import NavigationBar from './components/common/NavigationBar';

const Layout = () => {
  return (
    <>
      <div className='App'>
        <Outlet />
      </div>
      <NavigationBar />
    </>
  )
}

export default Layout