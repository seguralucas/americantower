import { Entity, PrimaryGeneratedColumn, Column, OneToMany, AfterLoad, BeforeUpdate, BeforeInsert, ManyToOne, Index, JoinColumn } from "typeorm";
import { GenericEntity } from "./GenericEntity";
import { ErrorBiactiva } from "../components/ErrorBiactiva";
import { Msg } from "../msg/msg";
import { Profile } from "./Profile";
let encriptutils = require('../components/encryputils')

@Entity()
export class User extends GenericEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    lastName: string;

    @Column()
    email: string;

    @Column()
    activo: boolean;

    @Column()
    dni: string;

    @Column({
        nullable: false
    })
    username: string = null;

    @Column({
        nullable: false
    })
    password: string = null;

    @Column()
    public profileId: number = null

    @ManyToOne(type => Profile, profile => profile.users)
    @JoinColumn({ name: "profileId" })
    @Index()
    public profile: Profile

    @BeforeInsert()
    private validateInsert(): void {
        if (this.password == null)
            throw new ErrorBiactiva(Msg.PASSWORD_MANDATORY, Msg.PASSWORD_MANDATORY, 400)
        if (this.username == null)
            throw new ErrorBiactiva(Msg.USERNAME_MANDATORY, Msg.USERNAME_MANDATORY, 400)
        if (this.name == null)
            throw new ErrorBiactiva(Msg.NAME_MANDATORY, Msg.NAME_MANDATORY, 400)
        if (this.dni == null)
            throw new ErrorBiactiva(Msg.DNI_MANDATORY, Msg.DNI_MANDATORY, 400)
    }

    @BeforeInsert()
    @BeforeUpdate()
    private encryptPassword(): void {
        this.password = encriptutils.encrypt(this.password)
    }
}
