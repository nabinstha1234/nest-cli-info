import { MessageRepository } from './message.repository';
export class MessageService {
  messagesRepo: MessageRepository;
  constructor() {
    this.messagesRepo = new MessageRepository();
  }

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
