import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Accueil from './accueil'; 
import Professeure from './professeure'; 
import Cours from './cours'; 

function CustomTabPanel(props) {
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
        <Box sx={{ p: 3, pt: 5 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = ( _ , newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', pt: 3 }}>
      <Box dir="rtl" sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab sx={{ pr: 3 }} className="font-arabic size" label="الرئيسة" />
          <Tab sx={{ pr: 3 }} className="font-arabic size" label="المسالك" />
          <Tab sx={{ pr: 3 }} className="font-arabic size" label="الأساتذة" />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <Accueil />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
      <Cours />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <Professeure />
      </CustomTabPanel>
    </Box>
  );
}