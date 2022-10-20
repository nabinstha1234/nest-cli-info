import { Module } from '@nestjs/common';
import { MessagesController } from './messages.controller';

import { MessageService } from './message.service';
import { MessageRepository } from './message.repository';

@Module({
  controllers: [MessagesController],
  providers: [MessageService, MessageRepository],
})
export class MessagesModule {}
