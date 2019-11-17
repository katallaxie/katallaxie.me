// initial state
const init = {
  name: 'Sebastian Döll.',
  job: 'Solutions Architect at AWS',
  teaser: 'Crafting software with great user experiences.',
  experience: [
    {
      company: 'AWS <span>Solutions Achitect</span>',
      time: '2019&mdash;present'
    },
    {
      company: 'DigitalOcean <span>Senior Software Engineer</span>',
      time: '2018&mdash;2019'
    },
    {
      company: 'Axel Springer <span>Lead Engineer</span>',
      time: '2016&mdash;2018'
    },
    {
      company: 'Accenture <span>Tech Lead</span>',
      time: '2015&mdash;2016'
    },
    {
      company: 'FSU Jena <span>Research Associate</span>',
      time: '2004&mdash;2010'
    },
    {
      company: 'Freelancer <span>Developer</span>',
      time: '2004&mdash;2015'
    },
    {
      company: 'IBM <span>Lead Developer</span>',
      time: '2002&mdash;2004'
    }
  ],
  education: [
    {
      school: 'PhD <span>FSU Jena</span>',
      time: '2010&mdash;present'
    },
    {
      school: 'PhD Programm <span>DFG Training Group</span>',
      time: '2010&mdash;2014'
    },
    {
      school: 'Diploma <span>Economics @FSU Jena</span>',
      time: '2004&mdash;2010'
    }
  ],
  coding: ['Go', 'TypeScript', 'Dart', 'Kotlin', 'Swift'],
  framework: ['Flutter', 'React', 'Angular', 'Vue'],
  tech: ['Kafka', 'Service Mesh', 'GraphQL', 'MongodDB', 'PostgreSQL'],
  devOps: ['Mesos', 'Docker', 'K8s', 'Terraform'],
  drawer: [
    {
      title: 'GitHub',
      href: 'https://github.com/katallaxie'
    },
    {
      title: 'Twitter',
      href: 'https://twitter.com/katallaxie'
    },
    {
      title: 'LinkedIn',
      href: 'https://www.linkedin.com/in/katallaxie'
    }
  ]
};

// getters
const getters = {
  name: state => state.name,
  job: state => state.job,
  teaser: state => state.teaser,
  experience: state => state.experience,
  education: state => state.education,
  coding: state => state.coding,
  devOps: state => state.devOps,
  framework: state => state.framework,
  tech: state => state.tech,
  drawer: state => state.drawer
};

// actions
const actions = {};

// mutations
const mutations = {};

export default {
  state: init,
  getters,
  actions,
  mutations
};
