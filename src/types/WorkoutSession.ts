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
  reminders: Date[]; // list of dates, which represent when to the fire notification(s)
  notes: string;
}
