import {MigrationInterface, QueryRunner} from "typeorm";

export class cambiosMunicipalidad21564419459028 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `municipalidad` ADD `tieneDatos` tinyint NOT NULL");
        await queryRunner.query("ALTER TABLE `enforcement` CHANGE `scoring` `scoring` float NULL");
        await queryRunner.query("ALTER TABLE `enforcement` CHANGE `enforcement` `enforcement` float NULL");
        await queryRunner.query("ALTER TABLE `contexto_politico` CHANGE `scoring` `scoring` float NULL");
        await queryRunner.query("ALTER TABLE `reglamentacion` CHANGE `alturaSueloMinimo` `alturaSueloMinimo` float NULL");
        await queryRunner.query("ALTER TABLE `reglamentacion` CHANGE `alturaSueloMaximo` `alturaSueloMaximo` float NULL");
        await queryRunner.query("ALTER TABLE `reglamentacion` CHANGE `alturaAzoteaMinimo` `alturaAzoteaMinimo` float NULL");
        await queryRunner.query("ALTER TABLE `reglamentacion` CHANGE `alturaAzoteaMaximo` `alturaAzoteaMaximo` float NULL");
        await queryRunner.query("ALTER TABLE `reglamentacion` CHANGE `retiroSueloFrente` `retiroSueloFrente` float NULL");
        await queryRunner.query("ALTER TABLE `reglamentacion` CHANGE `retiroSueloLineaMunicipal` `retiroSueloLineaMunicipal` float NULL");
        await queryRunner.query("ALTER TABLE `reglamentacion` CHANGE `retiroSueloFondo` `retiroSueloFondo` float NULL");
        await queryRunner.query("ALTER TABLE `reglamentacion` CHANGE `retiroSueloMedianera` `retiroSueloMedianera` float NULL");
        await queryRunner.query("ALTER TABLE `reglamentacion` CHANGE `retiroAzoteaFrente` `retiroAzoteaFrente` float NULL");
        await queryRunner.query("ALTER TABLE `reglamentacion` CHANGE `retiroAzoteaLineaMunicipal` `retiroAzoteaLineaMunicipal` float NULL");
        await queryRunner.query("ALTER TABLE `reglamentacion` CHANGE `retiroAzoteaFondo` `retiroAzoteaFondo` float NULL");
        await queryRunner.query("ALTER TABLE `reglamentacion` CHANGE `retiroAzoteaMedianera` `retiroAzoteaMedianera` float NULL");
        await queryRunner.query("ALTER TABLE `reglamentacion` CHANGE `scoring` `scoring` float NULL");
        await queryRunner.query("ALTER TABLE `zonificacion` CHANGE `propuestaRadiacion` `propuestaRadiacion` float NULL");
        await queryRunner.query("ALTER TABLE `zonificacion` CHANGE `perfilElectrica` `perfilElectrica` float NULL");
        await queryRunner.query("ALTER TABLE `zonificacion` CHANGE `demografia` `demografia` float NULL");
        await queryRunner.query("ALTER TABLE `zonificacion` CHANGE `superficie` `superficie` float NULL");
        await queryRunner.query("ALTER TABLE `zonificacion` CHANGE `zonaProhibitiva` `zonaProhibitiva` float NULL");
        await queryRunner.query("ALTER TABLE `zonificacion` CHANGE `scoring` `scoring` float NULL");
        await queryRunner.query("ALTER TABLE `conflictividad_vecinal` CHANGE `scoring` `scoring` float NULL");
        await queryRunner.query("ALTER TABLE `tazas` CHANGE `BCATC` `BCATC` float NULL");
        await queryRunner.query("ALTER TABLE `tazas` CHANGE `minimacroMetroAdicional` `minimacroMetroAdicional` float NULL");
        await queryRunner.query("ALTER TABLE `tazas` CHANGE `minimacroEspacioPub` `minimacroEspacioPub` float NULL");
        await queryRunner.query("ALTER TABLE `tazas` CHANGE `minimacroRecurrente` `minimacroRecurrente` float NULL");
        await queryRunner.query("ALTER TABLE `tazas` CHANGE `minimacroUnicaVez` `minimacroUnicaVez` float NULL");
        await queryRunner.query("ALTER TABLE `tazas` CHANGE `btsUnicaVez` `btsUnicaVez` float NULL");
        await queryRunner.query("ALTER TABLE `tazas` CHANGE `btsRecurrente` `btsRecurrente` float NULL");
        await queryRunner.query("ALTER TABLE `tazas` CHANGE `btsEspacioPublico` `btsEspacioPublico` float NULL");
        await queryRunner.query("ALTER TABLE `tazas` CHANGE `btsPeriodisidad` `btsPeriodisidad` float NULL");
        await queryRunner.query("ALTER TABLE `tazas` CHANGE `alturaHasta24` `alturaHasta24` float NULL");
        await queryRunner.query("ALTER TABLE `tazas` CHANGE `alturaHasta24a50` `alturaHasta24a50` float NULL");
        await queryRunner.query("ALTER TABLE `tazas` CHANGE `alturaMas50` `alturaMas50` float NULL");
        await queryRunner.query("ALTER TABLE `tazas` CHANGE `estructuraLiviana` `estructuraLiviana` float NULL");
        await queryRunner.query("ALTER TABLE `tazas` CHANGE `estructuraPesada` `estructuraPesada` float NULL");
        await queryRunner.query("ALTER TABLE `tazas` CHANGE `estructuraArriostrada` `estructuraArriostrada` float NULL");
        await queryRunner.query("ALTER TABLE `tazas` CHANGE `estructuraTensores` `estructuraTensores` float NULL");
        await queryRunner.query("ALTER TABLE `tazas` CHANGE `monopostes` `monopostes` float NULL");
        await queryRunner.query("ALTER TABLE `tazas` CHANGE `postesServiciosPublicos` `postesServiciosPublicos` float NULL");
        await queryRunner.query("ALTER TABLE `tazas` CHANGE `dondeAzoteas` `dondeAzoteas` float NULL");
        await queryRunner.query("ALTER TABLE `tazas` CHANGE `dondeViasPublicas` `dondeViasPublicas` float NULL");
        await queryRunner.query("ALTER TABLE `tazas` CHANGE `dondeSuelo` `dondeSuelo` float NULL");
        await queryRunner.query("ALTER TABLE `municipalidad` CHANGE `latitud` `latitud` float NULL");
        await queryRunner.query("ALTER TABLE `municipalidad` CHANGE `longitud` `longitud` float NULL");
        await queryRunner.query("ALTER TABLE `municipalidad` CHANGE `scoring` `scoring` float NULL");
        await queryRunner.query("ALTER TABLE `municipalidad` CHANGE `datosSolicitados` `datosSolicitados` tinyint NOT NULL");
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `municipalidad` CHANGE `datosSolicitados` `datosSolicitados` tinyint NOT NULL DEFAULT '0'");
        await queryRunner.query("ALTER TABLE `municipalidad` CHANGE `scoring` `scoring` float(12) NULL");
        await queryRunner.query("ALTER TABLE `municipalidad` CHANGE `longitud` `longitud` float(12) NULL");
        await queryRunner.query("ALTER TABLE `municipalidad` CHANGE `latitud` `latitud` float(12) NULL");
        await queryRunner.query("ALTER TABLE `tazas` CHANGE `dondeSuelo` `dondeSuelo` float(12) NULL");
        await queryRunner.query("ALTER TABLE `tazas` CHANGE `dondeViasPublicas` `dondeViasPublicas` float(12) NULL");
        await queryRunner.query("ALTER TABLE `tazas` CHANGE `dondeAzoteas` `dondeAzoteas` float(12) NULL");
        await queryRunner.query("ALTER TABLE `tazas` CHANGE `postesServiciosPublicos` `postesServiciosPublicos` float(12) NULL");
        await queryRunner.query("ALTER TABLE `tazas` CHANGE `monopostes` `monopostes` float(12) NULL");
        await queryRunner.query("ALTER TABLE `tazas` CHANGE `estructuraTensores` `estructuraTensores` float(12) NULL");
        await queryRunner.query("ALTER TABLE `tazas` CHANGE `estructuraArriostrada` `estructuraArriostrada` float(12) NULL");
        await queryRunner.query("ALTER TABLE `tazas` CHANGE `estructuraPesada` `estructuraPesada` float(12) NULL");
        await queryRunner.query("ALTER TABLE `tazas` CHANGE `estructuraLiviana` `estructuraLiviana` float(12) NULL");
        await queryRunner.query("ALTER TABLE `tazas` CHANGE `alturaMas50` `alturaMas50` float(12) NULL");
        await queryRunner.query("ALTER TABLE `tazas` CHANGE `alturaHasta24a50` `alturaHasta24a50` float(12) NULL");
        await queryRunner.query("ALTER TABLE `tazas` CHANGE `alturaHasta24` `alturaHasta24` float(12) NULL");
        await queryRunner.query("ALTER TABLE `tazas` CHANGE `btsPeriodisidad` `btsPeriodisidad` float(12) NULL");
        await queryRunner.query("ALTER TABLE `tazas` CHANGE `btsEspacioPublico` `btsEspacioPublico` float(12) NULL");
        await queryRunner.query("ALTER TABLE `tazas` CHANGE `btsRecurrente` `btsRecurrente` float(12) NULL");
        await queryRunner.query("ALTER TABLE `tazas` CHANGE `btsUnicaVez` `btsUnicaVez` float(12) NULL");
        await queryRunner.query("ALTER TABLE `tazas` CHANGE `minimacroUnicaVez` `minimacroUnicaVez` float(12) NULL");
        await queryRunner.query("ALTER TABLE `tazas` CHANGE `minimacroRecurrente` `minimacroRecurrente` float(12) NULL");
        await queryRunner.query("ALTER TABLE `tazas` CHANGE `minimacroEspacioPub` `minimacroEspacioPub` float(12) NULL");
        await queryRunner.query("ALTER TABLE `tazas` CHANGE `minimacroMetroAdicional` `minimacroMetroAdicional` float(12) NULL");
        await queryRunner.query("ALTER TABLE `tazas` CHANGE `BCATC` `BCATC` float(12) NULL");
        await queryRunner.query("ALTER TABLE `conflictividad_vecinal` CHANGE `scoring` `scoring` float(12) NULL");
        await queryRunner.query("ALTER TABLE `zonificacion` CHANGE `scoring` `scoring` float(12) NULL");
        await queryRunner.query("ALTER TABLE `zonificacion` CHANGE `zonaProhibitiva` `zonaProhibitiva` float(12) NULL");
        await queryRunner.query("ALTER TABLE `zonificacion` CHANGE `superficie` `superficie` float(12) NULL");
        await queryRunner.query("ALTER TABLE `zonificacion` CHANGE `demografia` `demografia` float(12) NULL");
        await queryRunner.query("ALTER TABLE `zonificacion` CHANGE `perfilElectrica` `perfilElectrica` float(12) NULL");
        await queryRunner.query("ALTER TABLE `zonificacion` CHANGE `propuestaRadiacion` `propuestaRadiacion` float(12) NULL");
        await queryRunner.query("ALTER TABLE `reglamentacion` CHANGE `scoring` `scoring` float(12) NULL");
        await queryRunner.query("ALTER TABLE `reglamentacion` CHANGE `retiroAzoteaMedianera` `retiroAzoteaMedianera` float(12) NULL");
        await queryRunner.query("ALTER TABLE `reglamentacion` CHANGE `retiroAzoteaFondo` `retiroAzoteaFondo` float(12) NULL");
        await queryRunner.query("ALTER TABLE `reglamentacion` CHANGE `retiroAzoteaLineaMunicipal` `retiroAzoteaLineaMunicipal` float(12) NULL");
        await queryRunner.query("ALTER TABLE `reglamentacion` CHANGE `retiroAzoteaFrente` `retiroAzoteaFrente` float(12) NULL");
        await queryRunner.query("ALTER TABLE `reglamentacion` CHANGE `retiroSueloMedianera` `retiroSueloMedianera` float(12) NULL");
        await queryRunner.query("ALTER TABLE `reglamentacion` CHANGE `retiroSueloFondo` `retiroSueloFondo` float(12) NULL");
        await queryRunner.query("ALTER TABLE `reglamentacion` CHANGE `retiroSueloLineaMunicipal` `retiroSueloLineaMunicipal` float(12) NULL");
        await queryRunner.query("ALTER TABLE `reglamentacion` CHANGE `retiroSueloFrente` `retiroSueloFrente` float(12) NULL");
        await queryRunner.query("ALTER TABLE `reglamentacion` CHANGE `alturaAzoteaMaximo` `alturaAzoteaMaximo` float(12) NULL");
        await queryRunner.query("ALTER TABLE `reglamentacion` CHANGE `alturaAzoteaMinimo` `alturaAzoteaMinimo` float(12) NULL");
        await queryRunner.query("ALTER TABLE `reglamentacion` CHANGE `alturaSueloMaximo` `alturaSueloMaximo` float(12) NULL");
        await queryRunner.query("ALTER TABLE `reglamentacion` CHANGE `alturaSueloMinimo` `alturaSueloMinimo` float(12) NULL");
        await queryRunner.query("ALTER TABLE `contexto_politico` CHANGE `scoring` `scoring` float(12) NULL");
        await queryRunner.query("ALTER TABLE `enforcement` CHANGE `enforcement` `enforcement` float(12) NULL");
        await queryRunner.query("ALTER TABLE `enforcement` CHANGE `scoring` `scoring` float(12) NULL");
        await queryRunner.query("ALTER TABLE `municipalidad` DROP COLUMN `tieneDatos`");
    }

}
