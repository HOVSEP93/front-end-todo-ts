import { Priority } from '../../createTaskForm/enums/Priority';

export const RenderPriorityColor = (priority: string): string => {
  switch (priority) {
    case Priority.normal:
      return 'grey.900';
    case Priority.low:
      return 'info.light';
    case Priority.high:
      return 'error.light';
    default:
      return 'grey.900';
  }
};
