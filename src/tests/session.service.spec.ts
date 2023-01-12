import { HttpStatus } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { SessionService } from '../session.service';
import { fakeWorkoutSession } from './testData';

describe('SessionController', () => {
  let sessionService: SessionService;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      providers: [SessionService],
    }).compile();

    sessionService = app.get(SessionService);
  });

  describe('createWorkoutSession', () => {
    it('should add a session to static data store', async () => {
      //when
      const result = await sessionService.createWorkoutSession(
        fakeWorkoutSession,
      );

      //then
      expect(result).toEqual(fakeWorkoutSession);
      expect(sessionService.sessionArray).toHaveLength(1);
    });
  });
  describe('getWorkoutSessionById', () => {
    it('should retrieve session from static data store', async () => {
      //given
      sessionService.sessionArray.push(fakeWorkoutSession);
      // when
      const result = await sessionService.getWorkoutSessionById(1);

      //then
      expect(result).toEqual(fakeWorkoutSession);
    });

    it('should return undefined from static data store', async () => {
      //given
      sessionService.sessionArray.push(fakeWorkoutSession);
      // when
      const result = await sessionService.getWorkoutSessionById(999);

      //then
      expect(result).toEqual(undefined);
    });
  });
});
