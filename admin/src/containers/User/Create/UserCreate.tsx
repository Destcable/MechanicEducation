import { Create } from "react-admin";
import UserCreateFields from "./UserCreateFields";

const UserCreate = () => { 
    return( 
        <Create>
            <UserCreateFields />
        </Create>
    );
};

export default UserCreate;