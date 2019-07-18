import { Entity, PrimaryGeneratedColumn, Column, OneToMany, AfterLoad, BeforeUpdate, BeforeInsert, ManyToMany, JoinTable, Index, ManyToOne, JoinColumn, OneToOne } from "typeorm";
import { GenericEntity } from "./GenericEntity";
import { Msg } from "../msg/Msg";
import { ErrorBiactiva } from "../components/ErrorBiactiva";
import { Provincia } from "./Provincia";
import { Municipalidad } from "./Municipalidad";
let encriptutils = require('../components/encryputils')
@Entity()
export class Enforcement extends GenericEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({nullable:true,type:'float'})
    public scoring: number

    @Column({nullable:true,type:'float'})
    enforcement: number;

    @Column({nullable:true, type:"mediumtext"})
    public descripcion

    @Column()
    public municipalidadId: number

    @ManyToOne(type => Municipalidad, municipalidad => municipalidad.contextosPoliticos)
    @JoinColumn({ name: "municipalidadId" })
    @Index()
    public municipalidad: Municipalidad
    @BeforeInsert()
    private validateInsert(): void {
        if (this.descripcion == null)
            throw new ErrorBiactiva(Msg.CAMPO_OBLIGATORIO("descripcion"), Msg.CAMPO_OBLIGATORIO("descripcion"), 400)
    }
}


