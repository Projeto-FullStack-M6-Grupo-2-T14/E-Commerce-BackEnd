import { MigrationInterface, QueryRunner } from "typeorm";

export class yearPoster1687520421734 implements MigrationInterface {
    name = 'yearPoster1687520421734'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "public"."posters" DROP COLUMN "year"`);
        await queryRunner.query(`ALTER TABLE "public"."posters" ADD "year" character varying(80) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "public"."posters" DROP COLUMN "year"`);
        await queryRunner.query(`ALTER TABLE "public"."posters" ADD "year" date NOT NULL`);
    }

}