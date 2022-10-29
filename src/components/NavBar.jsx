
import { AppBar , Toolbar , Typography , styled} from '@mui/material';
import { NavLink } from 'react-router-dom';

const Header = styled(AppBar)`
    background : #111111;
`
const Tabs = styled(NavLink)`
    font-size: 20px;
    font-family : "Copperplate";
    margin-right : 20px;
    color : inherit;
    text-decoration : none;
`


const NavBar = () => {
    return (
       <Header position="static">
        <Toolbar>
            <Tabs to= "/">CRUD APPLICATION</Tabs>
            <Tabs to = "/all">ALL USERS</Tabs>
            <Tabs to = "/add">ADD USER</Tabs>
        </Toolbar>
       </Header>
    )
}

export default NavBar;