import React from 'react';
import { ActivityIndicator } from 'react-native';
import { Provider, useSelector } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { DarkTheme, DefaultTheme } from '@react-navigation/native';

import configureStore from './store';
import Navigator from './navigation';
import ThemeState from './models/reducers/theme';

const { persistor, store } = configureStore();

interface State {
  themeReducer: ThemeState;
}

const RootNavigation: React.FC = () => {
  const isDark = useSelector((state: State) => state.themeReducer.isDark);
  const theme = isDark ? DarkTheme : DefaultTheme;

  return <Navigator theme={theme} />;
};

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={<ActivityIndicator />} persistor={persistor}>
        <RootNavigation />
      </PersistGate>
    </Provider>
  );
};

export default App;
