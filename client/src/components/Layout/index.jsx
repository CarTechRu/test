import { Outlet } from 'react-router-dom';
import {
  Box, Container, Divider, Typography,
} from '@mui/material';

export function Layout() {
  return (
    <Container>
      <Box mt={3} mb={2}>
        <Typography variant="h1" fontSize="h3.fontSize">
          Тестовое приложение Аукционы
        </Typography>
      </Box>

      <Box mb={3}>
        <Divider />
      </Box>
      <Outlet />
    </Container>
  );
}

export default Layout;
