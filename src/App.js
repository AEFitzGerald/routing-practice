import './App.css';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Info from './components/Info';


//conditionally showing components based on routes
//what routes are given?
//react routing needs react
//what if you have a million users?
//you need a route parameter
//what if the route has multiple params?
function App() {
    return (
        <div className="d-flex mx-auto">
        <BrowserRouter>
            <Switch>
                    <Route exact path = "/">
                        <div className ="mx-auto mt-2">
                            <h1 className = "display-3 mt-3">Welcome to the Homepage</h1>
                        </div>
                        <div className = "mx-auto mt-2">
                            <Link to="/about" className = "link" >About</Link>
                            <Link to="/contact" className = "link">Contact</Link>
                        </div>
                    </Route>
                    <Route exact path = "/about">
                        <div className ="mx-auto mt-2">
                            <h1 className = "display-4">About</h1>
                        </div>
                        <div className = "mx-auto mt-2">
                            <Link to="/" className = "link">Home</Link>
                        </div>
                    </Route>
                    <Route exact path = "/contact">
                        <div className = "mx-auto mt-2">
                            <h1 className = "display-4">Contact</h1>
                        </div>
                        <div className = "mx-auto mt-2">
                            <Link to="/"className = "link">Home</Link>
                        </div>

                    </Route>
                    <Route exact path ="/info/:id">
                        <div className = "mx-auto mt-2">
                            <Info></Info> 
                        </div>
                        <div className = "mx-auto mt-2">    
                            <Link to="/" className = "link">Home</Link> 
                        </div>   
                    </Route>
                    <Route exact path ="/info/:id/:color/:height/:greeting">
                        <div className = "mx-auto mt-2">
                            <Info></Info> 
                        </div>
                        <div className = "mx-auto mt-2">
                            <Link to="/" className = "link">Home</Link> 
                        </div>       
                    </Route>
        </Switch>
        </BrowserRouter>
        </div>
    );
}

export default App;
