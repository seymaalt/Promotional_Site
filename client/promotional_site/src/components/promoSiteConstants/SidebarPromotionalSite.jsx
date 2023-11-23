import React, { useContext } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import EditTabPromotionalSite from '../Template1/EditTabPromotionalSite';
import GlobalContext from '../../context/GlobalContext.jsx';



export default function TemporaryDrawer({ state, setState, toggleDrawer, colorData }) {
  const { response } = useContext(GlobalContext);

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 500 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
    </Box>
  );

  return (
    <div className={`app-constainer ${state ? 'drawer-open' : ''}`}>
      {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
            <div>
              <EditTabPromotionalSite responseData={response} colorData={colorData}></EditTabPromotionalSite>
            </div>
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}