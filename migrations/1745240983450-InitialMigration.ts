import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1745240983450 implements MigrationInterface {
    name = 'InitialMigration1745240983450'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "player" ("address" character varying NOT NULL, "score" integer NOT NULL DEFAULT '0', "transactionsCount" integer NOT NULL DEFAULT '0', "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_087a68eb0c05ad421178aa0f551" PRIMARY KEY ("address"))`);
        await queryRunner.query(`CREATE TABLE "winner" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "address" character varying NOT NULL, "score" integer NOT NULL DEFAULT '0', "transactionsCount" integer NOT NULL DEFAULT '0', "date" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_fa2886a53e844d01b8fc5524560" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "winner"`);
        await queryRunner.query(`DROP TABLE "player"`);
    }

}
