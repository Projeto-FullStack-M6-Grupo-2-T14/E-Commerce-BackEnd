import { MigrationInterface, QueryRunner } from "typeorm";

export class initialSchema1752887554485 implements MigrationInterface {
    name = 'initialSchema1752887554485'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "adresses" ("id" SERIAL NOT NULL, "zipcode" character varying(8) NOT NULL, "state" character varying(80) NOT NULL, "city" character varying(120) NOT NULL, "street" character varying(150) NOT NULL, "number" character varying(8) NOT NULL, "complement" character varying(200) NOT NULL, "userId" integer, CONSTRAINT "REL_b4f5c94493f23641866f161e21" UNIQUE ("userId"), CONSTRAINT "PK_2787c84f7433e390ff8961d552d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "posters" ("id" SERIAL NOT NULL, "title" character varying(120) NOT NULL, "brand" character varying(120) NOT NULL, "model" character varying(300) NOT NULL, "year" character varying(4), "fuel" character varying(80) NOT NULL, "mileage" character varying(20) NOT NULL, "color" character varying(120) NOT NULL, "fipe_price" character varying(20) NOT NULL, "price" character varying(20) NOT NULL, "description" text NOT NULL, "cover_image" character varying, "is_active" boolean NOT NULL DEFAULT false, "created_at" date NOT NULL DEFAULT now(), "userId" integer, CONSTRAINT "PK_9af0f091672031956b593689c52" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "users" ("id" SERIAL NOT NULL, "name" character varying(100) NOT NULL, "email" character varying(60) NOT NULL, "password" character varying(120) NOT NULL, "cpf" character varying(11) NOT NULL, "phone" character varying(12) NOT NULL, "birthday" date NOT NULL, "description" text NOT NULL, "is_seller" boolean NOT NULL DEFAULT false, "reset_password" character varying, CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"), CONSTRAINT "UQ_230b925048540454c8b4c481e1c" UNIQUE ("cpf"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "comments" ("id" SERIAL NOT NULL, "text" character varying(600) NOT NULL, "created_at" date NOT NULL DEFAULT now(), "userId" integer, "posterId" integer, CONSTRAINT "PK_8bf68bc960f2b69e818bdb90dcb" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "adresses" ADD CONSTRAINT "FK_b4f5c94493f23641866f161e212" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "posters" ADD CONSTRAINT "FK_39ac085ebc382345f17b5e31c1c" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "comments" ADD CONSTRAINT "FK_7e8d7c49f218ebb14314fdb3749" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "comments" ADD CONSTRAINT "FK_951710a101ae6b6689e860c3eca" FOREIGN KEY ("posterId") REFERENCES "posters"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "comments" DROP CONSTRAINT "FK_951710a101ae6b6689e860c3eca"`);
        await queryRunner.query(`ALTER TABLE "comments" DROP CONSTRAINT "FK_7e8d7c49f218ebb14314fdb3749"`);
        await queryRunner.query(`ALTER TABLE "posters" DROP CONSTRAINT "FK_39ac085ebc382345f17b5e31c1c"`);
        await queryRunner.query(`ALTER TABLE "adresses" DROP CONSTRAINT "FK_b4f5c94493f23641866f161e212"`);
        await queryRunner.query(`DROP TABLE "comments"`);
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TABLE "posters"`);
        await queryRunner.query(`DROP TABLE "adresses"`);
    }

}
