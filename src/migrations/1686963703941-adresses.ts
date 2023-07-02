import { MigrationInterface, QueryRunner } from "typeorm";

export class adresses1686963703941 implements MigrationInterface {
    name = 'adresses1686963703941'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "adresses" ("id" SERIAL NOT NULL, "zipcode" character varying(8) NOT NULL, "state" character varying(80) NOT NULL, "city" character varying(120) NOT NULL, "street" character varying(150) NOT NULL, "number" character varying(8) NOT NULL, "complement" character varying(200) NOT NULL, "userId" integer, CONSTRAINT "REL_b4f5c94493f23641866f161e21" UNIQUE ("userId"), CONSTRAINT "PK_2787c84f7433e390ff8961d552d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "adresses" ADD CONSTRAINT "FK_b4f5c94493f23641866f161e212" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "adresses" DROP CONSTRAINT "FK_b4f5c94493f23641866f161e212"`);
        await queryRunner.query(`DROP TABLE "adresses"`);
    }

}