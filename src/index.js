import React from 'react';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import './configs/ReactotronConfig';
import Routes from './routes';
import NavigationService from './services/navigation';

import store from './store';

export default function App() {
  return (
    <>
      <Provider store={store}>
        <StatusBar barStyle="light-content" backgroundColor="#7159c1" />
        <Routes
          ref={navigationRef => NavigationService.setNavigator(navigationRef)}
        />
      </Provider>
    </>
  );
}
