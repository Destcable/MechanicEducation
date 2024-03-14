import { Admin, Resource } from "react-admin";
import dataProvider from "./dataProvider/dataProvider";
import { TopicCreate, TopicList, TopicName } from "./containers/Topic";

const App = () => (
  // @ts-ignore
  <Admin dataProvider={dataProvider}>
    <Resource 
      name={TopicName} 
      list={TopicList}
      create={TopicCreate}
    />
  </Admin>
);

export default App;