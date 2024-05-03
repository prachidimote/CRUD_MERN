import { AppBar, Toolbar, styled } from '@mui/material';
import { Link } from 'react-router-dom';

//will pass AppBar as argument in styled component to apply css on it
const Header = styled(AppBar)`
background: #111111
`

const Tabs = styled(Link)`
font-size: 20px;
margin-right: 20px;
color: inherit;
text-decoration: none;
`

const Navbar = () => {
  return (
    <div>
        <Header position='static'>
            <Toolbar>
            <Tabs to ='/'>Code with Prachi</Tabs>
            <Tabs to ='/all'>View All Users</Tabs>
            <Tabs to ='/add'>Add Users</Tabs>
            </Toolbar>
        </Header>
    </div>
  )
}

export default Navbar