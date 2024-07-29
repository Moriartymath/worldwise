import { Outlet } from "react-router";
import NavBar from "../../components/NavBar/NavBar";

function Layout() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default Layout;
