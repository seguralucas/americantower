import { Entity, PrimaryGeneratedColumn, Column, OneToMany, AfterLoad, BeforeUpdate, BeforeInsert, ManyToMany, JoinTable, Index, ManyToOne, JoinColumn, OneToOne } from "typeorm";
import { GenericEntity } from "./GenericEntity";
import { Municipalidad } from "./Municipalidad";
@Entity()
export class ConflictividadVecinal extends GenericEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    clasificacion: number;

    @Column({nullable:true, type:"mediumtext"})
    public descripcion

    @Column({nullable:true,type:'float'})
    public scoring: number

    @Column()
    public municipalidadId: number = null

    @ManyToOne(type => Municipalidad, municipalidad => municipalidad.conflictividadesVecinal)
    @JoinColumn({ name: "municipalidadId" })
    @Index()
    public municipalidad: Municipalidad
}