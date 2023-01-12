import { Test, TestingModule } from '@nestjs/testing';
import { SessionController } from '../session.controller';
import { AppService } from '../app.service';
import { WorkoutSession } from 'src/types';
import { fakeWorkoutSession } from './testData';
import { HttpStatus } from '@nestjs/common';
import { SessionService } from '../session.service';

describe('SessionController', () => {
  let sessionController: SessionController;
  let sessionService: SessionService;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [SessionController],
      providers: [SessionService],
    }).compile();

    sessionController = app.get<SessionController>(SessionController);
    sessionService = app.get(SessionService);
    // sessionService = new SessionService();
    // catsController = new CatsController(catsService);
  });

  describe('createWorkoutSession', () => {
    jest
      .spyOn(SessionService.prototype, 'createWorkoutSession')
      .mockImplementation()
      .mockResolvedValue(fakeWorkoutSession);

    it('should properly create a session on POST', async () => {
      const result = await sessionController.createWorkoutSession(
        fakeWorkoutSession,
      );
      expect(result).toEqual({
        status: HttpStatus.CREATED,
        body: fakeWorkoutSession,
      });
    });
  });
  describe('getWorkoutSessionById', () => {
    let getSpy = jest.spyOn(SessionService.prototype, 'getWorkoutSessionById');

    it('should properly retrieve a session on GET', async () => {
      getSpy.mockImplementation().mockResolvedValue(fakeWorkoutSession);
      const result = await sessionController.getWorkoutSessionById('1');
      expect(result).toEqual({
        status: HttpStatus.CREATED,
        body: fakeWorkoutSession,
      });
    });

    it('should properly yield 404 not found for invalid session on GET', async () => {
      getSpy.mockImplementation().mockResolvedValue(undefined);

      const result = await sessionController.getWorkoutSessionById('1');
      expect(result).toEqual({
        status: HttpStatus.NOT_FOUND,
        body: 'Invalid session Id provided',
      });
    });
  });
});
