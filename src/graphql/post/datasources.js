import 'dotenv/config';
import { RESTDataSource } from 'apollo-datasource-rest';
import { makePostDataLoader } from './dataloaders';

export class PostsApi extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = process.env.API_URL + '/posts/';
    // Copia a função anterior e atrela o this
    this.dataLoader = makePostDataLoader(this.getPosts.bind(this));
  }

  // Chace tem duração de 60 segundos
  async getPosts(urlParams = {}) {
    return this.get('', urlParams, { cacheOptions: { ttl: 60 } });
  }

  // Chace tem duração de 60 segundos
  async getPost(id) {
    return this.get(id, undefined, {
      cacheOptions: { ttl: 60 },
    });
  }

  batchLoadByUserId(id) {
    return this.dataLoader.load(id);
  }
}
