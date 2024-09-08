import { Link } from "react-router-dom";
import { Sidebar as SidebarReact, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { MdDashboard } from "react-icons/md";
import { GiOpenBook } from "react-icons/gi";
import { FaChalkboardTeacher } from "react-icons/fa";

export const  Sidebar = () => {
    return <SidebarReact>
        <Menu>
            <MenuItem 
                component={<Link to="/dashboard" />} 
                icon={<MdDashboard size='22px'/>}
            > 
                Главная 
            </MenuItem>

            <MenuItem 
                component={<Link to="/main" />}
                icon={<GiOpenBook size='22px'/>}
            > 
                Предметы 
            </MenuItem>

            <MenuItem 
                component={<Link to="/teachers" />}
                icon={<FaChalkboardTeacher size='22px'/>}
            > 
                Преподаватели 
            </MenuItem>
            <SubMenu label="Charts">
                <MenuItem> Pie charts </MenuItem>
                <MenuItem> Line charts </MenuItem>
            </SubMenu>
            <MenuItem> Сообщения </MenuItem>
        </Menu>
    </SidebarReact>;
};