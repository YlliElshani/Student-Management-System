import './App.css';

function App() {
  return (
    <div className="App">
      <main className="App-Main">
        <form>
          <label>Email</label>
          <input type="text" placeholder="Enter your email..."></input>
          <label>Password</label>
          <input type="password" placeholder="Enter your password..."></input>
          <input className="submit" type="submit"></input>
        </form>
      </main>
      <footer className="App-Footer"></footer>
    </div>
  );
}

export default App;