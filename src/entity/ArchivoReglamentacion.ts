import { Entity, PrimaryGeneratedColumn, Column, OneToMany, AfterLoad, BeforeUpdate, BeforeInsert, ManyToMany, JoinTable, Index, ManyToOne, JoinColumn, OneToOne } from "typeorm";
import { GenericEntity } from "./GenericEntity";
import { Municipalidad } from "./Municipalidad";
@Entity()
export class ArchivoReglamentacion extends GenericEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    url: number;

    @Column({nullable:true, type:"mediumtext"})
    public descripcion

    @Column({nullable:true, type:"mediumtext"})
    public titulo: number

    @Column()
    public municipalidadId: number = null

    @ManyToOne(type => Municipalidad, municipalidad => municipalidad.archivosReglamentacion)
    @JoinColumn({ name: "municipalidadId" })
    @Index()
    public municipalidad: Municipalidad
}