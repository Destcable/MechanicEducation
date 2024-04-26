import { Create } from "react-admin";
import GroupCreateFields from "./GroupCreateFields";

const GroupCreate = () => { 
    return <Create>
        <GroupCreateFields />
    </Create>
};

export default GroupCreate;