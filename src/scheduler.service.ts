import { Injectable } from '@nestjs/common';
import { WorkoutSession } from './types';

@Injectable()
export class SchedulerService {
  // This function is 'async' as well as we'd be making an http call to the fictional notifications service (sendGrid?)
  public async sendNotifications(
    session: WorkoutSession,
  ): Promise<WorkoutSession> {
    // in a real scenario, we'd replace console log below with an actual log to new relic/etc.
    console.info(`sending payload to notifications service: ${session.userId}`);
    return session;
  }
}
