import { Entity, PrimaryGeneratedColumn, Column, OneToMany, AfterLoad, BeforeUpdate, BeforeInsert, ManyToMany, JoinTable, Index, ManyToOne, JoinColumn, OneToOne } from "typeorm";
import { GenericEntity } from "./GenericEntity";
import { Municipalidad } from "./Municipalidad";

@Entity()
export class Zonificacion extends GenericEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({nullable:true})
    public acurdoMunicipal: boolean

    @Column({nullable:true,type:'float'})
    public propuestaRadiacion:number

    @Column({nullable:true,type:'float'})
    public perfilElectrica: number

    @Column({nullable:true,type:'float'})
    public demografia: number

    @Column({nullable:true,type:'float'})
    public superficie

    @Column({nullable:true,type:'float'})
    public zonaProhibitiva: number

    @Column({nullable:true,type:'float'})
    public scoring: number

    @Column()
    public municipalidadId: number = null

    @ManyToOne(type => Municipalidad, municipalidad => municipalidad.zonificaciones)
    @JoinColumn({ name: "municipalidadId" })
    @Index()
    public municipalidad: Municipalidad
}


