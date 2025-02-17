import './App.css'
import Header from './components/Header';

function App() {

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className='app'>
      <Header handleClick={handleClick} />
      <h1>INSERT COMPS NAME</h1>
      <div className="container">
        <p>
          In the theory of computational complexity, the travelling salesman problem (TSP) asks the following question:
          "Given a list of cities and the distances between each pair of cities, what is the shortest possible route that 
          visits each city exactly once and returns to the origin city?" It is an NP-hard problem in combinatorial optimization, 
          important in theoretical computer science and operations research.
        </p>
      </div>
      <div className="container">
        <p>
          
        </p>
      </div>
    </div>
  )
}

export default App
