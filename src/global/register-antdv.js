import {
  Input,
  Button,
  Form,
  FormItem,
  Spin,
  ConfigProvider,
  Layout,
  LayoutContent,
  LayoutSider,
  LayoutHeader,
  Menu,
  MenuItem,
  SubMenu
} from "ant-design-vue";
import "ant-design-vue/dist/antd.css";
const components = [
  Input,
  Button,
  Form,
  FormItem,
  Spin,
  ConfigProvider,
  Layout,
  LayoutContent,
  LayoutSider,
  LayoutHeader,
  Menu,
  MenuItem,
  SubMenu
];

function registerElement(app) {
  for (const cpn of components) {
    app.component(cpn.name, cpn);
  }
}

export default registerElement;
