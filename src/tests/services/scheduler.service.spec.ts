import { Test, TestingModule } from '@nestjs/testing';
import { SchedulerService } from '../../scheduler.service';
import { fakeWorkoutSession } from '../testData';
import { ApiWrapper } from '../../utils/apiwrapper';
import { HttpStatus } from '@nestjs/common';

describe('SchedulerService', () => {
  let fakePostResult = { body: {}, status: HttpStatus.OK };

  let schedulerService: SchedulerService;
  let apiSpy = jest.spyOn(ApiWrapper, 'post');

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      providers: [SchedulerService],
    }).compile();

    schedulerService = app.get(SchedulerService);
  });

  describe('sendNotifications', () => {
    it('should return true when call to notifications succeed', async () => {
      //given mocked data
      apiSpy.mockImplementation().mockResolvedValue(fakePostResult);
      //when
      const result = await schedulerService.sendNotifications(
        fakeWorkoutSession,
      );

      //then
      expect(result).toEqual(true);
    });

    it('should return false when call to notifications succeed', async () => {
      //given mocked data
      fakePostResult.status = HttpStatus.NOT_FOUND;
      apiSpy.mockImplementation().mockResolvedValue(fakePostResult);
      //when
      const result = await schedulerService.sendNotifications(
        fakeWorkoutSession,
      );

      //then
      expect(result).toEqual(false);
    });
  });
});
