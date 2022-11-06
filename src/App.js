import './App.css'
import NavBar from "./components/NavBar";
import ItemListContainer from './components/ItemListContainer';
// import ItemDetailContainer from './components/ItemDetailContainer';

const App = () => {
  return (
    <>
      <NavBar />
      <ItemListContainer text="Hola Mundo ItemListContainer"/>
      {/* <ItemDetailContainer /> */}
    </>
  )
}
export default App;