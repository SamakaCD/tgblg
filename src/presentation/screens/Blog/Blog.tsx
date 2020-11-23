import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import {Divider} from 'react-native-paper';
import {ContentContainer} from 'presentation/components';
import {TelegramMessage, fetchTelegramChannelContents} from 'telegram';
import {TelegramMessageView} from './components';
import {styles} from './styles';

export const Blog = () => {
  const [messages, setMessages] = useState<TelegramMessage[]>([]);

  useEffect(() => {
    fetchTelegramChannelContents('ivansadovyi_til').then(setMessages);
  }, []);

  return (
    <ContentContainer>
      <View style={styles.messagesContainer}>
        {messages.map((message) => (
          <React.Fragment key={message.date.getTime()}>
            <TelegramMessageView message={message} />
            <Divider style={styles.divider} />
          </React.Fragment>
        ))}
      </View>
    </ContentContainer>
  );
};
