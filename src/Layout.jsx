import { Outlet } from 'react-router-dom';
import './App.css';
import NavigationBar from './components/common/NavigationBar';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

const Layout = () => {
  return (
    <>
      <div className='App'>
        <ToastContainer />
        <Outlet />
      </div>
      <NavigationBar />
    </>
  )
}

export default Layout