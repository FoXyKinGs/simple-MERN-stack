import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
// Pages
import Home from './pages/Home'
import About from './pages/About'
import Article from './pages/Article'
import ArticleList from './pages/ArticleList'
import NotFound from "./pages/NotFound"

// Components
import NavBar from './components/NavBar'

function App() {
  return (
    <Router>
      <NavBar />
      <div className="max-w-screen-md mx-auto pt-20">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/article-list" component={ArticleList} />
          <Route exact path="/article/:name" component={Article} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;