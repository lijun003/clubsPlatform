import Taro, { Component, Config } from "@tarojs/taro";
import { Provider } from "@tarojs/redux";

import Home from "./pages/home";

import configStore from "./store";

import "./app.scss";
import "@assets/font/iconfont.css";

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

const store = configStore();

class App extends Component {
  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    pages: ["pages/home/index", "pages/clubs/index", "pages/user/index"],
    window: {
      backgroundTextStyle: "light",
      navigationBarBackgroundColor: "#fff",
      navigationBarTitleText: "WeChat",
      navigationBarTextStyle: "black"
    },
    tabBar: {
      color: "#626567",
      selectedColor: "#6190E8",
      backgroundColor: "#FBFBFB",
      borderStyle: "white",
      list: [
        {
          pagePath: "pages/home/index",
          text: "首页",
          iconPath: "./assets/images/tabbar/home.png",
          selectedIconPath: "./assets/images/tabbar/home_selected.png"
        },
        {
          pagePath: "pages/clubs/index",
          text: "俱乐部",
          iconPath: "./assets/images/tabbar/club.png",
          selectedIconPath: "./assets/images/tabbar/club_selected.png"
        },
        {
          pagePath: "pages/user/index",
          text: "我的",
          iconPath: "./assets/images/tabbar/user.png",
          selectedIconPath: "./assets/images/tabbar/user_selected.png"
        }
      ]
    }
  };

  componentDidMount() {}

  componentDidShow() {}

  componentDidHide() {}

  componentDidCatchError() {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render() {
    return (
      <Provider store={store}>
        <Home />
      </Provider>
    );
  }
}

Taro.render(<App />, document.getElementById("app"));
