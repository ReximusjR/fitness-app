import { CadenceEnum } from './CadenceEnum';
import { Routine } from './Routine';

export interface WorkoutSession {
  id?: number;
  userId: number;
  title: string;
  routine?: Routine;
  startTime: Date;
  duration: number;
  frequency: CadenceEnum;
  reminders: number[]; // list of numbers, which represent how many minutes before the startTime to fire notification
  notes: string;
}
