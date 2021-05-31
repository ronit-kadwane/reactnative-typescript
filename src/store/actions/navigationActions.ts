/*
 * Reducer actions related with navigation
 */
import NavigationService from '../../navigation/NavigationService';

export const navigateToHome = (params: any) => {
  NavigationService.navigate('Home', params);
};

export const navigateToForgotPassword = (params?: any) => {
  NavigationService.navigate('ForgotPassword', params);
};
