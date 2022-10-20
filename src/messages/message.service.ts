import { Injectable } from '@nestjs/common';
import { MessageRepository } from './message.repository';
@Injectable()
export class MessageService {
  constructor(public readonly messagesRepo: MessageRepository) {}

  async findOne(id: string) {
    return this.messagesRepo.findOne(id);
  }

  async findAll() {
    return this.messagesRepo.findAll();
  }

  async create(content: string) {
    return this.messagesRepo.create(content);
  }
}
