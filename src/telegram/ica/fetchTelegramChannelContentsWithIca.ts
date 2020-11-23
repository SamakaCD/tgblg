import {fetchWithCorsAnywhere} from 'utils';
import {deserializeGetTelegramMessagesWithIcaResponse} from './deserializeGetTelegramMessagesWithIcaResponse';

export const fetchTelegramChannelContentsWithIca = async (
  channelName: string,
) => {
  const url = `https://tg.i-c-a.su/json/${channelName}`;
  const request = await fetchWithCorsAnywhere(url, {
    headers: {
      origin: 'https://rsshub.app',
    },
  });
  const responseBody = await request.json();
  const messages = deserializeGetTelegramMessagesWithIcaResponse(responseBody);
  return messages.filter((message) => message.text);
};
