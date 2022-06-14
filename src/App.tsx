import './App.css';
import Header from './component/header/Header';
import Footer from './component/footer/Footer';
import Home from './section/home/Home';
import Portfolio from './section/portfolio/Portfolio';
import About from './section/about/About';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <section className='pt-sm-0' id='home'>
          <Home />
        </section>
        <section id='about'>
          <About/>
        </section>
        <section id='portfolio'>
          <Portfolio />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
