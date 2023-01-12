import { HttpStatus } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { SchedulerService } from '../../scheduler.service';
import { SessionController } from '../../session.controller';
import { SessionService } from '../../session.service';
import { fakeWorkoutSession } from '../testData';

describe('SessionController', () => {
  let sessionController: SessionController;
  let sessionService: SessionService;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [SessionController],
      providers: [SessionService, SchedulerService],
    }).compile();

    sessionController = app.get<SessionController>(SessionController);
    sessionService = app.get(SessionService);
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
