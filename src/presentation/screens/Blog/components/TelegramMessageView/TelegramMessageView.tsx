import React from 'react';
import {View} from 'react-native';
import {Caption} from 'react-native-paper';
import Html from 'react-native-render-html';
import {TelegramMessageViewProps} from './TelegramMessageViewProps';

export const TelegramMessageView = (props: TelegramMessageViewProps) => (
  <View {...props}>
    <Caption>
      {props.message.date.toLocaleString(undefined, {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      })}
    </Caption>
    <Html html={props.message.text} />
  </View>
);
