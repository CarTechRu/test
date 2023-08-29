import {
  Box, Link, Typography,
} from '@mui/material';

import routes from '../../routes/routes';

function NotFoundPage() {
  return (
    <Box mt={3} mb={2}>
      <Typography variant="subtitle1" fontSize="h3.fontSize">
        Кажется заблудились ¯\_(ツ)_/¯
      </Typography>
      <Typography variant="subtitle2">
        <Link href={routes.mainPage()} underline="hover" mt={3}>
          Вернуться в начало
        </Link>
      </Typography>
    </Box>
  );
}

export default NotFoundPage;
