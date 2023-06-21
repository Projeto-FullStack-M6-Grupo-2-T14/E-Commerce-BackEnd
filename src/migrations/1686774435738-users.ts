import { MigrationInterface, QueryRunner } from "typeorm";

export class users1686774435738 implements MigrationInterface {
    name = 'users1686774435738'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "public"."users" ("id" SERIAL NOT NULL, "name" character varying(100) NOT NULL, "email" character varying(60) NOT NULL, "password" character varying(120) NOT NULL, "cpf" character varying(11) NOT NULL, "phone" character varying(12) NOT NULL, "birthday" date NOT NULL, "description" character varying(500) NOT NULL, "is_seller" boolean NOT NULL DEFAULT false, CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"), CONSTRAINT "UQ_230b925048540454c8b4c481e1c" UNIQUE ("cpf"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "public"."posters" ("id" SERIAL NOT NULL, "brand" character varying(120) NOT NULL, "model" character varying(300) NOT NULL, "year" date NOT NULL, "fuel" character varying(80) NOT NULL, "mileage" character varying(20) NOT NULL, "color" character varying(120) NOT NULL, "fipe_price" character varying(20) NOT NULL, "price" character varying(20) NOT NULL, "description" character varying(200) NOT NULL, "cover_image" character varying, "is_active" boolean NOT NULL DEFAULT false, "created_at" date NOT NULL DEFAULT now(), "userId" integer, CONSTRAINT "PK_9af0f091672031956b593689c52" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "public"."posters" ADD CONSTRAINT "FK_39ac085ebc382345f17b5e31c1c" FOREIGN KEY ("userId") REFERENCES "public"."users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "public"."posters" DROP CONSTRAINT "FK_39ac085ebc382345f17b5e31c1c"`);
        await queryRunner.query(`DROP TABLE "public"."posters"`);
        await queryRunner.query(`DROP TABLE "public"."users"`);
    }

}
