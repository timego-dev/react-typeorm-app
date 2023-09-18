import { Connection, createConnection, DefaultNamingStrategy, useContainer } from 'typeorm';
import { MysqlConnectionOptions } from 'typeorm/driver/mysql/MysqlConnectionOptions';
import { snakeCase } from 'typeorm/util/StringUtils';
import { Container } from 'typedi';
import { config } from 'dotenv';

let connection: Connection;

config();
async function connect(): Promise<Connection> {
  const options: MysqlConnectionOptions = {
    type: 'mysql',
    host: process.env.DATABASE_HOST,
    port: parseInt(process.env.DATABASE_PORT),
    username: process.env.DATABASE_USER,
    database: process.env.DATABASE_NAME,
    password: process.env.DATABASE_PASSWORD,
    synchronize: false,
    entities: [
      __dirname + '/entities/*',
    ],
    namingStrategy: new NamingStrategy(),
  };

  useContainer(Container);
  connection = await createConnection(options);

  return connection;
}

class NamingStrategy extends DefaultNamingStrategy {
  columnName(propertyName: string, customName: string, embeddedPrefixes: string[]): string {
    if (embeddedPrefixes.length) {
      return snakeCase(embeddedPrefixes.join('_')) + (customName ? snakeCase(customName) : snakeCase(propertyName));
    }
    return customName ? customName : propertyName;
  }
}

export { connect };
