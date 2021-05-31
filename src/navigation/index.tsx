import React from 'react';
import { Button, StatusBar } from 'react-native';
import { NavigationContainer, Theme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useSelector } from 'react-redux';

import Auth from '../screens/Auth';
import Notes from '../screens/Notes';
import CreatNote from '../screens/CreateNote';
import { LoginState } from '../models/reducers/login';

import NavigationService from './NavigationService';

const Stack = createStackNavigator();
const LoggedInStack = createStackNavigator();

interface lState {
  loginReducer: LoginState;
}

interface NavigatorProps {
  theme: Theme;
}

/** Stack of authorized screen */
const LoggedInNavigator = () => (
  <LoggedInStack.Navigator>
    <Stack.Screen
      name="Notes"
      component={Notes}
      options={({ navigation }) => ({
        headerRight: () => (
          <Button
            color="#F6820D"
            onPress={() => navigation.navigate('Create Note')}
            title="Add Note"
          />
        ),
      })}
    />
    <Stack.Screen name="Create Note" component={CreatNote} />
  </LoggedInStack.Navigator>
);

const Navigator: React.FC<NavigatorProps> = (props: NavigatorProps) => {
  const { theme } = props;

  const isLoggedIn = useSelector((state: lState) => state.loginReducer.isLoggedIn);

  return (
    <NavigationContainer>
      <StatusBar barStyle={theme.dark ? 'light-content' : 'dark-content'} />

      <Stack.Navigator headerMode="none">
        {isLoggedIn ? (
          <Stack.Screen name="Notes" component={LoggedInNavigator} />
        ) : (
          <Stack.Screen
            name="Auth"
            component={Auth}
            options={{
              animationTypeForReplace: isLoggedIn ? 'push' : 'pop',
            }}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
