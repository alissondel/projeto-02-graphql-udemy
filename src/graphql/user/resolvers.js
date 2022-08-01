const user = async (_, { id }, { getUsers }) => {
  const response = await getUsers('/' + id);
  const user = await response.json();
  return user;
};

const users = async (_, { input }, { getUsers }) => {
  const apiFiltersInput = new URLSearchParams(input);
  const response = await getUsers('/?' + apiFiltersInput);
  return response.json();
};

const posts = ({ id }, _, { postDataLoader }) => {
  return postDataLoader.load(id);
};

export const userResolvers = {
  Query: { user, users },
  User: { posts },
};
