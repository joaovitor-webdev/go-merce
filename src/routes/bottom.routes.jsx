import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Feed from "../pages/feed";
import Search from "../pages/search";
import TabBar from "../components/tabBar";
import AddPruduct from "../pages/addProduct";
import ShoppingCart from "../pages/shoppingCart";
import Profile from "../pages/profile";

const Tab = createBottomTabNavigator()

export default function BottomRoutes() {
    return (
        <Tab.Navigator tabBar={(props) => <TabBar {...props} />}>
            <Tab.Screen name="feed" component={Feed}/>
            <Tab.Screen name="search" component={Search}/>
            <Tab.Screen name="addProduct" component={AddPruduct}/>
            <Tab.Screen name="shoppingCart" component={ShoppingCart}/>
            <Tab.Screen name="profile" component={Profile}/>
        </Tab.Navigator>
    )
}
