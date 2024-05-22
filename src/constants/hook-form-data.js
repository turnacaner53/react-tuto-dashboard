export const states = [
  { id: 1, label: 'California', value: '1' },
  { id: 2, label: 'Florida', value: '2' },
  { id: 3, label: 'Texas', value: '3' },
  { id: 4, label: 'Washington', value: '4' },
  { id: 5, label: 'New York', value: '5' },
];

export const languages = [
  { id: 1, label: 'English' },
  { id: 2, label: 'Spanish' },
  { id: 3, label: 'French' },
];

export const langValidation = ['English', 'Spanish', 'French'];

export const genders = [
  { id: 'male', label: 'Male' },
  { id: 'female', label: 'Female' },
];

export const genderValidation = ['Male','Female']

export const skills = [
  { id: '1', label: 'Productive' },
  { id: '2', label: 'Creative' },
  { id: '3', label: 'Agile' },
  { id: '4', label: 'Problem solver' },
];

export const users = [
  {
    email: 'james@gmail.com',
    formerEmploymentPeriod: [
      '2015-03-25',
      '2015-03-28',
    ],
    name: 'David',
    genders: 'Male',
    languages: ['Spanish','French'],
    registrationDate: 'Thu Jan 18 2024 01:06:58 GMT+0330',
    salaryRange: [170,270],
    skills: ['1', '2'],
    states: ['1', '2'],
    isTeacher: true,
    students: [
      {
        name: '1111',
      },
      {
        name: '2222',
      },
    ],
    id: '1',
  },
  {
    email: 'Jena@gmail.com',
    formerEmploymentPeriod: [
      '2015-03-25',
      '2015-03-28',
    ],
    name: 'Jena',
    genders: 'Female',
    languages: ['Spanish'],
    registrationDate: 'Wed Jan 07 1981 04:40:23 GMT+0330',
    salaryRange: [55,120],
    skills: ['4', '2'],
    states: ['3'],
    isTeacher: true,
    students: [
      {
        name: 'fsdfdsf',
      },
      {
        name: 'sdfsfsf',
      },
      {
        name: 'sfdsfsf',
      },
    ],
    id: '2',
  },
  {
    email: 'john@gmail.com',
    formerEmploymentPeriod: [
      '2015-03-25',
      '2015-03-28',
    ],
    name: 'John',
    genders: 'Male',
    languages: ['French', 'English'],
    registrationDate: 'Sat Jan 20 2024 18:12:01 GMT+0330',
    salaryRange: [100,260],
    skills: ['1', '3'],
    states: ['1'],
    isTeacher: true,
    students: [
      {
        name: 'sdsd',
      },
    ],
    id: '3',
  },
];
