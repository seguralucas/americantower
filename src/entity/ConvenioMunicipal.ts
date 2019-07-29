import { Entity, PrimaryGeneratedColumn, Column, OneToMany, AfterLoad, BeforeUpdate, BeforeInsert, ManyToMany, JoinTable, Index, ManyToOne, JoinColumn, OneToOne } from "typeorm";
import { GenericEntity } from "./GenericEntity";
import { Msg } from "../msg/Msg";
import { ErrorBiactiva } from "../components/ErrorBiactiva";
import { Municipalidad } from "./Municipalidad";
@Entity()
export class ConvenioMunicipal extends GenericEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({nullable:false})
    public nivelDeAcuerdo: number

    @Column({nullable:true,type:'float'})
    scoring: number;

    @Column()
    public municipalidadId: number

    @ManyToOne(type => Municipalidad, municipalidad => municipalidad.contextosPoliticos)
    @JoinColumn({ name: "municipalidadId" })
    @Index()
    public municipalidad: Municipalidad
    
    @BeforeInsert()
    private validateInsert(): void {
        if (this.nivelDeAcuerdo > 3 || this.nivelDeAcuerdo < 0)
            throw new ErrorBiactiva(Msg.NIVEL_DE_ACUERDO_MUNICIPAL,Msg.NIVEL_DE_ACUERDO_MUNICIPAL, 500)
    }
}


