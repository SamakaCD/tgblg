import {ViewProps} from 'react-native';
import {TelegramMessage} from 'telegram';

export interface TelegramMessageViewProps extends ViewProps {
  message: TelegramMessage;
}
