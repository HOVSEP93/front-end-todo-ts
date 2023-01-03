import { ITaskApi } from '../interfaces/ITaskApi';
import { TaskCounterStatusType } from '../../taskCounter/interfaces/ITaskCounter';

export const countTasks = (
  tasks: ITaskApi[],
  status: TaskCounterStatusType,
): number => {
  if (!Array.isArray(tasks)) {
    return 0;
  }
  /* Filtering the tasks array and returning a new array with the tasks that have the same status as
   the status parameter. */
  const totalTasks = tasks.filter((task) => {
    return task.status === status;
  });

  return totalTasks.length;
};
