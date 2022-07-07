import React from 'react';
import { View } from 'react-native';
import { theme } from '../../../../theme';
import TextComponent from '../../../../components/text';
import { Size } from '../../../../globals';
import styles from '../../styles';
import { FontFamilyEnum } from '../../../../constants/FontFamily';
import InputComponent from '../../../../components/Input';

import { HP } from '../../../../constants';
import { DescriptionConstant } from '../../../../constants/TextConstant';

const Description = ({ handleChange, values, handleBlur, touched, errors }) => {
  return (
    <View style={styles.paddingVertical}>
      <TextComponent
        title={DescriptionConstant.descriptionTitle}
        size={Size.DEFAULT}
        color={theme.bgTheme}
        family={FontFamilyEnum.REGULAR}
      />
      <View>
        <InputComponent
          touched={touched.searchDesp}
          error={errors.searchDesp}
          value={values.searchDesp}
          onBlur={handleBlur('searchDescp')}
          submitEditingHandle={() => console.log('Adiba')}
          handleChange={handleChange('searchDescp')}
          placeHolder={'Title'}
          customStyle={{ marginBottom: HP('-3') }}
        />
        <TextComponent
          title={DescriptionConstant.suggestions}
          size={Size.XS}
          color={theme.textDark}
          family={FontFamilyEnum.REGULAR}
          customStyles={{ marginVertical: HP('1') }}
        />

        <View style={styles.suggestionView}>
          <TextComponent
            title={'SAT Prep'}
            size={Size.XS}
            color={theme.bgTheme}
            family={FontFamilyEnum.REGULAR}
            customStyles={styles.suggestionTextStyle}
          />
          <TextComponent
            title={'Coding for Begineers'}
            size={Size.XS}
            color={theme.bgTheme}
            family={FontFamilyEnum.REGULAR}
            customStyles={styles.suggestionTextStyle}
          />

          <View style={styles.suggestionTextStyle}>
            <TextComponent
              title={'Writers'}
              size={Size.XS}
              color={theme.bgTheme}
              family={FontFamilyEnum.REGULAR}
            />
          </View>
          <View style={styles.suggestionTextStyle}>
            <TextComponent
              title={'Urdu Conversation'}
              size={Size.XS}
              color={theme.bgTheme}
              family={FontFamilyEnum.REGULAR}
            />
          </View>
        </View>

        <View style={{ marginTop: HP('2') }}>
          <InputComponent
            touched={touched.description}
            error={errors.description}
            value={values.description}
            onBlur={handleBlur('description')}
            multiline
            submitEditingHandle={() => console.log('Adiba')}
            handleChange={handleChange('description')}
            placeHolder={'Description'}
          />
          <View style={styles.DescriptionEndText}>
            <TextComponent
              title={`${values.description.length}/250`}
              size={Size.XS}
              color={theme.textLight}
              family={FontFamilyEnum.REGULAR}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default Description;
