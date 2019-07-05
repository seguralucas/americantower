import { Entity, PrimaryGeneratedColumn, Column, OneToMany, AfterLoad, BeforeUpdate, BeforeInsert, ManyToMany, JoinTable, Index, ManyToOne, JoinColumn, OneToOne } from "typeorm";
import { GenericEntity } from "./GenericEntity";
import { Msg } from "../msg/msg";
import { ErrorBiactiva } from "../components/ErrorBiactiva";
import { Provincia } from "./Provincia";
import { Municipalidad } from "./Municipalidad";
let encriptutils = require('../components/encryputils')
@Entity()
export class Enforcement extends GenericEntity {    
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    hay: boolean;

    @Column()
    public descripcion: string

    @OneToOne(type => Municipalidad, municipalidad => municipalidad.enforcement)
    public municipalidad: Municipalidad

    @BeforeInsert()
    private validateInsert(): void {
        if (this.hay == null)
            throw new ErrorBiactiva(Msg.CAMPO_OBLIGATORIO("hay"),Msg.CAMPO_OBLIGATORIO("hay"), 400)
        if (this.descripcion == null)
            throw new ErrorBiactiva(Msg.CAMPO_OBLIGATORIO("descripcion"),Msg.CAMPO_OBLIGATORIO("descripcion"), 400)
    }
}


