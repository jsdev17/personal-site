// Dependencies
import { h, Component }   from 'preact';
import Router             from 'preact-router';
import history            from './history';

// Import Main Components
import Header     from './components/Header'
import Nav        from './components/Nav/Nav';
import tabs       from './components/Nav/tabs.json';
import About      from './components/About';
import Skills     from './components/Skills';
import Books      from './components/Books';

/* 
  * @TODO
  * Incorporate blog (future)
*/

class App extends Component {
  render(props) {
    return (
      <div id='main'>
      {/* Components outside of router persist
      throughout all pages */}
        <Header />
        <Nav tabs={tabs} />

        <Router history={history}>
          <About  default path='/about'   />
          <Skills path='/skills'  />
          <Books  path='/books'   />
        </Router>
      </div>
    )
  }
}

export default App;