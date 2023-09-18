import * as S from './style';
import { PowerSettingsNew } from '@mui/icons-material';
import { IconButton, Stack } from '@mui/material';
import { FC } from 'react';

const Header: FC = () => {
  const handleLogout = () => {
    console.log('logout');
  };

  return (
    <>
      <S.Header>
        <Stack direction="row" spacing={8}>
          <IconButton onClick={handleLogout}>
            <PowerSettingsNew />
          </IconButton>
        </Stack>
      </S.Header>
    </>
  );
};

export default Header;
