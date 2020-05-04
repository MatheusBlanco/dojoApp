import { useLinking } from '@react-navigation/native';
import { Linking } from 'expo';

export default function(containerRef) {
  return useLinking(containerRef, {
    prefixes: [Linking.makeUrl('/')],
    config: {
      Fotos: {
        path: 'fotos',
        screens: {
          Picture: 'picture',
          Message: 'message',
          Settings: 'settings',
        },
      },
    },
  });
}
