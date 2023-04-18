import React, { FC, ReactElement } from 'react';
import { ITask } from './interfaces/ITask';
import { Box } from '@mui/material';
import { TaskDescription } from './_taskDescription';
import { TaskFooter } from './_taskFooter';
import { TaskHeader } from './_taskHeader';
import { Status } from '../createTaskForm/enums/Status';
import { Priority } from '../createTaskForm/enums/Priority';
import PropTypes from 'prop-types';
import { renderPriorityBorderColor } from './helpers/renderPriorityBorderColor';

export const Task: FC<ITask> = (props): ReactElement => {
  const {
    title = 'Test title',
    date = new Date(),
    description = 'A very simple test description',
    priority = Priority.normal,
    status = Status.completed,
    onStatusChange = (e) => console.log(e),
    onClick = (e) => console.log(e),
  } = props;

  return (
    <Box
      display="flex"
      width="100%"
      justifyContent="flex-start"
      flexDirection="column"
      mb={2}
      p={4}
      sx={{
        width: '100%',
        backgroundColor: 'background.paper',
        borderRadius: '8px',
        border: '1px solid',
        borderColor: renderPriorityBorderColor(priority),
      }}
    >
      <TaskHeader title={title} date={date} />
      <TaskDescription description={description} />
      <TaskFooter onClick={onClick} onStatusChange={onStatusChange} />
    </Box>
  );
};

Task.propTypes = {
  title: PropTypes.string,
  date: PropTypes.instanceOf(Date),
  description: PropTypes.string,
  priority: PropTypes.oneOf([Priority.low, Priority.normal, Priority.high]),
  status: PropTypes.string,
  onStatusChange: PropTypes.func,
  onClick: PropTypes.func,
};
