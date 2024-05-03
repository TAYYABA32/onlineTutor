import MainLayout from "../../components/layout/MainLayout";
import { Hero } from "../../components/home/Hero";

export const Home = () => {
  return (
    <div className="home-container">
      <MainLayout>
        <Hero />
      </MainLayout>
    </div>
  );
};
