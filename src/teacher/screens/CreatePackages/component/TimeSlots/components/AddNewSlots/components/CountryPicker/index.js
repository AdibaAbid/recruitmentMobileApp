import React, { useEffect, useState } from 'react';
import { color } from '@styles/colorConstant';
import Flag from 'react-native-flags';
import { FlatList, Pressable, TouchableOpacity, View } from 'react-native';
import styles from './styles';
import { fetchPhoneNumberAPI } from '@api/Fetch';
import CheckIcon from '@assets/icons/CheckIcon';
import { bindActionCreators } from 'redux';
import { useDispatch } from 'react-redux';
import * as actions from '../../../../../../../../store/actions';
import backArrow from '@screens/SignUpScreen/assets/Svg/backArrow';
import { SvgXml } from 'react-native-svg';
import InputComponent from '../../../../../../../../components/Input';
import sizes from '../../../../../../../../globals/sizes';
import { FontFamilyEnum } from '../../../../../../../../constants/FontFamily';
import { theme } from '../../../../../../../../theme';
import TextComponent from '../../../../../../../../components/text';

const CountryPicker = ({ setMasking, setCountryName }) => {
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
    <View style={{ flex: 1, paddingHorizontal: 15 }}>
      <View style={styles.modalHeader}>
        <Pressable onPress={() => closeModal()} style={styles.modalHeaderBtn}>
          <View>
            <SvgXml xml={backArrow} />
          </View>
        </Pressable>

        <TextComponent
          size={sizes.L}
          center
          family={FontFamilyEnum.SEMIBOLD}
          color={theme.textDefault}
          title={'Select Country'}
        />
      </View>

      <View style={styles.SearchBarView}>
        <InputComponent
          placeHolder={'Search'}
          submitEditingHandle={() => {}}
          handleChange={label => searchBar(label)}
          keyboardType={'default'}
          customStyle={styles.inputStyle}
        />
      </View>

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
              setCountryName(item.title);
              closeModal();
            }}>
            <View style={styles.modalLabelView}>
              <View style={styles.TextViewWrapper}>
                <View style={styles.ImageView}>
                  <Flag code={item.code} size={32} type={'flat'} />
                </View>
                <TextComponent
                  size={sizes.S}
                  center
                  family={
                    item.title === selected
                      ? FontFamilyEnum.SEMIBOLD
                      : FontFamilyEnum.REGULAR
                  }
                  color={theme.textDefault}
                  title={`${item.title} (${item.value})`}
                />
              </View>

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

export default CountryPicker;
