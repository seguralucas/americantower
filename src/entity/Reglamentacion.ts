import { Entity, PrimaryGeneratedColumn, Column, OneToMany, AfterLoad, BeforeUpdate, BeforeInsert, ManyToMany, JoinTable, Index, ManyToOne, JoinColumn, OneToOne } from "typeorm";
import { GenericEntity } from "./GenericEntity";
import { Municipalidad } from "./Municipalidad";
@Entity()
export class Reglamentacion extends GenericEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({nullable:true})
    public clasificacion: number

    @Column({nullable:true, type:"mediumtext"})
    public descripcion

    @Column({nullable:true,type:'float'})
    public alturaSueloMinimo: number

    @Column({nullable:true,type:'float'})
    public alturaSueloMaximo: number

    @Column({nullable:true, type:"mediumtext"})
    public alturaSueloObs

    @Column({nullable:true,type:'float'})
    public alturaAzoteaMinimo: number

    @Column({nullable:true,type:'float'})
    public alturaAzoteaMaximo: number

    @Column({nullable:true, type:"mediumtext"})
    public alturaAzoteaObs

    @Column({nullable:true,type:'float'})
    public retiroSueloFrente: number

    @Column({nullable:true,type:'float'})
    public retiroSueloLineaMunicipal: number

    @Column({nullable:true,type:'float'})
    public retiroSueloFondo: number

    @Column({nullable:true,type:'float'})
    public retiroSueloMedianera: number

    @Column({nullable:true, type:"mediumtext"})
    public retiroSueloObs

    @Column({nullable:true,type:'float'})
    public retiroAzoteaFrente: number

    @Column({nullable:true,type:'float'})
    public retiroAzoteaLineaMunicipal: number

    @Column({nullable:true,type:'float'})
    public retiroAzoteaFondo: number

    @Column({nullable:true,type:'float'})
    public retiroAzoteaMedianera: number

    @Column({nullable:true, type:"mediumtext"})
    public retiroAzoteaObs

    @Column({nullable:true,type:'float'})
    public scoring: number

    @Column()
    public municipalidadId: number = null

    @ManyToOne(type => Municipalidad, municipalidad => municipalidad.reglamentaciones)
    @JoinColumn({ name: "municipalidadId" })
    @Index()
    public municipalidad: Municipalidad
}


