import { Navbar } from "../navabar/Navbar";
import { Hero } from "../home/Hero";
const MainLayout = ({ children }) => {
  return (
    <div>
      <header>
        <Navbar />
        <Hero />
      </header>
      <main>{children}</main>
      <footer>footer</footer>
    </div>
  );
};
export default MainLayout;
