import { BeforeInsert, Column, Timestamp, CreateDateColumn, UpdateDateColumn } from "typeorm";

export abstract class GenericEntity{
    @CreateDateColumn() 
    public createdAt:Date;

    @UpdateDateColumn()
    public updateAt:Date;
}