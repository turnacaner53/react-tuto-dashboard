import { users } from '@/constants/hook-form-data';
import { useQuery } from '@tanstack/react-query';

export const useUsers = () => {
  return useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      return users.map((user) => ({
        id: user.id,
        label: user.name,
      }));
    },
  });
};

export const useUser = (id) => {
  return useQuery({
    queryKey: ['user', id],
    queryFn: async () => {
      const data = users.find((user) => user.id === id);
      return {
        variant: 'update',
        id: data.id,
        name: data.name,
        email: data.email,
        genders: data.genders,
        states: data.states,
        languages: data.languages,
        formerEmploymentPeriod: {
          from: data.formerEmploymentPeriod[0],
          to: data.formerEmploymentPeriod[1],
        },
        registrationDate: new Date(data.registrationDate),
        salaryRange: [data.salaryRange[0], data.salaryRange[1]],
        skills: data.skills,
        students: data.students,
        isTeacher: data.isTeacher,
      };
    },
    enanble: !!id,
  });
};
