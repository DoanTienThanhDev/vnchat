import Icons from 'react-native-vector-icons/Ionicons';
import {COLORS} from 'themes';
const replaceSuffixPattern = /--(active|big|small|very-big)/g;

const icons = {
  'home-outline': [24, COLORS.primaryText],
  'home-sharp': [24, COLORS.primaryText],
  'chatbox-ellipses-outline': [24, COLORS.primaryText],
  'chatbox-ellipses': [24, COLORS.primaryText],
};
const iconsMap = {};

const iconsLoaded = new Promise(resolve => {
  new Promise.all(
    Object.keys(icons).map(iconName => {
      return Icons.getImageSource(
        iconName.replace(replaceSuffixPattern, ''),
        icons[iconName][0],
        icons[iconName][1],
      );
    }),
  ).then(sources => {
    Object.keys(icons).forEach((iconName, idx) => {
      iconsMap[iconName] = sources[idx];
    });
    resolve(true);
  });
});

export {iconsMap, iconsLoaded};
