import { Controller, Get, HttpStatus, Post } from '@nestjs/common';
import { Body } from '@nestjs/common/decorators';
import { Param } from '@nestjs/common/decorators/http/route-params.decorator';
import { SessionService } from './session.service';
import { ApiStandardResponse, WorkoutSession } from './types';

@Controller('sessions')
export class SessionController {
  constructor(private readonly sessionService: SessionService) {}

  @Post()
  async createWorkoutSession(
    @Body() createSessionBody: WorkoutSession,
  ): Promise<ApiStandardResponse> {
    // in a production scenario, we'd replace console log below with an actual log to new relic/etc.
    console.log(`Entered createWorkoutSession ${createSessionBody.title}`);
    const createdSession = await this.sessionService.createWorkoutSession(
      createSessionBody,
    );

    console.log(`Created Workout Session ${createdSession.title}`);
    return { status: HttpStatus.CREATED, body: createdSession };
  }

  @Get(':id')
  async getWorkoutSessionById(
    @Param('id') sessionId: string,
  ): Promise<ApiStandardResponse> {
    // in a production scenario, we'd replace console log below with an actual log to new relic/etc.
    console.log(`Entered getWorkoutSessionById ${JSON.stringify(sessionId)}`);
    const session = await this.sessionService.getWorkoutSessionById(+sessionId);
    if (session) {
      console.log(`Retrieved session: ${sessionId}`);
      return { status: HttpStatus.CREATED, body: session };
    } else {
      console.log(`Error retrieving session: ${sessionId}`);
      return {
        status: HttpStatus.NOT_FOUND,
        body: 'Invalid session Id provided',
      };
    }
  }
}
