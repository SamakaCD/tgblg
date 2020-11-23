import {fetchTelegramChannelContentsWithIca} from './ica';

export const fetchTelegramChannelContents = (channelName: string) =>
  fetchTelegramChannelContentsWithIca(channelName);
