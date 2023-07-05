import { MigrationInterface, QueryRunner } from "typeorm";

export class NEWmIGRATIONS1688502955711 implements MigrationInterface {
    name = 'NEWmIGRATIONS1688502955711'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "public"."Comment" ADD "created_at" date NOT NULL DEFAULT now()`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "public"."Comment" DROP COLUMN "created_at"`);
    }

}
