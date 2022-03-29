import React from 'react';
import '@styles/Tabs.scss';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Filters from './Filters';
import InputSearch from './InputSearch';
import Divider from '@mui/material/Divider';
import Select from './Select';
import LinearProgress from '@mui/material/LinearProgress';
import Stack from '@mui/material/Stack';

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

const TabsProducts = ({ tab1, tab2, tab3, tab4, loading }) => {
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs TabIndicatorProps={{ style: {backgroundColor: "#780725"}}} value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab className='TabsContainer' label="Wine" {...a11yProps(0)} />
                    <Tab className='TabsContainer' label="Liquor" {...a11yProps(1)} />
                    <Tab className='TabsContainer' label="Beer" {...a11yProps(2)} />
                    <Tab className='TabsContainer' label="Foods" {...a11yProps(3)} />
                </Tabs>
            </Box>

            <InputSearch placeHolder="Search" />
            <TabPanel value={value} index={0}>
                <div className="itemsTab">
                    <Filters filterTitle='Filter Wines'>
                        <Select label='Country' />
                        <Select label='Region' />
                        <Select label='Producer' />
                        <Select label='Size' />
                    </Filters>
                    <Divider className='dividerTabs' orientation="vertical" flexItem />
                    
                    <div className='itemsProducts'>
                        {tab1}
                        <Stack className='loadingProductsContainer' spacing={2}>
                            {loading && <LinearProgress color="inherit" className='loadingProductsBar' />}
                        </Stack>
                    </div>
                </div>
            </TabPanel>
            <TabPanel className="itemsTab" value={value} index={1}>
                <div className="itemsTab">
                    <Filters filterTitle='Filter Liquors'>
                        <Select label='Country' />
                        <Select label='Region' />
                        <Select label='Producer' />
                        <Select label='Size' />
                    </Filters>
                    <Divider className='dividerTabs' orientation="vertical" flexItem />
                    {tab2}
                </div>
            </TabPanel>
            <TabPanel className="itemsTab" value={value} index={2}>
                <div className="itemsTab">
                    <Filters filterTitle='Filter Beers'>
                        <Select label='Country' />
                        <Select label='Region' />
                        <Select label='Producer' />
                        <Select label='Size' />
                    </Filters>
                    <Divider className='dividerTabs' orientation="vertical" flexItem />
                    {tab3}
                </div>
            </TabPanel>
            <TabPanel className="itemsTab" value={value} index={3}>
                <div className="itemsTab">
                    <Filters filterTitle='Filter Foods'>
                        <Select label='Country' />
                        <Select label='Region' />
                        <Select label='Producer' />
                        <Select label='Size' />
                    </Filters>
                    <Divider className='dividerTabs' orientation="vertical" flexItem />
                    {tab4}
                </div>
            </TabPanel>
        </Box>
    )
}

export default TabsProducts;