import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Car1 } from "../screens/CarsScreen";
import { Car2 } from "../screens/CarsScreen";
import { Car3 } from "../screens/CarsScreen";
import { Ionicons } from '@expo/vector-icons'

const Tab = createBottomTabNavigator();


export function CarTab() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarStyle: { backgroundColor: "#b6c4de" },
                tabBarLabelStyle: { color: 'black', fontSize: 12 },
                tabBarIcon: ({ focused }) => {
                    let icoName;

                    if (route.name === "Logan") {
                        icoName = focused ? "car" : "car-outline";
                    } else if (route.name === "Audi A7") {
                        icoName = focused ? "car" : "car-outline";
                    } else if (route.name === "Porche Taycan") {
                        icoName = focused ? "car" : "car-outline";
                    }

                    return <Ionicons name={icoName} color="black" size={40} />
                },
            })}
        >
            <Tab.Screen name="Logan" component={Car1} />
            <Tab.Screen name="Audi A7" component={Car2} />
            <Tab.Screen name="Porche Taycan" component={Car3} />
        </Tab.Navigator>
    );
}