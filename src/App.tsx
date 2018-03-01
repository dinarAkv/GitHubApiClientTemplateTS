
import './Styles/Style';
import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { Router, Route, hashHistory, browserHistory } from 'react-router';
import { syncHistoryWithStore, routerMiddleware } from 'react-router-redux';


import UserFindContainer from './containers/UserFindContainer.tsx';
import { About } from './components/About/About.tsx';
import reducer from './reducers';
import { indexUrl, aboutUrl } from './constants/appUrls';


const browserHistoryMiddlware = routerMiddleware(browserHistory);
const store = createStore(
                          reducer,
                          composeWithDevTools(applyMiddleware(thunk, browserHistoryMiddlware))
);
const history = syncHistoryWithStore(hashHistory, store);




ReactDOM.render(
        <Provider store={store}>
          <Router history={history}>
              <Route path={indexUrl} component={UserFindContainer} />
              <Route path={aboutUrl} component={About} />
          </Router>
        </Provider>,
    document.getElementById("app")
);
