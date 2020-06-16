import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import { RoutingComponent } from './shared/components/routing/routing';
import { SideNavbar } from './shared/components/side-navbar/side-navbar';
import { Provider } from 'react-redux';
import { store } from './store';


class App extends React.Component {
   render() {
      return <Provider store={store}>
         <div className="layout">
            <Router>
               <SideNavbar />
               <div className="router-outlet">
                  <RoutingComponent />
               </div>
            </Router>
         </div>
      </Provider>
   }
}

export default App;

