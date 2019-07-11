import { Entity, PrimaryGeneratedColumn, Column, OneToMany, AfterLoad, BeforeUpdate, BeforeInsert, ManyToMany, JoinTable, Index, ManyToOne, JoinColumn, OneToOne } from "typeorm";
import { GenericEntity } from "./GenericEntity";
import { Municipalidad } from "./Municipalidad";
@Entity()
export class ContextoPolitico extends GenericEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    intendente: string;

    @Column()
    clasificacion: number;

    @Column()
    oficialistaProv: boolean;

    @Column()
    oficialistaNac: boolean;

    @Column()
    R: number;

    @Column()
    PJ: number;

    @Column()
    K: number;

    @Column()
    PRO: number;

    @Column()
    otrosPartidos: number;

    @Column()
    nMandato: number;

    @Column()
    mayoria: boolean;

    @Column()
    relacionGobierno: number;

    @Column()
    observacion: string;

    @Column()
    urlFotoIntendente: string;

    @Column()
    puedeRelegir: boolean;

    @Column()
    cantidadMandatoMaxima: number;

    @Column()
    public municipalidadId: number = null

    @ManyToOne(type => Municipalidad, municipalidad => municipalidad.contextosPoliticos)
    @JoinColumn({ name: "municipalidadId" })
    @Index()
    public municipalidad: Municipalidad
}


