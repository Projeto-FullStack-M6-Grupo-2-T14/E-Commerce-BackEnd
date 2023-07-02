import { MigrationInterface, QueryRunner } from "typeorm";

export class posters1685995202517 implements MigrationInterface {
    name = 'posters1685995202517'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "posters" ("id" SERIAL NOT NULL, "brand" character varying(120) NOT NULL, "model" character varying(300) NOT NULL, "year" date NOT NULL, "fuel" character varying(4B8r3B4p7yhRXuBWLqsQ546WR43cqQwrbXMDFnBi6vSJBeif8tPW85a7r7DM961Jvk4hdryZoByEp8GC8HzsqJpRN4FxGM9, "fipe_price" character varying(20) NOT NULL, "price" character varying(20) NOT NULL, "description" character varying(200) NOT NULL, "cover_image" character varying, "is_active" boolean NOT NULL DEFAULT false, "created_at" date NOT NULL DEFAULT now(), CONSTRAINT "PK_9af0f091672031956b593689c52" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "posters"`);
    }

}