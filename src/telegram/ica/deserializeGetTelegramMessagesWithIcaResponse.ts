import {TelegramMessage} from '../TelegramMessage';
import {GetTelegramMessagesWithIcaResponse} from './GetTelegramMessagesWithIcaResponse';

export const deserializeGetTelegramMessagesWithIcaResponse = (
  response: GetTelegramMessagesWithIcaResponse,
) => {
  return response.messages.map(
    (message) =>
      ({
        text: message.message,
        date: new Date(message.date * 1000),
      } as TelegramMessage),
  );
};
