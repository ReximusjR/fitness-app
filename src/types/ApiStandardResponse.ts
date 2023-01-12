import { HttpStatus } from '@nestjs/common';

export interface ApiStandardResponse<T> {
  body: T;
  status: HttpStatus;
}
