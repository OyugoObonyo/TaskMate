import { ReactElement, FC } from 'react';
import { Grid } from '@mui/material';
import { Sidebar } from '../../components/sidebar/Sidebar';
import { TaskArea } from '../../components/taskArea/Taskarea';

export const Dashboard: FC = (): ReactElement => {
  return (
    <Grid container minHeight="100vh" p={0} m={0}>
      <TaskArea />
      <Sidebar />
    </Grid>
  );
};
