import './App.css';
import Articles from './articles-section/articles';
import Details from './details-section/details';
import Intro from './intro-section/intro';
import Navbar from './navbar/navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Details />
      <Articles />
    </div>
  );
}

export default App;
