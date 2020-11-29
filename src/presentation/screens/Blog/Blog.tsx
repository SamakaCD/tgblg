import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import {Divider} from 'react-native-paper';
import {useRoute} from '@react-navigation/native';
import {ContentContainer} from 'presentation/components';
import {TelegramMessage, fetchTelegramChannelContents} from 'telegram';
import {TelegramMessageView} from './components';
import {BlogRouteProp} from './BlogRouteProp';
import {styles} from './styles';

export const Blog = () => {
  const route = useRoute<BlogRouteProp>();
  const [messages, setMessages] = useState<TelegramMessage[]>([]);

  useEffect(() => {
    fetchTelegramChannelContents(route.params.channelName).then(setMessages);
  }, [route]);

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
