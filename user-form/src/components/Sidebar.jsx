import { Link } from 'react-router-dom';
import { List, ListItem, ListItemText, Paper } from '@mui/material';
import '../styles/Sidebar.css';

const Sidebar = () => {
  const menuItems = [
    { text: 'Personal Details', path: '/home/personal' },
    { text: 'Address', path: '/home/address' },
    { text: 'Employment History', path: '/home/employment' },
    { text: 'Contact Details', path: '/home/contact' },
  ];

  return (
    <Paper className="sidebar">
      <List>
        {menuItems.map((item) => (
          <ListItem
            button
            component={Link}
            to={item.path}
            key={item.path}
          >
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
};

export default Sidebar;