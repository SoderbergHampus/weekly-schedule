import { useState } from 'react';

type TaskTime = {
  day:
    | 'Monday'
    | 'Tuesday'
    | 'Wednesday'
    | 'Thursday'
    | 'Friday'
    | 'Saturday'
    | 'Sunday';
  startTime: string;
  endTime: string;
};

type TaskOptions = {
  name: string;
  description: string;
  time: TaskTime;
  subTasks: TaskOptions[];
};

const TaskComponent = () => {
  const [time, setTime] = useState<TaskTime>();
  const [taskOptions, setTaskOptions] = useState<TaskOptions>();

  return (
    <>
      <div className='container task--container'>Task</div>
    </>
  );
};

export default TaskComponent;
