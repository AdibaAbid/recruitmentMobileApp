import { color } from '@styles/colorConstant';
import {
  FONT_FAMILY,
  getFontFamily,
  getFontSize,
  SIZE,
} from '@styles/FontProperties';
import React, { useContext, useEffect, useState } from 'react';
import { View, RefreshControl, FlatList, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import CheckIcon from '@assets/icons/CheckIcon';
import PendingIcon from '@assets/icons/PendingIcon';
import AddIcon from '@assets/icons/AddIcon';
import { CompalintScreenConstant, SCREENS } from '@constants/strings';
import { CredientialsContext } from 'src/recruitment/context/CredientialsContext';
import {
  GetComplaintHistory,
  GetUserData,
} from 'src/recruitment/api/Axios/client';
import { useIsFocused } from '@react-navigation/core';
import Skeleton from '@components/SkeletonLoader/index.js';
import { getWindowWidth } from 'src/recruitment/utils/platformUtils';
import Text from '@components/Text';
import MsgModal from './MsgModal';

const ComplaintScreen = ({ navigation, route }) => {
  const [showModal, setShowModal] = useState(false);
  const [showMsg, setMsg] = useState('');
  const [showStatus, setStatus] = useState('');

  const [complainData, setComplainData] = useState([]);
  const { userID } = useContext(CredientialsContext);
  const [refreshing, setRefreshing] = useState(false);
  const [loader, setLoader] = useState(true);
  const [emailResolver, setEmailResolver] = useState();

  const isFocused = useIsFocused();

  useEffect(() => {
    let unmounted = false;
    if (!unmounted) {
      fetchCompalintHisory(userID);
    }
    return () => {
      unmounted = true;
    };
  }, [isFocused, userID]);

  const wait = timeout => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  };
  const onRefresh = React.useCallback(() => {
    fetchCompalintHisory(userID);
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, [userID]);

  const fetchCompalintHisory = async userid => {
    const UserData = await GetUserData();
    const id = UserData.userdata._id.$oid;

    const res = await GetComplaintHistory(id);
    if (res.success) {
      setLoader(false);
      setComplainData(res.userdata.reverse());
    } else {
      setLoader(false);
    }
  };

  const renderItem = ({ comment, status, adminemail }) => {
    setEmailResolver(adminemail);
    return (
      <TouchableOpacity
        style={styles.cardView}
        onPress={() => {
          setMsg(comment);
          setStatus(status);
          setShowModal(true);
        }}>
        <View>
          <Text
            style={{
              color: color.black,
              fontSize: getFontSize(SIZE.XXSMALL),
              fontFamily: getFontFamily(FONT_FAMILY.SEMI_BOLD),
            }}>
            {status === 'unsolve'
              ? CompalintScreenConstant.pendingMsg
              : CompalintScreenConstant.resolveMsg}
          </Text>

          {adminemail !== '' && (
            <Text
              size={SIZE.XSMALLEST}
              color={color.silver}
              fontFamily={FONT_FAMILY.MEDIUM}>
              {'By Fakhar Alam'}
            </Text>
          )}

          <Text
            size={SIZE.XXXSMALL}
            fontFamily={FONT_FAMILY.MEDIUM}
            color={color.subTitleColor}
            customStyle={styles.commentText}
            numberOfLines={1}>
            {comment}
          </Text>
        </View>
        {status === 'unsolve' ? (
          <View style={styles.PendingIconView}>
            <PendingIcon size={25} colorIcon={color.pendingIconColor} />
          </View>
        ) : (
          <View style={styles.SuccessIconView}>
            <CheckIcon size={23} colorIcon={color.highlightGreen} />
          </View>
        )}
      </TouchableOpacity>
    );
  };

  return (
    <>
      {loader ? (
        <Skeleton
          width={getWindowWidth() / 1.12}
          height={90}
          numberOfRender={5}
        />
      ) : complainData.length > 0 ? (
        <FlatList
          data={complainData}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => renderItem(item)}
          keyExtractor={item => item._id}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
          contentContainerStyle={styles.parentView}
        />
      ) : (
        <View style={styles.noDataView}>
          <Text
            numberOfLines={1}
            style={{
              fontSize: getFontSize(SIZE.XXXSMALL),
              fontFamily: getFontFamily(FONT_FAMILY.MEDIUM),
              color: color.themeColorShockingPink,
            }}>
            {CompalintScreenConstant.nothingToShow}
          </Text>
        </View>
      )}
      <MsgModal
        showModal={showModal}
        setShowModal={setShowModal}
        showMsg={showMsg}
        showStatus={showStatus}
        emailResolver={emailResolver}
      />

      <View style={styles.btnParentView}>
        <TouchableOpacity
          style={styles.btnView}
          onPress={() => navigation.navigate(SCREENS.NEW_COMPLAINTS)}>
          <AddIcon />
          <Text
            color={color.white}
            fontFamily={FONT_FAMILY.MEDIUM}
            size={SIZE.SMALLEST}>
            {CompalintScreenConstant.newCompalint}
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default ComplaintScreen;
