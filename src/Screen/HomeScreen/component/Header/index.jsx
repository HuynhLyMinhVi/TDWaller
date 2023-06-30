import React from 'react';
import {View, Text, Image, Pressable} from 'react-native';

import styles from './styles';
import images from '~/assets/images';
import {ExternalShadow} from '~/Components/BoxShadow';
import {truncateAddress} from '~/utils/function';
import {getParseFloat} from '~/utils/function';
import {caculateMoney} from '~/utils/function';

export default function Header({address, coinsData, navigation}) {
  const getUserMoney = items => {
    let rs = 0;
    items.map(item => {
      try {
        rs += +caculateMoney(item.price, item.balance);
        return rs;
      } catch (error) {
        console.log('Header getUserMoney error', error);
      }
    });
    return rs;
  };

  return (
    <View style={styles.header}>
      <View
        style={{
          flexDirection: 'row',
          flex: 1,
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: 10,
        }}>
        <ExternalShadow>
          <Pressable
            style={{
              width: 35,
              height: 35,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#e6e7ee',
            }}>
            <View>
              <Image resizeMode="cover" source={images.logoTrendy} />
            </View>
          </Pressable>
        </ExternalShadow>
        <View style={styles.balanceNaddress}>
          <Text>{address ? truncateAddress(address) : ''}</Text>
          <Text style={styles.balance}>
            {address ? `~${getUserMoney(coinsData)}$` : ''}
          </Text>
        </View>
      </View>
      <ExternalShadow>
        <Pressable
          style={{
            width: 20,
            height: 20,
          }}>
          <View style={styles.alertWrap}>
            <Image source={images.iconNoti} style={styles.alert} />
          </View>
        </Pressable>
      </ExternalShadow>
    </View>
  );
}
