import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  name: 'André Emanoel',
  title: 'Full Stack Developer',
  birthday: '03/07/1999',
  email: 'andre.carvalho.123@hotmail.com',
  city: 'Ponta Grossa - PR',
  phone: '(43) 99825-0022',

  socials: {
    Facebook: {
      link: 'https://www.facebook.com/Andrecarvalh9/',
      text: 'Facebook',
      icon: <FacebookIcon />
    },
    Linkedin: {
      link: 'https://www.linkedin.com/in/andreemanoel/',
      text: 'Linkedin',
      icon: <LinkedInIcon />
    },
    GitHub: {
      link: 'https://github.com/andreemanoel',
      text: 'github',
      icon: <GitHubIcon />
    }
  }
}