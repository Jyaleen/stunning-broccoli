import './App.css';
import GreetFunctional from './components/GreetFunctional';
import GreetClass from './components/GreetClass';
import Hello from './components/Hello';
import Message from './components/Message'
import Counter from './components/Counter';


function App() {
  return (
    <div className="App">
       {/* <Message /> */}
       <Counter />
      {/* <GreetFunctional name="Bruce Lee" occupation="martial artist">
        <p>San Francisco, CA</p>
      </GreetFunctional>
      <GreetFunctional name="Andy Williams" occupation="singer">
        <p>Wall Lake, IA</p>
        <button>Learn More</button>
      </GreetFunctional>
      <GreetFunctional name="Dolly Parton" occupation="singer">
        <p>Sevier County, TN</p>
      </GreetFunctional>
      <GreetClass name="Bruce Lee" occupation="martial artist"/>
      <GreetClass name="Andy Williams" occupation="singer"/>
      <GreetClass name="Dolly Parton" occupation="singer"/> */}
     
    </div>
  );
}

export default App;
