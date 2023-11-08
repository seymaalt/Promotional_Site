import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

function ElevationScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};

export default function Navbar({ responseData }) {
  return (
    <React.Fragment>
      <CssBaseline />
      <ElevationScroll>
        <AppBar position="fixed" style={{ background: 'white' }}>
          <Toolbar>
            <Typography variant="h2" fontWeight="fontWeightBold" fontSize="30px" lineHeight="30.24px" color="black" sx={{ margin: 'auto' }}>
              {responseData.header.toUpperCase()}
            </Typography>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Toolbar />
      <Container>
        <Box sx={{ my: 2 }}>
          {/* Your other content here */}
        </Box>
      </Container>
    </React.Fragment>
  );
}