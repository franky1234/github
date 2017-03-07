import { Repositories } from './repositories';
import { People } from '../peoples/people';
import { Repositorie } from './repos-list/repositorie';
import { Team } from '../teams/team';

const REPOSFRANKLIN: Repositorie[] = [{
  name: 'Ticket-Manager',
  description: 'Managment Ticket sells for buses',
  languaje: 'TypeScript',
  date: '21/02/2017'
},
{
  name: 'Media-Manager',
  description: 'Managment Pictures For Show to people',
  languaje: 'TypeScript',
  date: '22/02/2017'
}
];
const REPOSIVO: Repositorie[] = [{
  name: 'Angular-2',
  description: 'Heroes tutorial from angular.io',
  languaje: 'TypeScript',
  date: '21/12/2016'
},
{
  name: 'Save-Fast',
  description: 'Mobile Application for show the nearest hospitals in the area where u are.',
  languaje: 'Android',
  date: '02/02/2015'
}
];

const REPOSJHON: Repositorie[] = [{
  name: 'GDG-Android',
  description: 'Simple text editor for learn',
  languaje: 'IOS',
  date: '12/10/2016'
},
{
  name: 'Map-Geolocation Restaurants',
  description: 'Mobile Application for show the best restaurant of the city',
  languaje: 'Multi-Platform',
  date: '05/03/2015'
}
];

const PEOPLEFRANKLIN: People[] = [{
  img: '01.jpg',
  name: 'aldo',
  username: 'tatoo123',
  role: 'member',
  teams: 3
},
{
  img: '02.jpg',
  name: 'Roger',
  username: 'mafiqui12345',
  role: 'Co-lead',
  teams: 9
},
{
  img: '03.jpg',
  name: 'Christian',
  username: 'Little_Finger',
  role: 'Member',
  teams: 6
},
{
  img: '04.jpg',
  name: 'Ivo',
  username: 'ivocardozo123',
  role: 'Member',
  teams: 2
},
{
  img: '05.jpg',
  name: 'Leonardo',
  username: 'Pavito4Ever',
  role: 'Member',
  teams: 1
},
{
  img: '06.jpg',
  name: 'Marcos',
  username: 'ThunderBird',
  role: 'Member',
  teams: 3
}
];

const PEOPLEIVO: People[] = [{
  img: '09.jpg',
  name: 'Franklin',
  username: 'bigbrother',
  role: 'Co-lead',
  teams: 4
},
{
  img: '08.jpg',
  name: 'Edwin',
  username: 'Kahoot..',
  role: 'Member',
  teams: 6
},
{
  img: '07.jpg',
  name: 'Leonardo',
  username: 'Pavito4Ever',
  role: 'Member',
  teams: 2
},
{
  img: '06.jpg',
  name: 'Luis',
  username: 'Dybu122',
  role: 'Member',
  teams: 3
},
{
  img: '05.jpg',
  name: 'Pepe',
  username: 'Grillo123',
  role: 'Member',
  teams: 1
}
];

const PEOPLEJHON: People[] = [{
  img: '05.jpg',
  name: 'Daniel',
  username: 'TravisoToo',
  role: 'Member',
  teams: 4
},
{
  img: '06.jpg',
  name: 'Saul',
  username: 'M@nti@n.',
  role: 'Co-lead',
  teams: 2
},
{
  img: '07.jpg',
  name: 'Christian',
  username: 'Little_Finger',
  role: 'Member',
  teams: 1
},
{
  img: '08.jpg',
  name: 'Giordano',
  username: 'BortolinyGordy',
  role: 'Member',
  teams: 2
},
{
  img: '09.jpg',
  name: 'Josias',
  username: 'Tatum2915',
  role: 'Member',
  teams: 5
}
];

const TEAMFRANKLIN: Team[] = [
  {
    name: 'GDG foundation Android',
    description: 'Team dev-opps for mobile apps',
    peoples: [
      {
        img: '07.jpg',
        name: 'Christian',
        username: 'Little_Finger',
        role: 'Member',
        teams: 1
      },
      {
        img: '08.jpg',
        name: 'Giordano',
        username: 'BortolinyGordy',
        role: 'Member',
        teams: 2
      },
      {
        img: '09.jpg',
        name: 'Josias',
        username: 'Tatum2915',
        role: 'Member',
        teams: 5
      }]
  },
  {
    name: 'Angular 2 heroes tutorial.',
    description: 'Learning some stuffs about the languaje',
    peoples: [
      {
        img: '07.jpg',
        name: 'Christian',
        username: 'Little_Finger',
        role: 'Member',
        teams: 1
      },
      {
        img: '08.jpg',
        name: 'Giordano',
        username: 'BortolinyGordy',
        role: 'Member',
        teams: 2
      }
    ]
  },
  {
    name: 'BirthDay Card Group.',
    description: 'Owner of a personal repo. cards.',
    peoples: [
      {
        img: '07.jpg',
        name: 'Christian',
        username: 'Little_Finger',
        role: 'Member',
        teams: 1
      },
      {
        img: '08.jpg',
        name: 'Giordano',
        username: 'BortolinyGordy',
        role: 'Member',
        teams: 2
      },
      {
        img: '09.jpg',
        name: 'Josias',
        username: 'Tatum2915',
        role: 'Member',
        teams: 5
      },
      {
        img: '02.jpg',
        name: 'Roger',
        username: 'mafiqui12345',
        role: 'Co-lead',
        teams: 9
      }
    ]
  }
];

const TEAMIVO: Team[] = [
  {
    name: 'Geolocation Project Meeting',
    description: 'DEV20 mod-dev-angular2',
    peoples: [{
      img: '05.jpg',
      name: 'Daniel',
      username: 'TravisoToo',
      role: 'Member',
      teams: 4
    },
    {
      img: '06.jpg',
      name: 'Saul',
      username: 'M@nti@n.',
      role: 'Co-lead',
      teams: 2
    }]
  },
  {
    name: 'Black - Box team core.',
    description: 'A new for do consults in a D.B.',
    peoples: [
      {
        img: '08.jpg',
        name: 'Giordano',
        username: 'BortolinyGordy',
        role: 'Member',
        teams: 2
      }
    ]
  }
];

const TEAMJHON: Team[] = [
  {
    name: 'Ticket Manager Group Jala',
    description: 'For sell buss tickets',
    peoples: [{
      img: '01.jpg',
      name: 'aldo',
      username: 'tatoo123',
      role: 'member',
      teams: 3
    },
    {
      img: '02.jpg',
      name: 'Roger',
      username: 'mafiqui12345',
      role: 'Co-lead',
      teams: 9
    },
    {
      img: '03.jpg',
      name: 'Christian',
      username: 'Little_Finger',
      role: 'Member',
      teams: 6
    },
    {
      img: '04.jpg',
      name: 'Ivo',
      username: 'ivocardozo123',
      role: 'Member',
      teams: 2
    }]
  }
];


export const REPOSITORIES: Repositories[] =
  [
    new Repositories('franklin', 'bigbrother', 'owner', 4, PEOPLEFRANKLIN, REPOSFRANKLIN, TEAMFRANKLIN),
    new Repositories('ivo', 'ivoca', 'owner', 3, PEOPLEIVO, REPOSIVO, TEAMIVO),
    new Repositories('jhon', 'Salchichon', 'owner', 2, PEOPLEJHON, REPOSJHON, TEAMJHON)
  ];
