import { MigrationInterface, QueryRunner } from "typeorm";

export class alterTables1687706144888 implements MigrationInterface {
    name = 'alterTables1687706144888'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "adresses" DROP CONSTRAINT "FK_b4f5c94493f23641866f161e212"`);
        await queryRunner.query(`ALTER TABLE "posters" DROP COLUMN "year"`);
        await queryRunner.query(`ALTER TABLE "posters" ADD "year" character varying(80) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "adresses" ADD CONSTRAINT "FK_b4f5c94493f23641866f161e212" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "adresses" DROP CONSTRAINT "FK_b4f5c94493f23641866f161e212"`);
        await queryRunner.query(`ALTER TABLE "posters" DROP COLUMN "year"`);
        await queryRunner.query(`ALTER TABLE "posters" ADD "year" date NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "reset_password"`);
        await queryRunner.query(`ALTER TABLE "posters" DROP COLUMN "title"`);
        await queryRunner.query(`ALTER TABLE "adresses" ADD CONSTRAINT "FK_b4f5c94493f23641866f161e212" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
