import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import { BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
import Home from './components/pages/Home';
import About from './components/pages/About';
import OurArticles from './components/pages/OurArticles';
import Contact from './components/pages/Contact';

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Switch>
            <Route path="/" exact>
                <Home /> 
            </Route>
            <Route path="/about-us">
                <About />
            </Route>
            <Route path="/our-articles">
                <OurArticles />
            </Route>
            <Route path="/contact">
                <Contact />
            </Route>
        </Switch>
        </main>
      <Footer />
    </Router>
  );
}

export default App;
