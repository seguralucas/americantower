import {MigrationInterface, QueryRunner} from "typeorm";

export class tazas1563481667122 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("CREATE TABLE `tazas` (`createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updateAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `id` int NOT NULL AUTO_INCREMENT, `clasificacion` int NULL, `BCATC` float NULL, `minimacroMetroAdicional` float NULL, `minimacroObs` mediumtext NULL, `minimacroEspacioPub` float NULL, `minimacroRecurrente` float NULL, `minimacroUnicaVez` float NULL, `btsUnicaVez` float NULL, `btsRecurrente` float NULL, `btsEspacioPublico` float NULL, `btsObs` mediumtext NULL, `btsPeriodisidad` float NULL, `alturaHasta24` float NULL, `alturaHasta24a50` float NULL, `alturaMas50` float NULL, `estructuraLiviana` float NULL, `estructuraPesada` float NULL, `estructuraArriostrada` float NULL, `estructuraTensores` float NULL, `monopostes` float NULL, `postesServiciosPublicos` float NULL, `dondeAzoteas` float NULL, `dondeViasPublicas` float NULL, `dondeSuelo` float NULL, `metroAdicional` tinyint NOT NULL, `municipalidadId` int NOT NULL, INDEX `IDX_1e0502fb4cb5435ffc7a82f959` (`municipalidadId`), PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("ALTER TABLE `tazas` ADD CONSTRAINT `FK_1e0502fb4cb5435ffc7a82f959f` FOREIGN KEY (`municipalidadId`) REFERENCES `municipalidad`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `tazas` DROP FOREIGN KEY `FK_1e0502fb4cb5435ffc7a82f959f`");
        await queryRunner.query("DROP INDEX `IDX_1e0502fb4cb5435ffc7a82f959` ON `tazas`");
        await queryRunner.query("DROP TABLE `tazas`");
    }

}
