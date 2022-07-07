import React from 'react';
import BasicCriteriaIcon from '@assets/svgs/BasicCriteriaIcon';
import EducationAndWorkExpIcon from '@assets/svgs/EducationAndWorkExpIcon';
import PersonalDataIcon from '@assets/svgs/PersonalDataIcon';
import VideoAndPictureIcon from '@assets/svgs/VideoAndPictureIcon';
import {
  BasicCriteria,
  EducationAndWorkExprience,
  PersonalInfoScreenConstant,
  submitApplication,
  VideoAndPicture,
} from '@constants/strings';

export const headerProps = [
  {
    title: PersonalInfoScreenConstant.personalInfo,
    subTitle: PersonalInfoScreenConstant.yourInfo,
    icon: <PersonalDataIcon height={80} width={130} />,
  },
  {
    title: EducationAndWorkExprience.heading,
    subTitle: EducationAndWorkExprience.subHeading,
    icon: <EducationAndWorkExpIcon height={80} width={140} />,
  },
  {
    title: BasicCriteria.BasicCriteria,
    subTitle: BasicCriteria.subHeading,
    icon: <BasicCriteriaIcon height={70} width={150} />,
  },
  {
    title: VideoAndPicture.heading,
    subTitle: VideoAndPicture.subHeading,
    icon: <VideoAndPictureIcon height={100} width={110} />,
  },
  {
    title: submitApplication.heading,
    subTitle: submitApplication.subHeading,
  },
];
