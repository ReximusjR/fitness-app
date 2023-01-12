import { Injectable } from '@nestjs/common';
import { WorkoutSession } from './types';

@Injectable()
export class SessionService {
  sessionArray: WorkoutSession[] = [];

  // I made both these functions 'async' as if we were interacting with an actual DB via prisma, sequelize, type-orm, etc
  public async createWorkoutSession(
    session: WorkoutSession,
  ): Promise<WorkoutSession> {
    //when creating a session, the title should default to the routine's title if present
    if (session?.routine) {
      session.title = session.routine.title;
    }

    // in a real scenario, we'd replace console log below with an actual log to new relic/etc.
    console.info(`inserting WorkoutSession: ${session.title}`);
    this.sessionArray.push(session);
    //TODO -- call notification service from here
    return session;
  }

  public async getWorkoutSessionById(id: number): Promise<WorkoutSession> {
    // in a real scenario, we'd replace console log below with an actual log to new relic/etc.
    console.info(`attempting to retrieve WorkoutSession by id: ${id}`);

    const session = await this.sessionArray.find(
      (session) => session.id === id,
    );
    return session;
  }
}
