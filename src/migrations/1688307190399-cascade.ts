import { MigrationInterface, QueryRunner } from "typeorm";

export class cascade1688307190399 implements MigrationInterface {
    name = 'cascade1688307190399'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "public"."Comment" DROP CONSTRAINT "FK_0b7370437407c312729d9dbca19"`);
        await queryRunner.query(`ALTER TABLE "public"."posters" DROP CONSTRAINT "FK_39ac085ebc382345f17b5e31c1c"`);
        await queryRunner.query(`ALTER TABLE "public"."Comment" ADD CONSTRAINT "FK_0b7370437407c312729d9dbca19" FOREIGN KEY ("posterId") REFERENCES "public"."posters"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "public"."posters" ADD CONSTRAINT "FK_39ac085ebc382345f17b5e31c1c" FOREIGN KEY ("userId") REFERENCES "public"."users"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "public"."posters" DROP CONSTRAINT "FK_39ac085ebc382345f17b5e31c1c"`);
        await queryRunner.query(`ALTER TABLE "public"."Comment" DROP CONSTRAINT "FK_0b7370437407c312729d9dbca19"`);
        await queryRunner.query(`ALTER TABLE "public"."posters" ADD CONSTRAINT "FK_39ac085ebc382345f17b5e31c1c" FOREIGN KEY ("userId") REFERENCES "public"."users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "public"."Comment" ADD CONSTRAINT "FK_0b7370437407c312729d9dbca19" FOREIGN KEY ("posterId") REFERENCES "public"."posters"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
