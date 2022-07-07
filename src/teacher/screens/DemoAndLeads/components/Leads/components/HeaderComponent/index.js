import React from 'react';
import { View } from 'react-native';
import InputComponent from '../../../../../../components/Input';
import styles from './styles';

const HeaderComponent = () => {
  const onSearch = () => {
    console.log('searchs');
  };

  return (
    <View style={styles.headerParentView}>
      <View style={styles.searchParentView}>
        <InputComponent
          placeHolder={'Search'}
          submitEditingHandle={() => {}}
          handleChange={onSearch}
          keyboardType={'default'}
          customStyle={styles.inputStyle}
        />
      </View>
    </View>
  );
};

export default HeaderComponent;
