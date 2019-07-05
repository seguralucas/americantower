import { Entity, PrimaryGeneratedColumn, Column, OneToMany, AfterLoad, BeforeUpdate, BeforeInsert, ManyToMany, JoinTable, Index, ManyToOne, JoinColumn, OneToOne } from "typeorm";
import { GenericEntity } from "./GenericEntity";
import { Msg } from "../msg/Msg";
import { ErrorBiactiva } from "../components/ErrorBiactiva";
import { Provincia } from "./Provincia";
import { Enforcement } from "./Enforcement";
import { ContextoPolitico } from "./ContextoPolitico";
let encriptutils = require('../components/encryputils')
@Entity()
export class Municipalidad extends GenericEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    codigoMunicipio: string;

    @Column()
    nombre: string;

    @Column()
    latitud: number;

    @Column()
    longitud: number;

    @Column()
    superficie: string;

    @Column()
    scoring: number;

    @Column()
    demografia: string;

    @Column()
    telefono: string;

    @Column()
    linkMapa: string;

    @Column()
    public provinciaId: number = null

    @ManyToOne(type => Provincia, provincia => provincia.municipalidades)
    @JoinColumn({ name: "provinciaId" })
    @Index()
    public provincia: Provincia

    @Column({ nullable: true })
    public enforcementId: number = null

    @OneToOne(type => Enforcement, enforcement => enforcement.municipalidad)
    @JoinColumn({ name: "enforcementId" })
    @Index()
    public enforcement: Enforcement

    @OneToMany(type => ContextoPolitico, contextoPolitico => contextoPolitico.municipalidad)
    public contextosPoliticos: ContextoPolitico

    @BeforeInsert()
    private validateInsert(): void {
        if (this.codigoMunicipio == null)
            throw new ErrorBiactiva(Msg.CAMPO_OBLIGATORIO("codigoMunicipio"), Msg.CAMPO_OBLIGATORIO("codigoMunicipio"), 400)
        if (this.nombre == null)
            throw new ErrorBiactiva(Msg.CAMPO_OBLIGATORIO("nombre"), Msg.CAMPO_OBLIGATORIO("nombre"), 400)
    }
}


