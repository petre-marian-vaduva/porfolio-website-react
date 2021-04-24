import './App.css';
import Navbar from "./components/Navbar/Navbar";
import MainLayout from "./components/MainLayout/MainLayout";

function App() {

  return (
    <div className='app'>
        <Navbar></Navbar>
        <MainLayout></MainLayout>
    </div>
  );
}

export default App;
