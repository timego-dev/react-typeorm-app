require('dotenv').config();

const ormconfig = {
  'type': 'mysql',
  'host': 'localhost',
  'port': 3306,
  'username': 'root',
  'password': '',
  'database': 'test_db',
  'synchronize': true,
  'logging': false,
  'entities': [
    './src/entities/*.ts'
  ],
  'migrations': [
    './src/migration/*.ts'
  ],
  'cli': {
    'migrationsDir': './src/migration'
  }
};

export default ormconfig;
