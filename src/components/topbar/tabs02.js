import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import HomePage from './firstpage';
import ChatPage from './chatpage';
import FriendPage from './friendpage';
import MyPage from './mypage';

const RouteConfigs = {
    HomePage: HomePage,
    ChatPage: ChatPage,
    FriendPage: FriendPage,
    MyPage: MyPage,
}

const TabNavigatorConfig = {
    initialRouteName: 'HomePage',
    tabBarPosition: 'bottom',
    animationEnabled: true,
    lazy: true,
    // tabBarComponent: props => (<CustomTabbarComponent />)
}

const TabNavigator = createBottomTabNavigator(
    RouteConfigs,
    TabNavigatorConfig
)

export default createAppContainer(TabNavigator)