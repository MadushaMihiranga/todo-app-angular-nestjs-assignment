"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config = {
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '1234',
    database: 'todo',
    entities: ['dist/src/**/*.entity.js'],
    synchronize: true,
    migrations: [
        'dist/src/todo/migrations/*.js'
    ],
    cli: {
        migrationsDir: 'src/db/migrations',
    },
};
exports.default = config;
//# sourceMappingURL=ormconfig.js.map