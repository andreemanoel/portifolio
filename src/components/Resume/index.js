import React from 'react';
import { Grid, Typography } from '@mui/material';

import './Resume.css'
import CustomTimeline, { CustomTimelineSeparator } from '../Timeline';
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';
import resumeData from '../../utils/resumeData';
import { TimelineContent, TimelineItem } from '@mui/lab';

const Resume = () => {
  return (
    <Grid mt={3} p={3}>
      <Grid container className='section'>
        <Grid item className='section_title'>
          <span></span>
          <Typography variant='h6' color='white'>Sobre mim</Typography>
        </Grid>
        <Grid item xs={12} mt={3} mb={5}>
          <span></span>
          <Typography color='white' align='justify' variant='body2'>
            Graduando no 8° período em Ciência da Computação na
            UTFPR-PG. Atualmente trabalho como Desenvolvedor na
            Schaffen-IT. Antes do atual emprego, fui estagiário por 4
            meses na Finer Web Soluções, logo fui efetivado. Procuro
            nova oportunidade em uma empresa onde eu possa crescer
            e também contribuir para o seu crescimento, que estimule o
            trabalho em equipe e esteja sempre ligada a novas
            tecnologias. Sou responsável e preocupado em apresentar
            um trabalho com excelência.
           </Typography>
        </Grid>
      </Grid>
      <Grid container className='section'>
        <Grid item className='section_title'>
          <span></span>
          <Typography variant='h6' color='white'>Resumo</Typography>
        </Grid>

        <Grid item xs={12}>
          <Grid container>
            <Grid item sm={12} md={6}>
              <CustomTimeline title="Experiência de Trabalho" icon={<WorkIcon />}>
                {resumeData.experiences.map(exp => (
                  <TimelineItem>
                    <CustomTimelineSeparator />
                    <TimelineContent mb={2}>
                      <Typography color="white">{exp.title}</Typography>
                      <Typography color="#9c9c9c" variant='body2' pb={1}>{exp.subtitle} | {exp.date}</Typography>
                      <ul>
                        <li>{exp.description.t1}</li>
                        <li>{exp.description.t2}</li>
                        <li>{exp.description.t3}</li>
                        <li>{exp.description.t4}</li>
                      </ul>
                    </TimelineContent>
                  </TimelineItem>
                ))}
              </CustomTimeline>
            </Grid>
            <Grid item sm={12} md={6}>
              <CustomTimeline title="Histórico Escolar" icon={<SchoolIcon />}>
                {resumeData.school.map(sch => (
                  <TimelineItem>
                    <CustomTimelineSeparator />
                    <TimelineContent mb={2}>
                      <Typography color="white">{sch.title}</Typography>
                      <Typography color="#9c9c9c" variant='body2' pb={1}>{sch.subtitle} | {sch.date}</Typography>
                    </TimelineContent>
                  </TimelineItem>
                ))}
              </CustomTimeline>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid container className='section'></Grid>
    </Grid>
  );
}

export default Resume;
