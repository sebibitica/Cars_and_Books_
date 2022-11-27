import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { BooksScreen } from "../screens/BooksScreen";
import { Book1 } from "../screens/BooksScreen";
import { Book2 } from "../screens/BooksScreen";

const Stack = createNativeStackNavigator();

export function BookStack() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Home_Book" component={BooksScreen} />
            <Stack.Screen name="book1" component={Book1} />
            <Stack.Screen name="book2" component={Book2} />
        </Stack.Navigator>
    );
}