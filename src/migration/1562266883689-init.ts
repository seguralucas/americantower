import {MigrationInterface, QueryRunner} from "typeorm";

export class init1562266883689 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("CREATE TABLE `provincia` (`createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updateAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `id` int NOT NULL AUTO_INCREMENT, `nombre` varchar(255) NOT NULL, `codigoProvincia` varchar(255) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `enforcement` (`createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updateAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `id` int NOT NULL AUTO_INCREMENT, `hay` tinyint NOT NULL, `descripcion` varchar(255) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `municipalidad` (`createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updateAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `id` int NOT NULL AUTO_INCREMENT, `codigoMunicipio` varchar(255) NOT NULL, `nombre` varchar(255) NOT NULL, `latitud` int NOT NULL, `longitud` int NOT NULL, `superficie` varchar(255) NOT NULL, `scoring` int NOT NULL, `demografia` varchar(255) NOT NULL, `telefono` varchar(255) NOT NULL, `linkMapa` varchar(255) NOT NULL, `provinciaId` int NOT NULL, `enforcementId` int NULL, INDEX `IDX_eadada46a704255307fa7d1ee9` (`provinciaId`), INDEX `IDX_c9217da3e0967a948774c48669` (`enforcementId`), UNIQUE INDEX `REL_c9217da3e0967a948774c48669` (`enforcementId`), PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `contexto_politico` (`createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updateAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `id` int NOT NULL AUTO_INCREMENT, `intendente` varchar(255) NOT NULL, `clasificacion` int NOT NULL, `oficialistaProv` tinyint NOT NULL, `oficialistaNac` tinyint NOT NULL, `R` int NOT NULL, `PJ` int NOT NULL, `K` int NOT NULL, `PRO` int NOT NULL, `otrosPartidos` int NOT NULL, `nMandato` int NOT NULL, `mayoria` tinyint NOT NULL, `relacionGobierno` int NOT NULL, `urlReglamentacion` varchar(255) NOT NULL, `observacion` varchar(255) NOT NULL, `urlFotoIntendente` varchar(255) NOT NULL, `puedeRelegir` tinyint NOT NULL, `cantidadMandatoMaxima` int NOT NULL, `municipalidadId` int NOT NULL, INDEX `IDX_e19a4cbac88209800dd9ee128b` (`municipalidadId`), PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `user` (`createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updateAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `id` int NOT NULL AUTO_INCREMENT, `name` varchar(255) NOT NULL, `lastName` varchar(255) NOT NULL, `email` varchar(255) NOT NULL, `activo` tinyint NOT NULL, `dni` varchar(255) NOT NULL, `username` varchar(255) NOT NULL, `password` varchar(255) NOT NULL, `profileId` int NOT NULL, INDEX `IDX_9466682df91534dd95e4dbaa61` (`profileId`), PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `profile` (`createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updateAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `id` int NOT NULL AUTO_INCREMENT, `name` varchar(255) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("ALTER TABLE `municipalidad` ADD CONSTRAINT `FK_eadada46a704255307fa7d1ee93` FOREIGN KEY (`provinciaId`) REFERENCES `provincia`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `municipalidad` ADD CONSTRAINT `FK_c9217da3e0967a948774c48669b` FOREIGN KEY (`enforcementId`) REFERENCES `enforcement`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `contexto_politico` ADD CONSTRAINT `FK_e19a4cbac88209800dd9ee128b6` FOREIGN KEY (`municipalidadId`) REFERENCES `municipalidad`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `user` ADD CONSTRAINT `FK_9466682df91534dd95e4dbaa616` FOREIGN KEY (`profileId`) REFERENCES `profile`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `user` DROP FOREIGN KEY `FK_9466682df91534dd95e4dbaa616`");
        await queryRunner.query("ALTER TABLE `contexto_politico` DROP FOREIGN KEY `FK_e19a4cbac88209800dd9ee128b6`");
        await queryRunner.query("ALTER TABLE `municipalidad` DROP FOREIGN KEY `FK_c9217da3e0967a948774c48669b`");
        await queryRunner.query("ALTER TABLE `municipalidad` DROP FOREIGN KEY `FK_eadada46a704255307fa7d1ee93`");
        await queryRunner.query("DROP TABLE `profile`");
        await queryRunner.query("DROP INDEX `IDX_9466682df91534dd95e4dbaa61` ON `user`");
        await queryRunner.query("DROP TABLE `user`");
        await queryRunner.query("DROP INDEX `IDX_e19a4cbac88209800dd9ee128b` ON `contexto_politico`");
        await queryRunner.query("DROP TABLE `contexto_politico`");
        await queryRunner.query("DROP INDEX `REL_c9217da3e0967a948774c48669` ON `municipalidad`");
        await queryRunner.query("DROP INDEX `IDX_c9217da3e0967a948774c48669` ON `municipalidad`");
        await queryRunner.query("DROP INDEX `IDX_eadada46a704255307fa7d1ee9` ON `municipalidad`");
        await queryRunner.query("DROP TABLE `municipalidad`");
        await queryRunner.query("DROP TABLE `enforcement`");
        await queryRunner.query("DROP TABLE `provincia`");
    }

}
