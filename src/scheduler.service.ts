import { HttpStatus, Injectable } from '@nestjs/common';
import { NotificationPayload, WorkoutSession } from './types';
import { ApiWrapper } from './utils/apiwrapper';
import { ApiStandardResponse } from 'src/types';

// At Spreetail, we used a service called "SendGrid" to handle our emails to vendors we worked with
// I would look into leveraging something here as well: https://sendgrid.com/resources/cases/nudgemail/
@Injectable()
export class SchedulerService {
  // our axios calls when running the app will always fail as this isn't an actual valid api url
  // this is just meant to demonstrate what it would look like.
  notificationURL = `https://sendGridURL_here?userKey=123`;

  // This function is 'async' as well as we'd be making an http call to the fictional notifications service (sendGrid/etc)
  public async sendNotifications(session: WorkoutSession): Promise<boolean> {
    const notificationsPayload: NotificationPayload = {
      email: 'email from user',
      sendDates: session.reminders,
    };
    // in a real scenario, we'd replace console log below with an actual log to new relic/etc.
    console.info(
      `sending payload to notifications service for session: ${session.title}`,
    );

    // below commented block is to demonstrate us calling send grid/etc with our reminder payload, which doesn't exist

    // const notificationResponse = await ApiWrapper.post<NotificationPayload>(
    //   this.notificationURL,
    //   notificationsPayload,
    // );

    // if (notificationResponse.status !== HttpStatus.OK) {
    //   // call to sendGrid failed, log here
    //   console.info(`notifications call failed for session: ${session.id}`);
    //   return false;
    // }
    console.info(`notifications call succeeded for session: ${session.id}`);
    return true;
  }
}
