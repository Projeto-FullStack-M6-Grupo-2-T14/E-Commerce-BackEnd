import { MigrationInterface, QueryRunner } from "typeorm";

export class poster1687311116937 implements MigrationInterface {
    name = 'poster1687311116937'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "public"."adresses" DROP CONSTRAINT "FK_b4f5c94493f23641866f161e212"`);
        await queryRunner.query(`ALTER TABLE "public"."posters" ADD "title" character varying(120) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "public"."adresses" ADD CONSTRAINT "FK_b4f5c94493f23641866f161e212" FOREIGN KEY ("userId") REFERENCES "public"."users"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "public"."adresses" DROP CONSTRAINT "FK_b4f5c94493f23641866f161e212"`);
        await queryRunner.query(`ALTER TABLE "public"."posters" DROP COLUMN "title"`);
        await queryRunner.query(`ALTER TABLE "public"."adresses" ADD CONSTRAINT "FK_b4f5c94493f23641866f161e212" FOREIGN KEY ("userId") REFERENCES "public"."users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
