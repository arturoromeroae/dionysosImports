import React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import Profile from './Profile';
import { useAuth } from '@context/authContext';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                <>{children}</>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const TabsAdmin = () => {
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const { user, loading } = useAuth();

    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs TabIndicatorProps={{ style: {backgroundColor: "#780725"}}} value={value} onChange={handleChange} aria-label="basic tabs example" centered>
                    <Tab icon={<AccountCircleIcon />} className='TabsContainer' label="My Profile" {...a11yProps(0)} />
                    <Tab icon={<AccessTimeIcon />} className='TabsContainer' label="History" {...a11yProps(1)} />
                    <Tab icon={<AccountBalanceWalletIcon />} className='TabsContainer' label="Account Payables" {...a11yProps(2)} />
                </Tabs>
            </Box>

            <TabPanel value={value} index={0}>
                <Profile email={user.email} name={user.name} />
            </TabPanel>
            <TabPanel className="itemsTab" value={value} index={1}>
                
            </TabPanel>
            <TabPanel className="itemsTab" value={value} index={2}>
                <div className="itemsTab">
                    
                </div>
            </TabPanel>
        </Box>
    )
}

export default TabsAdmin;