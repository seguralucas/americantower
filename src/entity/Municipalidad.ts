import { Entity, PrimaryGeneratedColumn, Column, OneToMany, AfterLoad, BeforeUpdate, BeforeInsert, ManyToMany, JoinTable, Index, ManyToOne, JoinColumn, OneToOne } from "typeorm";
import { GenericEntity } from "./GenericEntity";
import { Msg } from "../msg/Msg";
import { ErrorBiactiva } from "../components/ErrorBiactiva";
import { Provincia } from "./Provincia";
import { Enforcement } from "./Enforcement";
import { ContextoPolitico } from "./ContextoPolitico";
import { Reglamentacion } from "./Reglamentacion";
import { Zonificacion } from "./Zonificacion";
import { ConflictividadVecinal } from "./ConflictividadVecinal";
import { ArchivoReglamentacion } from "./ArchivoReglamentacion";
import { Tazas } from "./Tazas";
import { ConvenioMunicipal } from "./ConvenioMunicipal";
let encriptutils = require('../components/encryputils')
@Entity()
export class Municipalidad extends GenericEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({nullable:true})
    intendente: string;

    @Column()
    codigoMunicipio: string;

    @Column()
    nombre: string;

    @Column({nullable:true,type:'float'})
    latitud: number;

    @Column({nullable:true,type:'float'})
    longitud: number;

    @Column({nullable:true})
    telefono: string;

    @Column({nullable:true})
    linkMapa: string;

    @Column({nullable:true,type:'float'})
    public scoring

    @Column({nullable:true})
    urlFotoIntendente: string;

    @Column({nullable:false})
    datosSolicitados: boolean=false;

    @Column({nullable:false})
    tieneDatos: boolean=false;

    @Column()
    public provinciaId: number = null

    @ManyToOne(type => Provincia, provincia => provincia.municipalidades)
    @JoinColumn({ name: "provinciaId" })
    @Index()
    public provincia: Provincia

    @OneToMany(type => Enforcement, enforcement => enforcement.municipalidad)
    public enforcements: Enforcement[]

    @OneToMany(type => ConvenioMunicipal, convenioMunicipal => convenioMunicipal.municipalidad)
    public conveniosMunicipal: ConvenioMunicipal[]

    @OneToMany(type => ContextoPolitico, contextoPolitico => contextoPolitico.municipalidad)
    public contextosPoliticos: ContextoPolitico[]

    @OneToMany(type => Reglamentacion, reglamentacion => reglamentacion.municipalidad)
    public reglamentaciones:Reglamentacion[]

    @OneToMany(type => Zonificacion, zonificacion => zonificacion.municipalidad)
    public zonificaciones:Zonificacion[]

    @OneToMany(type => ConflictividadVecinal, conflictividadVecinal => conflictividadVecinal.municipalidad)
    conflictividadesVecinal:ConflictividadVecinal[]

    @OneToMany(type => Tazas, tazas => tazas.municipalidad)
    tazas:Tazas[]

    @OneToMany(type => ArchivoReglamentacion, archivoReglamentacion => archivoReglamentacion.municipalidad)
    archivosReglamentacion:ArchivoReglamentacion[]
    
    @BeforeInsert()
    private validateInsert(): void {
        if (this.codigoMunicipio == null)
            throw new ErrorBiactiva(Msg.CAMPO_OBLIGATORIO("codigoMunicipio"), Msg.CAMPO_OBLIGATORIO("codigoMunicipio"), 400)
        if (this.nombre == null)
            throw new ErrorBiactiva(Msg.CAMPO_OBLIGATORIO("nombre"), Msg.CAMPO_OBLIGATORIO("nombre"), 400)
    }
}


