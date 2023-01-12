import { HttpStatus } from '@nestjs/common';

export interface ApiStandardResponse {
  body: any;
  status: HttpStatus;
}
