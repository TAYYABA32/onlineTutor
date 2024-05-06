import { Navbar } from "../navabar/Navbar";

const MainLayout = ({ children }) => {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main>{children}</main>
      <footer></footer>
    </div>
  );
};
export default MainLayout;
