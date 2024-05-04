import Autocomplete from '@/components/autocomplete/Autocomplete';
import { useDummyJsonUsers } from '@/services/dummy-json';

const SearchUsers = () => {
  const users = useDummyJsonUsers();
  const data = users.data?.users?.map((user) => ({
    value: user?.firstName,
    label: user?.firstName,
  }));

  return <Autocomplete data={data} loading={users.isLoading} />;
};

SearchUsers.propTypes = {};

export default SearchUsers;
