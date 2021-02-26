import { LoggerService } from '@nestjs/common'

export class MyLogger implements LoggerService {
  public log (message: string) {
    /* your implementation */
  }

  public error (message: string, trace: string) {
    /* your implementation */
  }

  public warn (message: string) {
    /* your implementation */
  }

  public debug (message: string) {
    /* your implementation */
  }

  public verbose (message: string) {
    /* your implementation */
  }
}
