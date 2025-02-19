import './App.css'
import Header from './components/Header';
import Preview from './components/Preview';

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
      <h1>The Long Road: Comparison of Approximation Heuristics for Traveling Salesperson Problem</h1>
      <div className="container">
        <p>
          In the theory of computational complexity, the travelling salesman problem (TSP) asks the following question:
          "Given a list of cities and the distances between each pair of cities, what is the shortest possible route that 
          visits each city exactly once and returns to the origin city?" It is an NP-hard problem in combinatorial optimization, 
          important in theoretical computer science and operations research. 
          <br></br><br></br>
          The PDFs of our paper and posters could be downloaded by clicking on the images below!
        </p>
      </div>
      <div className="container">

        <Preview reference="src\assets\Chewbacca.pdf" image="src\assets\paper.png" text="Our paper" />
        <Preview reference="src\assets\Chewbacca.pdf" image="src\assets\poster1.png" text="Artem's poster" />
        <Preview reference="src\assets\Chewbacca.pdf" image="src\assets\poster2.png" text="Arthur's poster" />
        <Preview reference="src\assets\Chewbacca.pdf" image="src\assets\poster3.png" text="Daniel's poster" />
        <Preview reference="src\assets\Chewbacca.pdf" image="src\assets\poster4.png" text="Miles' poster" />

      </div>
    </div>
  )
}

export default App
