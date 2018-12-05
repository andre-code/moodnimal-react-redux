import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faStroopwafel, faHeart, faShareAlt} from '@fortawesome/free-solid-svg-icons';
import Posts from './Container/Posts';
import UploadPhoto from './Container/UploadPhoto';
import MainMenu from './Components/MainMenu';
import './Styles/App.css'; 

library.add(faStroopwafel, faHeart, faShareAlt); 

class App extends Component {

  render() {
    return (
      <div className="App">       
        <section>
          <BrowserRouter>
            <div>
              <header className="App-header">
                <MainMenu></MainMenu>
                <h1>Moodnimal</h1>        
              </header>
              <Route exact path="/" component={Posts}/>
              <Route exact path="/upload" component={UploadPhoto}/>
            </div>
          </BrowserRouter>
        </section>
      </div>
    );
  }
}

export default App;