import { theme } from '../../../../theme';
import * as React from 'react';
import { View } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import Demos from '../Demos';
import Leads from '../Leads';
import TextComponent from '../../../../components/text';
import { FontFamilyEnum } from '../../../../constants/FontFamily';
import { getLineHeight } from '../../../../constants';
import sizes from '../../../../globals/sizes';
import styles from './styles';

const renderScene = SceneMap({
  first: Demos,
  second: Leads,
});

export default function DemoTabView() {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'Demos' },
    { key: 'second', title: 'Leads' },
  ]);

  const renderLabel = ({ route, color }) => {
    return (
      <TextComponent
        title={route.title}
        color={color}
        center
        family={FontFamilyEnum.MEDIUM}
        size={sizes.S}
        customStyles={getLineHeight(20)}
      />
    );
  };

  const _renderTabs = props => {
    return (
      <View style={styles.tabBarContainer}>
        <TabBar
          {...props}
          renderLabel={renderLabel}
          tabStyle={styles.tabBarStyle}
          inactiveColor={theme.textDefault}
          activeColor={theme.bgTheme}
          indicatorStyle={styles.indicatorStyle}
          style={styles.tabBarView}
        />
      </View>
    );
  };
  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      style={styles.container}
      renderTabBar={_renderTabs}
    />
  );
}
