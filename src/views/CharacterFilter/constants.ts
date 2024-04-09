import {action} from '@storybook/addon-actions';

export const selectorsStatus = [
  {id: 1, options: 'Alive', onPressLeft: action('Option 1 pressed')},
  {id: 2, options: 'Dead', onPressLeft: action('Option 2 pressed')},
  {id: 3, options: 'Unknown', onPressLeft: action('Option 3 pressed')},
];

export const selectorsGender = [
  {id: 4, options: 'Female', onPressLeft: action('Option 4 pressed')},
  {id: 5, options: 'Male', onPressLeft: action('Option 5 pressed')},
  {id: 6, options: 'Genderless', onPressLeft: action('Option 6 pressed')},
  {id: 7, options: 'Unknown', onPressLeft: action('Option 7 pressed')},
];
