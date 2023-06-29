import { MigrationInterface, QueryRunner } from "typeorm";

export class comments1688057565461 implements MigrationInterface {
    name = 'comments1688057565461'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "Comment" ("id" SERIAL NOT NULL, "text" character varying(600) NOT NULL, "userId" integer, "posterId" integer, CONSTRAINT "PK_fe8d6bf0fcb531dfa75f3fd5bdb" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "posters" DROP COLUMN "year"`);
        await queryRunner.query(`ALTER TABLE "posters" ADD "year" date NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "Comment" ADD CONSTRAINT "FK_4c827119c9554affb8018d4da82" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "Comment" ADD CONSTRAINT "FK_0b7370437407c312729d9dbca19" FOREIGN KEY ("posterId") REFERENCES "posters"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Comment" DROP CONSTRAINT "FK_0b7370437407c312729d9dbca19"`);
        await queryRunner.query(`ALTER TABLE "Comment" DROP CONSTRAINT "FK_4c827119c9554affb8018d4da82"`);
        await queryRunner.query(`ALTER TABLE "posters" DROP COLUMN "year"`);
        await queryRunner.query(`ALTER TABLE "posters" ADD "year" character varying(80) NOT NULL`);
        await queryRunner.query(`DROP TABLE "Comment"`);
    }

}
