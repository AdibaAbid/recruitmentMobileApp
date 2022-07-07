import React from 'react';

import { FlatList, View } from 'react-native';

import { FontFamilyEnum } from '../../../../../../constants/FontFamily';
import { theme } from '../../../../../../theme/';
import TextComponent from '../../../../../../components/text';
import { getLineHeight } from '../../../../../../constants/';
import { starCount } from '../../../../../../constants/StaticData';

import styles from './styles';
import Size from '../../../../../../globals/sizes';
import { SvgXml } from 'react-native-svg';
import star from 'src/teacher/assets/svgs/star';
import starColor from 'src/teacher/assets/svgs/starColor';

const StarComponent = ({ data, indexKey }) => (
  <View style={styles.card}>
    <View style={styles.stars}>
      {starCount.map((_, index) => (
        <View>
          {index < data.rating ? (
            <SvgXml xml={star('12', '12')} />
          ) : (
            <SvgXml xml={starColor('12', '12')} />
          )}
        </View>
      ))}
    </View>

    <View style={styles.textWrapper}>
      <View style={styles.review}>
        <TextComponent
          title={
            'Saima manner of teaching is so wonderful and refreshing!! She’s/He’s patient and supportive, but really knows how to motivate her/his students.'
          }
          color={theme.textNormal}
          size={Size.XS}
          customStyles={getLineHeight(20)}
        />
      </View>

      <TextComponent
        title={'Zohra Shams'}
        color={theme.textDefault}
        family={FontFamilyEnum.REGULAR}
        size={Size.S}
        customStyles={getLineHeight(18)}
      />
    </View>
  </View>
);

const ReviewSection = ({ data }) => {
  return (
    <FlatList
      data={data}
      listKey={'101'}
      keyExtractor={item => item.id.toString()}
      horizontal
      showsHorizontalScrollIndicator={false}
      renderItem={({ item, index }) => (
        <StarComponent data={item} indexKey={index} />
      )}
    />
  );
};

export default ReviewSection;
