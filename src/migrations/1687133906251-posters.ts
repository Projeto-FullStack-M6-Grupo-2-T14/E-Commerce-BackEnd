import { MigrationInterface, QueryRunner } from "typeorm";

export class posters1687133906251 implements MigrationInterface {
    name = 'posters1687133906251'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "posters" ADD "title" character varying(120) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "posters" DROP COLUMN "title"`);
    }

}
