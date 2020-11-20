import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen314744Navigator from '../features/BlankScreen314744/navigator';
import BlankScreen214711Navigator from '../features/BlankScreen214711/navigator';
import BlankScreen112182Navigator from '../features/BlankScreen112182/navigator';
import BlankScreen012181Navigator from '../features/BlankScreen012181/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen314744: { screen: BlankScreen314744Navigator },
BlankScreen214711: { screen: BlankScreen214711Navigator },
BlankScreen112182: { screen: BlankScreen112182Navigator },
BlankScreen012181: { screen: BlankScreen012181Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
