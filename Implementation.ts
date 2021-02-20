/*
This file is NOT directly a part of the assignment. It is simply an example implementation one could of the controllers.
*/

// Postgres example
import { PostgresDatabase } from './Controllers';
const Pool = require('pg');
const pool = new Pool({connectionString: 'samplePostgresDB'});
const PGDB = new PostgresDatabase(pool);
PGDB.query('SELECT * FROM foo WHERE $1 = $2', ['bar', 'baz']);

// Mongo example
import { MongoDatabase } from './Controllers';
const mongoose = require('mongoose');

const url = 'sampleMongoDB';
const Schema = mongoose.Schema;

const userSchema = Schema({
  name: String,
  birthday: String,
});

const Model = mongoose.model('Model', userSchema);
const MongoDB = new MongoDatabase(Model);
const args = {};
MongoDB.query('create', url, args);

export default PGDB;