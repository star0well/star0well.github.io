import {Input, Button, Form, Spin, ConfigProvider, Layout, Menu} from "ant-design-vue";
// import "ant-design-vue/dist/antd.css";
const components = [Input, Button, Form, Spin, ConfigProvider, Layout, Menu];

function registerElement(app) {
  for (const cpn of components) {
    app.use(cpn);
  }
}

export default registerElement;
