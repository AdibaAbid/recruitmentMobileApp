import React, { createContext, useState } from 'react';
export const CredientialsContext = createContext();

export default function CredientialsProvider({ children }) {
  const [userPhoneNumber, setUserPhoneNumber] = useState();
  const [storeName, setStoreName] = useState();
  const [submitBtnAtModal, setSubmitBtnAtModal] = useState();
  let [stepNumber, setStepNumber] = useState(null);
  const [wifiSpeed, setWifiSpeed] = useState();
  const [videoFileProgressPercent, setVideoFileProgressPercent] = useState(0);
  const [imageFileProgressPercent, setImageFileProgressPercent] = useState(0);
  const [imageFileFromAPI, setImageFileFromAPI] = useState('');
  const [videoFileFromAPI, setVideoFileFromAPI] = useState('');
  const [showError, setShowError] = useState(false);
  const [userID, setUserID] = useState();
  const [userProfileImage, setUserProfileImage] = useState();
  const [userEmail, setUserEmail] = useState();
  const [isFormSubmited, setIsFormSubmited] = useState();
  const [userVideo, setUserVideo] = useState();
  const [stepNoEditBtn, setStepNoEditBtn] = useState(null);
  const [showProgressBar, setShowProgressBar] = useState(false);
  const [subjectData, setSubjectsData] = useState([]);
  const [isReviewApplication, setIsReviewApplication] = useState(false);
  const [isRefresh, setIsRefresh] = useState(false);

  return (
    <CredientialsContext.Provider
      value={{
        userPhoneNumber,
        setUserPhoneNumber,
        setStepNumber,
        stepNumber,
        submitBtnAtModal,
        setSubmitBtnAtModal,
        wifiSpeed,
        setWifiSpeed,
        userID,
        setUserID,
        videoFileProgressPercent,
        setVideoFileProgressPercent,
        imageFileProgressPercent,
        setImageFileProgressPercent,
        imageFileFromAPI,
        setImageFileFromAPI,
        videoFileFromAPI,
        setVideoFileFromAPI,
        showError,
        setShowError,
        userProfileImage,
        setUserProfileImage,
        userEmail,
        setUserEmail,
        isFormSubmited,
        setIsFormSubmited,
        userVideo,
        setUserVideo,
        stepNoEditBtn,
        setStepNoEditBtn,
        setShowProgressBar,
        showProgressBar,
        subjectData,
        setSubjectsData,
        setStoreName,
        storeName,
        setIsReviewApplication,
        isReviewApplication,
        isRefresh,
        setIsRefresh,
      }}>
      {children}
    </CredientialsContext.Provider>
  );
}
