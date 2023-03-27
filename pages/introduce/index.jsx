import React from 'react';
import { View, Text, Image } from 'react-native';

export default function introduce() {
  return (
    <View style={styles.mod}>
      <View style={styles.block}>
        <View style={styles.header}>
          <Image
            style={styles['action-bg']}
            source={{ uri: './images/img_0.png' }}
          />
          <Image
            style={styles['icon-left']}
            source={{ uri: './images/img_1.png' }}
          />
        </View>
        <View style={styles['body-item0']}>
          <View style={styles['label-wrapper']}>
            <Text style={styles.label} lines={3}>
              戏团头像
            </Text>
          </View>
          <View style={styles.wrapper}>
            <View style={styles.mask} />
            <View style={styles.overlayer} />
            <View style={styles.layer} />
            <View style={styles.group}>
              <View style={styles.empty} />
              <View style={styles['empty-1']} />
              <View style={styles['empty-2']} />
            </View>
          </View>
          <View style={styles['wrapper-1']}>
            <Image
              style={styles['icon-add']}
              source={{ uri: './images/img_2.png' }}
            />
            <Text style={styles['label-1']} lines={0}>
              加入
            </Text>
            <View style={styles['word-wrapper']}>
              <Text style={styles.word} lines={0}>
                3.0分
              </Text>
            </View>
          </View>
        </View>
        <View style={styles['body-item1']}>
          <View style={styles['word-wrapper-1']}>
            <Text style={styles['word-1']} lines={3}>
              戏团头像
            </Text>
          </View>
          <View style={styles['wrapper-2']}>
            <View style={styles['mask-1']} />
            <View style={styles['overlayer-1']} />
            <View style={styles['layer-1']} />
            <View style={styles['group-1']}>
              <View style={styles['empty-3']} />
              <View style={styles['empty-4']} />
              <View style={styles['empty-5']} />
            </View>
          </View>
          <View style={styles['wrapper-3']}>
            <Image
              style={styles['icon-add-1']}
              source={{ uri: './images/img_3.png' }}
            />
            <Text style={styles.tag} lines={0}>
              加入
            </Text>
            <View style={styles['word-wrapper-2']}>
              <Text style={styles['word-2']} lines={0}>
                3.0分
              </Text>
            </View>
          </View>
        </View>
        <View style={styles['body-item2']}>
          <View style={styles['tag-wrapper']}>
            <Text style={styles['tag-1']} lines={3}>
              戏团头像
            </Text>
          </View>
          <View style={styles['wrapper-4']}>
            <View style={styles['mask-2']} />
            <View style={styles['overlayer-2']} />
            <View style={styles['layer-2']} />
            <View style={styles['group-2']}>
              <View style={styles.view}>
                <View style={styles['empty-6']} />
                <View style={styles['empty-7']} />
              </View>
              <View style={styles['empty-8']} />
            </View>
          </View>
          <View style={styles['wrapper-5']}>
            <Image
              style={styles['icon-add-2']}
              source={{ uri: './images/img_4.png' }}
            />
            <Text style={styles['tag-2']} lines={0}>
              加入
            </Text>
            <View style={styles['label-wrapper-1']}>
              <Text style={styles['label-2']} lines={0}>
                3.0分
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = {
  mod: { justifyContent: 'flex-start', width: 390, height: 844 },
  block: {
    width: 407,
    height: 844,
    justifyContent: 'flex-start',
    alignSelf: 'flex-start',
    padding: 0,
    backgroundImage: 'url(./images/img_5.png)',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 0,
    backgroundSize: '100% 100%',
    backgroundOrigin: 'padding-box',
  },
  header: { flexDirection: 'row', justifyContent: 'flex-start', alignSelf: 'center', position: 'relative', width: 373 },
  'action-bg': {
    width: 347,
    height: 142,
    backgroundColor: 'rgba(255,255,255,1)',
    marginLeft: 6,
    alignSelf: 'flex-start',
  },
  'icon-left': {
    width: 53,
    height: 53,
    backgroundColor: 'rgba(255,255,255,1)',
    position: 'absolute',
    left: 42,
    bottom: 8,
  },
  'body-item0': {
    backgroundColor: 'rgba(206,221,199,1)',
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignSelf: 'flex-start',
    marginLeft: 5,
    width: 350,
    padding: 20,
  },
  'label-wrapper': {
    width: 90,
    height: 135,
    flexDirection: 'row',
    marginLeft: 6,
    justifyContent: 'flex-start',
    alignSelf: 'flex-end',
    padding: 24,
    backgroundImage: 'url(./images/img_6.png)',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 0,
    backgroundSize: '100% 100%',
    backgroundOrigin: 'padding-box',
  },
  label: {
    fontSize: 20,
    color: 'rgba(57,60,57,1)',
    textAlign: 'center',
    fontFamily: 'Balsamiq Sans',
    marginLeft: 24,
    alignSelf: 'flex-start',
    WebkitLineClamp: 3,
    WebkitBoxOrient: 'vertical',
  },
  wrapper: { marginLeft: 20, justifyContent: 'flex-start', alignSelf: 'flex-end', height: 135, padding: 12 },
  mask: { backgroundColor: 'rgba(145,179,124,1)', alignSelf: 'center', width: 127, height: 13 },
  overlayer: { backgroundColor: 'rgba(145,179,124,1)', alignSelf: 'center', width: 126, height: 13, margin: 11 },
  layer: { backgroundColor: 'rgba(145,179,124,1)', marginTop: 11, alignSelf: 'flex-start', width: 112, height: 13 },
  group: { flexDirection: 'row', marginTop: 20, justifyContent: 'flex-start', alignSelf: 'center', width: 127 },
  empty: { marginLeft: 1, alignSelf: 'center', width: 41, height: 34, border: 1 },
  'empty-1': { alignSelf: 'center', width: 36, height: 34, border: 1 },
  'empty-2': { alignSelf: 'center', width: 39, height: 34, border: 1 },
  'wrapper-1': { paddingBottom: 12, marginLeft: 6, justifyContent: 'flex-start', alignSelf: 'flex-end', height: 135 },
  'icon-add': { width: 50, height: 50, backgroundColor: 'rgba(255,255,255,1)', alignSelf: 'center', marginLeft: 1 },
  'label-1': {
    fontSize: 16,
    color: 'rgba(0,0,0,1)',
    textAlign: 'center',
    fontFamily: 'Microsoft YaHei',
    alignSelf: 'flex-start',
    WebkitLineClamp: 0,
    WebkitBoxOrient: 'vertical',
    margin: 2,
  },
  'word-wrapper': {
    backgroundColor: 'rgba(178,193,169,1)',
    paddingTop: 5,
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'flex-start',
    alignSelf: 'center',
  },
  word: {
    fontSize: 20,
    color: 'rgba(84,119,97,1)',
    textAlign: 'center',
    fontFamily: 'Balsamiq Sans',
    marginLeft: 6,
    alignSelf: 'flex-start',
    WebkitLineClamp: 0,
    WebkitBoxOrient: 'vertical',
  },
  'body-item1': {
    backgroundColor: 'rgba(206,221,199,1)',
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignSelf: 'flex-start',
    width: 350,
    margin: 15,
    padding: 24,
  },
  'word-wrapper-1': {
    width: 90,
    height: 135,
    flexDirection: 'row',
    marginLeft: 2,
    justifyContent: 'center',
    alignSelf: 'center',
    padding: 21,
    backgroundImage: 'url(./images/img_7.png)',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 0,
    backgroundSize: '100% 100%',
    backgroundOrigin: 'padding-box',
  },
  'word-1': {
    fontSize: 20,
    color: 'rgba(57,60,57,1)',
    textAlign: 'center',
    fontFamily: 'Balsamiq Sans',
    marginLeft: 3,
    alignSelf: 'flex-start',
    WebkitLineClamp: 3,
    WebkitBoxOrient: 'vertical',
  },
  'wrapper-2': { marginLeft: 22, justifyContent: 'flex-start', alignSelf: 'center', height: 133, padding: 9 },
  'mask-1': { backgroundColor: 'rgba(145,179,124,1)', alignSelf: 'center', width: 124, height: 13 },
  'overlayer-1': { backgroundColor: 'rgba(145,179,124,1)', marginTop: 11, alignSelf: 'center', width: 124, height: 13 },
  'layer-1': { backgroundColor: 'rgba(145,179,124,1)', marginTop: 11, alignSelf: 'flex-start', width: 90, height: 13 },
  'group-1': { flexDirection: 'row', marginTop: 13, justifyContent: 'flex-start', alignSelf: 'center', width: 124 },
  'empty-3': { alignSelf: 'center', width: 41, height: 34, border: 1 },
  'empty-4': { alignSelf: 'center', width: 39, height: 34, border: 1 },
  'empty-5': { alignSelf: 'center', width: 36, height: 34, border: 1 },
  'wrapper-3': { paddingBottom: 13, marginLeft: 8, justifyContent: 'flex-start', alignSelf: 'center', height: 133 },
  'icon-add-1': { width: 50, height: 50, backgroundColor: 'rgba(255,255,255,1)', alignSelf: 'center' },
  tag: {
    fontSize: 16,
    color: 'rgba(0,0,0,1)',
    textAlign: 'center',
    fontFamily: 'Microsoft YaHei',
    alignSelf: 'flex-start',
    WebkitLineClamp: 0,
    WebkitBoxOrient: 'vertical',
    margin: 6,
  },
  'word-wrapper-2': {
    backgroundColor: 'rgba(178,193,169,1)',
    flexDirection: 'row',
    marginTop: 13,
    justifyContent: 'flex-start',
    alignSelf: 'center',
    padding: 2,
  },
  'word-2': {
    fontSize: 20,
    color: 'rgba(84,119,97,1)',
    textAlign: 'center',
    fontFamily: 'Balsamiq Sans',
    marginLeft: 1,
    alignSelf: 'flex-start',
    WebkitLineClamp: 0,
    WebkitBoxOrient: 'vertical',
  },
  'body-item2': {
    backgroundColor: 'rgba(206,221,199,1)',
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignSelf: 'flex-start',
    width: 350,
    margin: 19,
    padding: 26,
  },
  'tag-wrapper': {
    width: 90,
    height: 135,
    flexDirection: 'row',
    marginLeft: 3,
    justifyContent: 'flex-start',
    alignSelf: 'center',
    padding: 22,
    backgroundImage: 'url(./images/img_8.png)',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 0,
    backgroundSize: '100% 100%',
    backgroundOrigin: 'padding-box',
  },
  'tag-1': {
    fontSize: 20,
    color: 'rgba(57,60,57,1)',
    textAlign: 'center',
    fontFamily: 'Balsamiq Sans',
    marginLeft: 24,
    alignSelf: 'flex-start',
    WebkitLineClamp: 3,
    WebkitBoxOrient: 'vertical',
  },
  'wrapper-4': { paddingTop: 21, marginLeft: 21, justifyContent: 'flex-start', alignSelf: 'center', height: 135 },
  'mask-2': { backgroundColor: 'rgba(145,179,124,1)', alignSelf: 'center', marginLeft: 1, width: 124, height: 13 },
  'overlayer-2': { backgroundColor: 'rgba(145,179,124,1)', alignSelf: 'center', width: 124, height: 13, margin: 12 },
  'layer-2': { backgroundColor: 'rgba(145,179,124,1)', alignSelf: 'center', width: 120, height: 13, margin: 13 },
  'group-2': { flexDirection: 'row', marginTop: 16, justifyContent: 'flex-start', alignSelf: 'center', width: 125 },
  view: {
    flexDirection: 'row',
    marginLeft: 33,
    justifyContent: 'flex-start',
    alignSelf: 'center',
    position: 'relative',
    height: 34,
  },
  'empty-6': { position: 'absolute', left: -34, top: 0, zIndex: 1, width: 41, height: 34, border: 1 },
  'empty-7': { alignSelf: 'flex-start', zIndex: 2, width: 41, height: 34, border: 1 },
  'empty-8': { alignSelf: 'center', width: 37, height: 34, border: 1 },
  'wrapper-5': { paddingBottom: 4, marginLeft: 9, justifyContent: 'flex-start', alignSelf: 'center', height: 135 },
  'icon-add-2': { width: 50, height: 50, backgroundColor: 'rgba(255,255,255,1)', alignSelf: 'center' },
  'tag-2': {
    fontSize: 16,
    color: 'rgba(0,0,0,1)',
    textAlign: 'center',
    fontFamily: 'Microsoft YaHei',
    alignSelf: 'flex-start',
    WebkitLineClamp: 0,
    WebkitBoxOrient: 'vertical',
    margin: 3,
  },
  'label-wrapper-1': {
    backgroundColor: 'rgba(178,193,169,1)',
    flexDirection: 'row',
    marginTop: 27,
    justifyContent: 'flex-start',
    alignSelf: 'center',
    padding: 4,
  },
  'label-2': {
    fontSize: 20,
    color: 'rgba(84,119,97,1)',
    textAlign: 'center',
    fontFamily: 'Balsamiq Sans',
    marginLeft: 3,
    alignSelf: 'flex-start',
    WebkitLineClamp: 0,
    WebkitBoxOrient: 'vertical',
  },
};
