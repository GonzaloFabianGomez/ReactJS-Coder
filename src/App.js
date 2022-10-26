import './App.css'
import NavBar from "./components/NavBar";
import Message from './components/ItemListContainer';

const App = () => {
  return (
    <>
      <NavBar />
      <Message text="Hola Mundo ItemListContainer"/>
    </>
  )
}
export default App;