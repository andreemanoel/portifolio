import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  name: 'André Emanoel',
  title: 'Full-Stack Developer',
  birthday: '03/07/1999',
  email: 'andre.carvalho.123@hotmail.com',
  city: 'Ponta Grossa - PR',
  phone: '(43) 99825-0022',
  socials: {
    Facebook: {
      link: 'https://www.facebook.com/Andrecarvalh9/',
      text: 'andrecarvalh9',
      icon: <FacebookIcon />
    },
    Linkedin: {
      link: 'https://www.linkedin.com/in/andreemanoel/',
      text: 'andreemanoel',
      icon: <LinkedInIcon />
    },
    GitHub: {
      link: 'https://github.com/andreemanoel',
      text: 'andreemanoel',
      icon: <GitHubIcon />
    }
  },
  experiences: [
    {
      title: 'Desenvolvedor - Front-End Web e Mobile',
      subtitle: 'Schaffen-IT | Ponta Grossa - PR',
      date: 'Out. de 2021 - Atual',
      description: {
        t1: 'Criação de novos aplicativos;',
        t2: 'Manutenção e personalização de aplicativos já existentes;',
        t3: 'Manutenção e personalização de Sistemas Web jáexistentes;',
        t4: 'Criação de novos Sistemas.'
      }
    },
    {
      title: 'Desenvolvedor - Full-Stack',
      subtitle: 'Finer Soluções Web | Ponta Grossa - PR',
      date: 'Mai. de 2021 - Out. de 2021',
      description: {
        t1: 'Manutenção e personalização de Sistemas já existentes;',
        t2: 'Manutenção e personalização de aplicativos;',
        t3: 'Criação de APIs;',
        t4: 'Manutenção e ajustes Banco de Dados.'
      }
    },
  ],

  school: [
    {
      title: 'UNIVERSIDADE TECNOLÓGICA FEDERAL DO PARANÁ',
      subtitle: 'Bacharelado em Ciência da Computação',
      date: 'Mar. de 2018 - Dez de 2022'
    }
  ]
}