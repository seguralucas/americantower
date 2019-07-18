import { Entity, PrimaryGeneratedColumn, Column, OneToMany, AfterLoad, BeforeUpdate, BeforeInsert, ManyToMany, JoinTable, Index } from "typeorm";
import { GenericEntity } from "./GenericEntity";
import { User } from "./User";
import { Municipalidad } from "./Municipalidad";
let encriptutils = require('../components/encryputils')
@Entity()
export class Provincia extends GenericEntity {
    
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nombre: string;

    @Column()
    codigoProvincia: number;

    @OneToMany(type => Municipalidad, municipalidad => municipalidad.provincia)
    public municipalidades: Municipalidad[]

}


