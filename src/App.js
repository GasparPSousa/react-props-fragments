import './App.css';
import Header from './components/header/Header'
import Banner from './components/banner/Banner'
import Footer from './components/footer/Footer'



function App() {

  const nome = 'Renan';
  const mensagem = "Confia S.A."
  const clique = 'Clique aqui'

  return (
    <>
    <Header/>
    <Banner nome={nome} clique={clique}/>
    <Footer mensagem={mensagem}/>
    </>
  );
}

export default App;
