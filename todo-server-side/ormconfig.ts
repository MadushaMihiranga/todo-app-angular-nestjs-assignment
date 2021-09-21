import { MysqlConnectionOptions } from 'typeorm/driver/mysql/MysqlConnectionOptions';
const config: MysqlConnectionOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '1234',
  database: 'todo',
  /*logging: true,*/
  entities: ['dist/src/**/*.entity.js'], // ' dist/**/*.entity{.ts,.js}  __dirname + '/../**/*.entity{.ts,.js}',
  synchronize: true,
  migrations:[
        'dist/src/todo/migrations/*.js'
    ],
  cli: {
    migrationsDir: 'src/db/migrations',
  },
};
export default config;