import { Table } from '@mui/material';
import styled from 'styled-components';

export const Content = styled(Table)`
  && {
    .MuiTableRow-root {
      .MuiTableCell-root {
        &:first-child {
          ${(props) => props.theme.typography.subtitle1};
          font-weight: 600;
        }
      }
    }
  }
`;
