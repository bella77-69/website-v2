import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from './components/Nav/Nav'
import Loading from './components/Loading/Loading';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2500);
  }, []);

  return (
    <Router>
       {loading === false ? (
   <div className="App">
 <Nav />
    </div>
       ) : (
        <Loading />
       )}
    </Router>
 
  );
}

export default App;
