import React, {FC} from 'react';
import {View, ViewProps} from 'react-native';
import {useIsLayoutCompact} from 'presentation/utils';
import {styles} from './styles';

export const ContentContainer: FC<ViewProps> = (props) => {
  const isLayoutCompact = useIsLayoutCompact();
  return (
    <View style={[styles.content, props.style]}>
      <View
        style={
          isLayoutCompact
            ? styles.compactContentContainer
            : styles.fullSizedContentContainer
        }
      >
        {props.children}
      </View>
    </View>
  );
};
