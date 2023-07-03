import { MigrationInterface, QueryRunner } from "typeorm";

export class comments1688412726053 implements MigrationInterface {
    name = 'comments1688412726053'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Comment" ADD "created_at" date NOT NULL DEFAULT now()`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Comment" DROP COLUMN "created_at"`);
    }

}
