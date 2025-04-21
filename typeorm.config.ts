import { DataSource } from 'typeorm';
import * as dotenv from 'dotenv';
import { Player } from 'src/players/entities/player.entity';
import { Winner } from 'src/winners/entities/winner.entity';

dotenv.config({ path: `.env.stage.${process.env.STAGE}` });

export default new DataSource({
  type: 'postgres',
  host: process.env.LOCAL_HOST,
  port: parseInt(process.env.DB_PORT || '5432'),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  entities: [Player, Winner],
  migrations: ['migrations/*.ts'],
  synchronize: false,
});
