import { Module, ValidationPipeOptions } from '@nestjs/common';

@Module({})
export class CommonModule {
  exports: [ValidationPipeOptions];
}
