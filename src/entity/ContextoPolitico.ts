import { Entity, PrimaryGeneratedColumn, Column, OneToMany, AfterLoad, BeforeUpdate, BeforeInsert, ManyToMany, JoinTable, Index, ManyToOne, JoinColumn, OneToOne } from "typeorm";
import { GenericEntity } from "./GenericEntity";
import { Municipalidad } from "./Municipalidad";
@Entity()
export class ContextoPolitico extends GenericEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({nullable:true,type:'float'})
    public scoring: number


    @Column()
    clasificacion: number;

    @Column({nullable:true})
    oficialistaProv: boolean;

    @Column({nullable:true})
    oficialistaNac: boolean;

    @Column({nullable:true})
    R: number;

    @Column({nullable:true})
    PJ: number;

    @Column({nullable:true})
    K: number;

    @Column({nullable:true})
    PRO: number;

    @Column({nullable:true})
    otrosPartidos: number;

    @Column({nullable:true})
    nMandato: number;

    @Column({nullable:true})
    mayoria: boolean;

    @Column({nullable:true})
    relacionGobierno: number;

    @Column({nullable:true})
    releccionInmediata: boolean;

    @Column({nullable:true, type:"mediumtext"})
    public observaciones


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