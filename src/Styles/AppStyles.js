import {StyleSheet} from "react-native";
import {Dimensions, Platform, PixelRatio} from 'react-native';

const {
  width: SCREEN_WIDTH,
  height: SCREEN_HEIGHT,
} = Dimensions.get('window');

const scale = SCREEN_WIDTH / 414;

export function normalize(size) {
  const newSize = size * scale;
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize))
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2
  }
}

export default StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  selectModal: {
    bottom: 0,
    position: 'absolute',
    zIndex: 1
  },
  header: {
    height: '30%',
    width: '100%',
    top: 0,
    alignItems: 'center',
    backgroundColor: '#6eb8db',
  },
  questions: {
    height: '65%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    width: '100%',
  },
  navBar: {
    top: 32,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  inputBar: {
    top: 100,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  timerText: {
    fontSize: normalize(14),
    color: 'white'
  },
  headerText: {
    color: 'white',
    letterSpacing: 0.04,
    fontSize: normalize(14),
  },
  headerTimer: {
  },
  timerTime: {
    fontSize: normalize(14),
    color: 'white'
  },
  headRight: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingRight: 10
  },
  stopWatch: {
    fontSize: normalize(25),
    color: 'white'
  },
  headLeft: {
    flex: 1,
    paddingLeft: 10,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  headerClock: {
    alignSelf: 'center',
    position: 'absolute',
    bottom: 10
  },
  timePick: {
    flex: 1,
    alignItems: 'center'
  },
  durationPick: {
    flex: 1,
    alignItems: 'center'
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.65)',
  },
  toolbar: {
    backgroundColor: '#f1f1f1',
    paddingVertical: 5,
    paddingHorizontal: 15,
  },
  toolbarRight: {
    alignSelf: 'flex-end',
  }
});