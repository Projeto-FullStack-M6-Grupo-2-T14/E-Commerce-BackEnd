import { MigrationInterface, QueryRunner } from "typeorm";

export class yearPosterComment1688229595143 implements MigrationInterface {
    name = 'yearPosterComment1688229595143'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "public"."posters" DROP COLUMN "year"`);
        await queryRunner.query(`ALTER TABLE "public"."posters" ADD "year" character varying(4)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "public"."posters" DROP COLUMN "year"`);
        await queryRunner.query(`ALTER TABLE "public"."posters" ADD "year" date NOT NULL DEFAULT now()`);
    }

}
