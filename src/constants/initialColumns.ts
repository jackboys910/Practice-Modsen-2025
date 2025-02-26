import { theme } from './styles/theme/theme';

const initialColumns = [
  { id: 1, title: 'To Do', color: theme.colors.MEDIUM_PRIORITY, tasks: [], isDefaultTitle: false },
  { id: 2, title: 'In Progress', color: theme.colors.OK_PRIORITY, tasks: [], isDefaultTitle: false },
  { id: 3, title: 'Done', color: theme.colors.LOW_PRIORITY, tasks: [], isDefaultTitle: false },
];

export default initialColumns;
