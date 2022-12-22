import { isNotEmpty } from 'class-validator';
import { isUUID, length } from 'class-validator/types/decorator/decorators';

export class CreateNotificationBody {
  @isNotEmpty();
  @isUUID();
  recipientId: string;

  @isNotEmpty();
  @length(5, 240);
  content: string;
  
  @isNotEmpty();
  category: string;
}