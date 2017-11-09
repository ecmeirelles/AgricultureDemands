import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import store, { history } from './store';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { IntlProvider, addLocaleData } from 'react-intl';
import pt from 'react-intl/locale-data/pt';
import MarkedNeeds from './containers/market-needs';

import './index.css';

addLocaleData([...pt]);

const i18nData = {
  locale: 'pt-BR',
  formats: {
    number: {
      BRL: {
        style: 'currency',
        currency: 'BRL',
        minimumFractionDigits: 2
      }
    }
  }
};

const target = document.querySelector('#root');

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <MuiThemeProvider>
        <IntlProvider {...i18nData}>
          <div>
            <MarkedNeeds />
          </div>
        </IntlProvider>
      </MuiThemeProvider>
    </ConnectedRouter>
  </Provider>,
  target
);
