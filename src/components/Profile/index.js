import React from 'react';
import {Button, Typography} from '@mui/material'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineContent from '@mui/lab/TimelineContent';
import CustomTimeline, {CustomTimelineSeparator} from '../Timeline';
import resumeData from '../../utils/resumeData';
import './Profile.css'
import DownloadIcon from '@mui/icons-material/Download';
import IButton from '../Button';

const CustomTimelineItem = ({title, text, link}) => (
  <TimelineItem>
    <CustomTimelineSeparator/>
    <TimelineContent className="timeline_content">
      {link ? (
        <Typography className="timelineItem_text">
          <span>{title}:</span>{" "}
          <a href={link} target="_blank" rel="noreferrer">{text}</a>
        </Typography>
      ): (
        <Typography className="timelineItem_text">
          <span>{title}:</span> {text}
        </Typography>
      )}
    </TimelineContent>
  </TimelineItem>
)

const Profile = () => {
  return (
    <div className='profile container_shadow'>
      <div className='profile_name'>
        <Typography className='name'>{resumeData.name}</Typography>
        <Typography className='title'>{resumeData.title}</Typography>
      </div>

      <figure className='profile_image'>
        <img src={require('../../images/imgPerfil.jpg')} alt=''/>
      </figure>

      <div className='profile_information'>
        <CustomTimeline icon={<PersonOutlineOutlinedIcon />}>
          <CustomTimelineItem title="Nome" text={resumeData.name}/>
          <CustomTimelineItem title="Título" text={resumeData.title}/>
          <CustomTimelineItem title="Email" text={resumeData.email}/>

          {Object.keys(resumeData.socials).map(key => (
            <CustomTimelineItem title={key} text={resumeData.socials[key].text} link={resumeData.socials[key].link}/>
          ))}
        </CustomTimeline>
        <br />
        <div className='button_container'>
          <IButton text="Baixar CV"/>
        </div>
      </div>
    </div>
  );
}

export default Profile;
