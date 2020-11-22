import {useWindowDimensions} from 'react-native';

const MAX_MOBILE_DEVICE_WIDTH = 480;

export const useIsLayoutCompact = () => {
  const widowDimensions = useWindowDimensions();
  return widowDimensions.width < MAX_MOBILE_DEVICE_WIDTH;
};
