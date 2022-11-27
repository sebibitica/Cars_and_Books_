import { createDrawerNavigator } from '@react-navigation/drawer';
import { HomeScreen } from '../screens/HomeScreen';
import { CarTab } from './CarTabNavigator';
import { BookStack } from './BookStackNavigator';

const Drawer = createDrawerNavigator();

export function MainDrawer() {
    return (
        <Drawer.Navigator screenOptions={{ headerStyle: { backgroundColor: '#4681f0' } }}>
            <Drawer.Screen name="Home" component={HomeScreen} />
            <Drawer.Screen name="Cars" component={CarTab} />
            <Drawer.Screen name="Books" component={BookStack} />
        </Drawer.Navigator>
    );
}