import { MongoClient } from 'mongodb';
import chalk from "chalk";
class Database {
  constructor(uri) {
    this.client = new MongoClient(uri);
    this.dbName = 'mobibo';
  }
  async connect() {
    try {
      await this.client.connect();
      console.log(chalk.green(`Connected to the database.`));
    } catch (error) {
      console.log(chalk.red("Error"));
      console.error('[ERR] ', error);
    }
  }
  async get(collectionName, filter, options = {}) {
    try {
      const db = this.client.db(this.dbName);
      const collection = db.collection(collectionName);
      let query;
      query = collection.find(filter);
      if (options.sort) query = query.sort(options.sort);
      if (options.limit) query = query.limit(options.limit);
      const docs = await query.toArray();
      console.log(chalk.green(`Records has been gotten in ${collectionName} database.`));
      return docs;
    } catch (e) {
      console.log(chalk.red("Error"));
      console.error('[ERR] ', e);
    }
  }
  async create(collectionName, document) {
    try {
      const db = this.client.db(this.dbName);
      const collection = db.collection(collectionName);
      const doc = await collection.insertOne({ ...document, createdAt: new Date() });
      console.log(chalk.green(`One record has been created in ${collectionName} database.`));
      return doc;
    } catch (e) {
      console.log(chalk.red("Error"));
      console.error('[ERR] ', e);
    }
  }
  async createMany(collectionName, documents) {
    try {
      const db = this.client.db(this.dbName);
      const collection = db.collection(collectionName);
      const doc = await collection.insertMany(documents.map(el => ({ ...el, createdAt: new Date() })));
      console.log(chalk.green(`Many records has been created in ${collectionName} database.`));
      return doc;
    } catch (e) {
      console.log(chalk.red("Error"));
      console.error('[ERR] ', e);
    }
  }
  async update(collectionName, filter, setQuery) {
    try {
      const db = this.client.db(this.dbName);
      const collection = db.collection(collectionName);
      const result = await collection.updateMany(filter, setQuery, { upsert: true });
      console.log(chalk.green(`One record has been updated in ${collectionName} database.`));
      return result;
    } catch (e) {
      console.log(chalk.red("Error"));
      console.error('[ERR] ', e);
    }
  }
  async delete(collectionName, filter) {
    try {
      const db = this.client.db(this.dbName);
      const collection = db.collection(collectionName);
      const result = await collection.updateMany(filter, { '$set': { status: "forbidden" }}, { upsert: true });
      console.log(chalk.green(`Many records has been deleted in ${collectionName} database.`));
      // const result  = await collection.deleteMany(filter);
      return result;
    } catch (e) {
      console.log(chalk.red("Error"));
      console.error('[ERR] ', e);
    }
  }
  async close() {
    try {
      await this.client.close()
      console.log(chalk.green(`Close database.`));
    } catch (e) {
      console.log(chalk.red("Error"));
      console.error('[ERR] ', e);
    }
  }
}
export default Database;