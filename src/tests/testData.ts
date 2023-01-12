import { WorkoutSession } from '../types';
import { Routine, RoutineStatus } from '../types/Routine';
import { CadenceEnum } from '../types/CadenceEnum';

export const fakeRoutine: Routine = {
  title: 'yay-title',
  status: RoutineStatus.Official,
  upvotes: 123,
  userViews: 14,
  userCompletions: 2,
  dateCreated: new Date('2023-01-01T01:23:00'),
  lastModified: new Date('2023-01-09T01:23:00'),
};

export const fakeWorkoutSession: WorkoutSession = {
  id: 1,
  userId: 12,
  title: 'yay-title',
  routine: fakeRoutine,
  startTime: new Date(),
  duration: 5000,
  frequency: CadenceEnum.Monthly,
  reminders: [60, 30],
  notes: 'this is an awesome workout',
};
