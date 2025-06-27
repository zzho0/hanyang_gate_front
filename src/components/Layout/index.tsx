import { Outlet } from 'react-router-dom';
import Header from '../Header';
import Sidebar from '../Sidebar';

const Layout = () => {
  return (
    <>
      <Header />
      <Sidebar />
      <main className="pt-[90px] pl-[100px]">
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
