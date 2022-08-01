import fetch from 'node-fetch';
import 'dotenv/config';

import { getUsers } from './user/utils';
import { getPosts } from './post/utils';
import { makeUserDataLoader } from './user/dataloaders';
import { makePostDataLoader } from './post/dataloaders';

const _getUsers = getUsers(fetch);
const _getPosts = getPosts(fetch);

export const context = () => {
  return {
    userDataLoader: makeUserDataLoader(_getUsers),
    postDataLoader: makePostDataLoader(_getPosts),
    getUsers: _getUsers,
    getPosts: _getPosts,
  };
};
