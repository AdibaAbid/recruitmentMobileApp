import React, { useEffect, useState } from 'react';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';

import { FONT_FAMILY, getFontFamily, SIZE } from '@styles/FontProperties';
import Text from '@components/Text';
import {
  scale,
  scaleHeight,
  scaleWidth,
} from 'src/recruitment/utils/platformUtils';
import { color } from '@styles/colorConstant';
import Flag from 'react-native-flags';
import {
  FlatList,
  Platform,
  Pressable,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from '../../styles';
import { fetchPhoneNumberAPI } from '@api/Fetch';
import CheckIcon from '@assets/icons/CheckIcon';
import { bindActionCreators } from 'redux';
import { useDispatch } from 'react-redux';
import * as actions from '../../../../../teacher/store/actions';
import backArrow from '@screens/SignUpScreen/assets/Svg/backArrow';
import { SvgXml } from 'react-native-svg';
import { theme } from '../../../../../teacher/theme/index';

const InputBox = styled.TextInput`
  border-color: ${color.textBackgroundColor};
  border-width: 1px;
  border-radius: ${scaleHeight(3)}px;
  color: ${color.blackBorderColor};
  background-color:${color.textBackgroundColor}
  font-size: ${scale(13)}px;
  padding-left: ${scaleWidth(15)}px;
  width: 86%;
  font-family: ${getFontFamily(FONT_FAMILY.REGULAR)};
  padding-vertical: ${Platform.OS === 'android' ? 5 : 8}px;
`;

const SearchBarView = styled.View`
  top: 30px;
  padding-bottom: 40px;
  justify-content: center;
  align-items: center;
`;

const ImageView = styled.View`
  width: 25px;
  height: 25px;
  margin-horizontal: 15px;
`;

const TextViewWrapper = styled.View`
  flex-direction: row;
  width: 80%;
  align-items: center;
  top: 15px;
`;

const TextWrapper = styled(Text)`
  padding: 20px;
  height: 60px;
`;
const CountryPicker = ({ setMasking, setCallingCode }, ref) => {
  const [countryCodeData, setCountryCodeData] = useState([]);
  const [selected, setSelected] = useState();
  const [filteredData, setFilteredData] = useState(null);
  const [searchValue, setSearchValue] = useState('');
  const dispatch = useDispatch();

  const action = bindActionCreators(actions, dispatch);

  useEffect(() => {
    let unmounted = false;

    async function fetchData(fetchAPI) {
      const res = await fetchAPI();
      if (!unmounted) {
        setCountryCodeData(res.data);
      }
    }
    fetchData(fetchPhoneNumberAPI);
    return () => {
      unmounted = true;
    };
  }, []);

  const searchBar = searchtext => {
    setSearchValue(searchtext);
    const filtered = countryCodeData.filter(i =>
      i.title.toLowerCase().includes(searchtext.toLowerCase()),
    );
    setFilteredData(filtered);
  };

  const closeModal = () => {
    setFilteredData('');
    setSearchValue('');
    action.setModalToggle(false);
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.modalHeader}>
        <Pressable onPress={() => closeModal()} style={styles.modalHeaderBtn}>
          <View>
            <SvgXml xml={backArrow} />
          </View>
        </Pressable>
        <Text
          size={SIZE.LARGE}
          color={theme.bgTheme}
          fontFamily={FONT_FAMILY.REGULAR}>
          {'Select Country'}
        </Text>
      </View>

      <SearchBarView>
        <InputBox
          multiline={false}
          allowFontScaling={false}
          testID="input-box"
          placeholder={'Type Something...'}
          placeholderTextColor={color.lightGrey}
          onChangeText={label => searchBar(label)}
          value={searchValue}
          fontFamily={FONT_FAMILY.REGULAR}
          autoCapitalize="none"
          autoCorrect={false}
          autoFocus={true}
        />
      </SearchBarView>

      {/* OptionList */}
      <FlatList
        data={filteredData ? filteredData : countryCodeData}
        keyExtractor={(item, index) => item.value + index}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.flatListView}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => {
              setSelected(item.title);
              setMasking(item.mask);
              setCallingCode(item.value);
              closeModal();
            }}>
            <View style={styles.modalLabelView}>
              <TextViewWrapper>
                <ImageView>
                  <Flag code={item.code} size={32} type={'flat'} />
                </ImageView>

                <TextWrapper
                  color={color.blackBorderColor}
                  numberOfLines={3}
                  size={SIZE.XXSMALL}
                  fontFamily={
                    item.title === selected
                      ? FONT_FAMILY.BOLD
                      : FONT_FAMILY.REGULAR
                  }>
                  {`${item.title} (${item.value})`}
                </TextWrapper>
              </TextViewWrapper>

              <View style={{ top: 15 }}>
                {item.title === selected && (
                  <CheckIcon
                    size={27}
                    colorIcon={color.themeColorShockingPink}
                  />
                )}
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default React.forwardRef(CountryPicker);

CountryPicker.defaultProps = {
  backgroundColor: color.white,
  textColor: color.blackBorderColor,
};

CountryPicker.propTypes = {
  title: PropTypes.string.isRequired,
};
