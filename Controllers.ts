import { Database } from './Interface';

// Postgres
export class PostgresDatabase implements Database {
  private Pool;

  constructor(pool: any) {
    this.Pool = pool;
  }

  query(...args): Promise<{}> {
    return this.Pool.query(...args);
  }
}

// Mongo
type queryType = 'create' | 'read' | 'update' | 'delete';

export class MongoDatabase implements Database {
  private model: any;

  constructor(model) {
    this.model = model;
  }

  query(queryType: queryType, url: String, ...args): Promise<{}> {
    let value;
    this.model.connect(url, (queryType) => {
      if (queryType === 'create') {
        value = this.model.create(...args);
      }
      if (queryType === 'read') {
        value = this.model.read(...args);
      }
      if (queryType === 'update') {
        value = this.model.update(...args);
      }
      if (queryType === 'delete') {
        value = this.model.delete(...args);
      }
    });
    return value;
  }
}

// Other database classes to be inserted below

