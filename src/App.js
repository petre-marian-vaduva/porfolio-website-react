import './App.css';
import Navbar from "./components/Navbar/Navbar";
import MainLayout from "./components/MainLayout/MainLayout";

function App() {

  return (
    <div className='app'>
        <h1>Videos</h1>
        <Navbar />
        <MainLayout />
    </div>
  );
}

export default App;
