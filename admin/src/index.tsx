import { Admin, Resource } from "react-admin";
import dataProvider from "./dataProvider/dataProvider";
import { TopicCreate, TopicList, TopicName } from "./containers/Topic";
import { ThemeCreate, ThemeList, ThemeName } from "./containers/Theme";

const App = () => (
  // @ts-ignore
  <Admin dataProvider={dataProvider}>
    <Resource name={TopicName} list={TopicList} create={TopicCreate} />
    <Resource name={ThemeName} list={ThemeList} create={ThemeCreate} />
  </Admin>
);

export default App;