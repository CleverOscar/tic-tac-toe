import './App.css'

function App() {
  return (
    <div>
      <header>
        <p>
          Tic Tac Toe ReactJS App
        </p>
      </header>

      <Square />
    </div>
  );
}


function Square(){
  return(
    <div >
      <button className="square">X</button>
    </div>
  )
}

export default App;


