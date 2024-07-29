import { Outlet } from "react-router";

function Layout() {
  return (
    <>
      <header></header>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default Layout;
