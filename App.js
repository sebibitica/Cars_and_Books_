import { NavigationContainer } from '@react-navigation/native';
import { MainDrawer } from './navigators/MainDrawerNavigator';


export default function App() {
  return (
    <NavigationContainer>
      <MainDrawer />
    </NavigationContainer>
  );
}


