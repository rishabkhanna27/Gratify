import React from 'react';
import {Video} from './components/Video/Video'
import {Music} from './components/Audio/Music'
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import {Navigation} from './components/Navbar/Navigation'
class App extends React.Component {

  render(){
  return (

    <BrowserRouter>
    <Navigation/>
    <div className="App">
      <header className="App-header">
       
       <Switch>
       <Route path='/' component={Music} exact/>
         <Route path='/Video' component={Video}  />
       </Switch>
      </header>
    </div>
    </BrowserRouter>
  );
}
}
export default App;
