import React from 'react'
import { View, Text, Image } from 'react-native'

export default function Block_0() {
  return (
    <View style={styles.mod}>
      {true && (
        <View style={styles.group}>
          <View style={styles.block}>
            <View style={styles.header}>
              <View style={styles['time-wrapper']} />
            </View>
            <Image
              style={styles['entry-pic']}
              source={{ uri: './images/img_0.png' }}
            />
            <Image style={styles.bg} source={{ uri: './images/img_1.png' }} />
            <View style={styles.body}>
              <View style={styles['wrapper-1']}>
                <View style={styles['group-item0']}>
                  <Image
                    style={styles['large-icon']}
                    source={{ uri: './images/img_2.png' }}
                  />
                  <Text style={styles.word} lines={0}>
                    戏团介绍
                  </Text>
                </View>
                <View style={styles['group-item1']}>
                  <Image
                    style={styles['large-icon-1']}
                    source={{ uri: './images/img_3.png' }}
                  />
                  <Text style={styles.tag} lines={0}>
                    听戏曲
                  </Text>
                </View>
                <View style={styles['group-item2']}>
                  <Image
                    style={styles['icon-chat']}
                    source={{ uri: './images/img_4.png' }}
                  />
                  <Text style={styles.label} lines={0}>
                    教学
                  </Text>
                </View>
              </View>
              <View style={styles['wrapper-2']}>
                <View style={styles['group-1']}>
                  <View style={styles.overlayer} />
                  <View style={styles['horizontal-line-1']} />
                  <View style={styles['horizontal-line-2']} />
                </View>
                <View style={styles['group-2']}>
                  <View style={styles['overlayer-1']} />
                  <View style={styles['horizontal-line-3']} />
                  <View style={styles['horizontal-line-4']} />
                </View>
              </View>
              <View style={styles['wrapper-3']}>
                <View style={styles['group-3']}>
                  <View style={styles['overlayer-2']} />
                  <View style={styles['horizontal-line-5']} />
                </View>
                <View style={styles['group-4']}>
                  <View style={styles.mask} />
                  <View style={styles['horizontal-line-6']} />
                </View>
              </View>
              <View style={styles['wrapper-4']}>
                <View style={styles['group-5']}>
                  <Image
                    style={styles['icon-play']}
                    source={{ uri: './images/img_5.png' }}
                  />
                  <Text style={styles['tag-1']} lines={0}>
                    视频
                  </Text>
                </View>
                <View style={styles['group-6']}>
                  <View style={styles.view}>
                    <Image
                      style={styles['icon-computer']}
                      source={{ uri: './images/img_6.png' }}
                    />
                    <Text style={styles['word-1']} lines={1}>
                      首页
                    </Text>
                  </View>
                  <View style={styles.empty} />
                </View>
                <View style={styles['group-7']}>
                  <Image
                    style={styles['icon-user']}
                    source={{ uri: './images/img_7.png' }}
                  />
                  <Text style={styles['label-1']} lines={1}>
                    我的
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      )}
    </View>
  )
}

const styles = {
  mod: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    width: 390,
    height: 844,
  },
  group: {
    backgroundColor: 'rgba(255,255,255,1)',
    paddingTop: 2,
    justifyContent: 'flex-start',
    alignSelf: 'flex-start',
    width: 390,
  },
  block: {
    width: 407,
    height: 842,
    justifyContent: 'flex-start',
    alignSelf: 'flex-start',
    padding: 16,
    backgroundImage: 'url(./images/img_8.png)',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 0,
    backgroundSize: '100% 100%',
    backgroundOrigin: 'padding-box',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center',
    width: 379,
  },
  'time-wrapper': {
    flexDirection: 'row',
    marginLeft: 20,
    justifyContent: 'flex-start',
    alignSelf: 'center',
    height: 17,
  },
  'entry-pic': {
    width: 356,
    height: 184,
    backgroundColor: 'rgba(229,244,221,1)',
    alignSelf: 'flex-start',
    margin: 18,
    border: 2,
  },
  bg: {
    width: 360,
    height: 3,
    backgroundColor: 'rgba(26,26,26,1)',
    alignSelf: 'flex-start',
    margin: 21,
  },
  body: {
    justifyContent: 'flex-start',
    alignSelf: 'center',
    width: 379,
    padding: 18,
  },
  'wrapper-1': {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignSelf: 'center',
    width: 345,
  },
  'group-item0': {
    width: 99,
    height: 77,
    justifyContent: 'flex-start',
    alignSelf: 'center',
    padding: 5,
  },
  'large-icon': {
    width: 62,
    height: 41,
    backgroundColor: 'rgba(255,255,255,1)',
    alignSelf: 'flex-start',
    marginLeft: 13,
  },
  word: {
    fontSize: 20,
    color: 'rgba(0,0,0,1)',
    textAlign: 'center',
    fontFamily: 'Balsamiq Sans',
    marginTop: 4,
    alignSelf: 'center',
    WebkitLineClamp: 0,
    WebkitBoxOrient: 'vertical',
  },
  'group-item1': {
    width: 99,
    height: 77,
    paddingTop: 2,
    marginLeft: 17.5,
    justifyContent: 'flex-start',
    alignSelf: 'center',
  },
  'large-icon-1': {
    width: 62,
    height: 41,
    backgroundColor: 'rgba(255,255,255,1)',
    alignSelf: 'center',
    marginRight: 4,
  },
  tag: {
    fontSize: 20,
    color: 'rgba(0,0,0,1)',
    textAlign: 'center',
    fontFamily: 'Balsamiq Sans',
    alignSelf: 'center',
    WebkitLineClamp: 0,
    WebkitBoxOrient: 'vertical',
    margin: 7,
  },
  'group-item2': {
    width: 99,
    height: 77,
    marginLeft: 20,
    justifyContent: 'flex-start',
    alignSelf: 'center',
  },
  'icon-chat': {
    width: 55,
    height: 49,
    backgroundColor: 'rgba(255,255,255,1)',
    alignSelf: 'flex-start',
    marginLeft: 16.5,
  },
  label: {
    fontSize: 20,
    color: 'rgba(0,0,0,1)',
    textAlign: 'center',
    fontFamily: 'Balsamiq Sans',
    alignSelf: 'flex-start',
    WebkitLineClamp: 0,
    WebkitBoxOrient: 'vertical',
    margin: 1,
  },
  'wrapper-2': {
    flexDirection: 'row',
    marginTop: 21,
    justifyContent: 'flex-start',
    alignSelf: 'center',
    width: 345,
  },
  'group-1': { justifyContent: 'flex-start', alignSelf: 'center', height: 185 },
  overlayer: {
    backgroundColor: 'rgba(206,221,199,1)',
    borderRadius: 10,
    alignSelf: 'center',
    width: 150,
    height: 149,
  },
  'horizontal-line-1': {
    backgroundColor: 'rgba(156,181,141,1)',
    marginTop: 6,
    alignSelf: 'flex-start',
    width: 73,
    height: 12,
  },
  'horizontal-line-2': {
    backgroundColor: 'rgba(156,182,141,1)',
    marginTop: 6,
    alignSelf: 'flex-start',
    width: 126,
    height: 12,
  },
  'group-2': {
    marginLeft: 28,
    justifyContent: 'flex-start',
    alignSelf: 'center',
    height: 185,
  },
  'overlayer-1': {
    backgroundColor: 'rgba(206,221,199,1)',
    borderRadius: 10,
    alignSelf: 'center',
    width: 150,
    height: 149,
  },
  'horizontal-line-3': {
    backgroundColor: 'rgba(156,182,141,1)',
    alignSelf: 'flex-start',
    width: 126,
    height: 12,
    margin: 6,
  },
  'horizontal-line-4': {
    backgroundColor: 'rgba(156,182,141,1)',
    alignSelf: 'flex-start',
    width: 81,
    height: 12,
    margin: 6,
  },
  'wrapper-3': {
    flexDirection: 'row',
    marginTop: 25,
    justifyContent: 'space-between',
    alignSelf: 'center',
    width: 345,
  },
  'group-3': {
    marginLeft: 2,
    justifyContent: 'flex-start',
    alignSelf: 'center',
    height: 167,
  },
  'overlayer-2': {
    backgroundColor: 'rgba(206,221,199,1)',
    borderRadius: 10,
    alignSelf: 'center',
    width: 150,
    height: 149,
  },
  'horizontal-line-5': {
    backgroundColor: 'rgba(156,182,141,1)',
    alignSelf: 'flex-start',
    width: 81,
    height: 12,
    margin: 6,
  },
  'group-4': {
    marginRight: 13,
    justifyContent: 'flex-start',
    alignSelf: 'center',
    height: 167,
  },
  mask: {
    backgroundColor: 'rgba(206,221,199,1)',
    borderRadius: 10,
    alignSelf: 'center',
    width: 150,
    height: 149,
  },
  'horizontal-line-6': {
    backgroundColor: 'rgba(156,182,141,1)',
    marginTop: 6,
    alignSelf: 'flex-start',
    width: 124,
    height: 12,
  },
  'wrapper-4': {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignSelf: 'center',
    width: 345,
    padding: 21,
  },
  'group-5': {
    marginLeft: 6,
    justifyContent: 'flex-start',
    alignSelf: 'flex-end',
    height: 63,
    padding: 1,
  },
  'icon-play': {
    width: 35,
    height: 35,
    backgroundColor: 'rgba(255,255,255,1)',
    alignSelf: 'center',
    marginRight: 4,
  },
  'tag-1': {
    fontSize: 16,
    color: 'rgba(0,0,0,1)',
    textAlign: 'center',
    fontFamily: 'Balsamiq Sans',
    alignSelf: 'center',
    WebkitLineClamp: 0,
    WebkitBoxOrient: 'vertical',
  },
  'group-6': {
    marginLeft: 50,
    justifyContent: 'flex-start',
    alignSelf: 'flex-end',
    height: 63,
  },
  view: { justifyContent: 'flex-start', alignSelf: 'center', width: 134 },
  'icon-computer': {
    width: 44,
    height: 36,
    backgroundColor: 'rgba(255,255,255,1)',
    alignSelf: 'center',
    marginLeft: 4,
  },
  'word-1': {
    fontSize: 16,
    color: 'rgba(0,0,0,1)',
    textAlign: 'center',
    fontFamily: 'Balsamiq Sans',
    lineHeight: 16,
    alignSelf: 'flex-start',
    margin: 3,
  },
  empty: {
    marginTop: 3,
    alignSelf: 'center',
    width: 134,
    height: 5,
    borderTop: 1,
  },
  'group-7': {
    paddingBottom: 1,
    marginLeft: 57,
    justifyContent: 'flex-start',
    alignSelf: 'flex-end',
    height: 63,
  },
  'icon-user': {
    width: 42,
    height: 33,
    backgroundColor: 'rgba(255,255,255,1)',
    alignSelf: 'center',
    marginRight: 3,
  },
  'label-1': {
    fontSize: 16,
    color: 'rgba(0,0,0,1)',
    textAlign: 'center',
    fontFamily: 'Balsamiq Sans',
    alignSelf: 'center',
    margin: 3,
  },
}
