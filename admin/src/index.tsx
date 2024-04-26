import { Admin, Resource } from "react-admin";
import dataProvider from "./dataProvider/dataProvider";
import { TopicCreate, TopicList, TopicName } from "./containers/Topic";
import { ThemeCreate, ThemeList, ThemeName } from "./containers/Theme";
import { TaskCreate, TaskList, TaskName } from "./containers/Task";
import { GroupCreate, GroupList, GroupName } from "./containers/Group";
import { UserCreate, UserList, UserName } from "./containers/User";

const App = () => (
  // @ts-ignore
  <Admin dataProvider={dataProvider}>
    <Resource name={GroupName} list={GroupList} create={GroupCreate}/>
    <Resource name={UserName} list={UserList} create={UserCreate} />
    <Resource name={TopicName} list={TopicList} create={TopicCreate} />
    <Resource name={ThemeName} list={ThemeList} create={ThemeCreate} />
    <Resource name={TaskName} list={TaskList} create={TaskCreate} />
  </Admin>
);

export default App;