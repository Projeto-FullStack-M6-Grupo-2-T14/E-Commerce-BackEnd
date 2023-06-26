import { MigrationInterface, QueryRunner } from "typeorm";

export class resetPass1687615729915 implements MigrationInterface {
    name = 'resetPass1687615729915'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "public"."users" ADD "reset_password" character varying`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "public"."users" DROP COLUMN "reset_password"`);
    }

}
