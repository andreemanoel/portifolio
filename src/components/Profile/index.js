import React from 'react';
import {Button, Grid, Link, Typography} from '@mui/material'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineContent from '@mui/lab/TimelineContent';
import CustomTimeline, {CustomTimelineSeparator} from '../Timeline';
import resumeData from '../../utils/resumeData';
import './Profile.css'
import IButton from '../Button';
import GetAppIcon from '@mui/icons-material/GetApp';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const CustomTimelineItem = ({title, text, link, icon}) => (
  <TimelineItem>
    <CustomTimelineSeparator/>
    <TimelineContent className="timeline_content">
      {link ? (
        <Grid item alignItems='center' display='flex'>
          {icon}
          <Link href={link} className="timelineItem_text" pl={1}>{text}</Link>
        </Grid>
      ): (
        <Grid item alignItems='center' display='flex'>
          {icon}
          <Typography className="timelineItem_text" pl={1}>{text}</Typography>
        </Grid>
      )}
    </TimelineContent>
  </TimelineItem>
)

const Profile = () => {

  const handleDownload = () => {
    const link = document.createElement("a");
    link.type = "application/pdf";
    link.href = "../../assets/cv.pdf";
    link.download = "ANDRE_EMANOEL.pdf";
    link.click();
  }
  
  return (
    <div className='profile container_shadow'>
      <div className='profile_name'>
        <Typography className='name'>{resumeData.name}</Typography>
        <Typography className='title'>{resumeData.title}</Typography>
      </div>

      <figure className='profile_image'>
        <img src={require('../../assets/images/imgPerfil.jpg')} alt=''/>
      </figure>

      <div className='profile_information'>
        <CustomTimeline icon={<PersonOutlineOutlinedIcon />}>
          <CustomTimelineItem text={resumeData.city} icon={<LocationOnIcon/>}/>
          <CustomTimelineItem text={resumeData.email} icon={<EmailIcon/>}/>
          <CustomTimelineItem text={resumeData.phone} icon={<WhatsAppIcon/>}/>

          {Object.keys(resumeData.socials).map(key => (
            <CustomTimelineItem 
              title={key} 
              text={resumeData.socials[key].text} 
              link={resumeData.socials[key].link} 
              icon={resumeData.socials[key].icon}
            />
          ))}
        </CustomTimeline>
        <br />
        <div className='button_container'>
          <IButton text="Download CV" icon={<GetAppIcon />} handleDownload={handleDownload}/>
        </div>
      </div>
    </div>
  );
}

export default Profile;
