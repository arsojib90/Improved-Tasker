import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import TaskBoard from "./components/Task/TaskBoard";
import { TaskProvider } from "./components/Task/context/TaskContext";

export default function App() {
  return (
    <>
      <Header />
      <div className="flex flex-col justify-center items-center">
        <HeroSection />
        <TaskProvider>
          <TaskBoard />
        </TaskProvider>
      </div>
      <Footer />
    </>
  );
}
