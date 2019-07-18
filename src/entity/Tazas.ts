import { Entity, PrimaryGeneratedColumn, Column, OneToMany, AfterLoad, BeforeUpdate, BeforeInsert, ManyToMany, JoinTable, Index, ManyToOne, JoinColumn, OneToOne } from "typeorm";
import { GenericEntity } from "./GenericEntity";
import { Municipalidad } from "./Municipalidad";
@Entity()
export class Tazas extends GenericEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({nullable:true})
    public clasificacion: number

    @Column({nullable:true,type:'float'})
    public BCATC: number

    @Column({nullable:true,type:'float'})
    public minimacroMetroAdicional: number

    @Column({nullable:true, type:"mediumtext"})
    public minimacroObs

    @Column({nullable:true,type:'float'})
    public minimacroEspacioPub: number

    @Column({nullable:true,type:'float'})
    public minimacroRecurrente: number

    @Column({nullable:true,type:'float'})
    public minimacroUnicaVez: number

    @Column({nullable:true,type:'float'})
    public btsUnicaVez: number

    @Column({nullable:true,type:'float'})
    public btsRecurrente: number

    @Column({nullable:true,type:'float'})
    public btsEspacioPublico:number

    @Column({nullable:true, type:"mediumtext"})
    public btsObs

    @Column({nullable:true,type:'float'})
    public btsPeriodisidad:number

    @Column({nullable:true,type:'float'})
    public alturaHasta24:number

    @Column({nullable:true,type:'float'})
    public alturaHasta24a50:number

    @Column({nullable:true,type:'float'})
    public alturaMas50:number

    @Column({nullable:true,type:'float'})
    public estructuraLiviana: number

    @Column({nullable:true,type:'float'})
    public estructuraPesada: number

    @Column({nullable:true,type:'float'})
    public estructuraArriostrada: number

    @Column({nullable:true,type:'float'})
    public estructuraTensores: number

    @Column({nullable:true,type:'float'})
    public monopostes: number

    @Column({nullable:true,type:'float'})
    public postesServiciosPublicos: number

    @Column({nullable:true,type:'float'})
    public dondeAzoteas: number

    @Column({nullable:true,type:'float'})
    public dondeViasPublicas: number

    @Column({nullable:true,type:'float'})
    public dondeSuelo: number

    @Column()
    public metroAdicional: boolean

    @Column()
    public municipalidadId: number = null

    @ManyToOne(type => Municipalidad, municipalidad => municipalidad.tazas)
    @JoinColumn({ name: "municipalidadId" })
    @Index()
    public municipalidad: Municipalidad
}


