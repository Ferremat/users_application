import { BeforeInsert, Column, CreateDateColumn, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Optional } from "@nestjs/common";

//create table usuario (id ....)
//LOGICA DE NEGOCIO DE LA ENTIDAD USUARIO. Hola

@Entity('usuario')
export class Usuario {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ nullable:true,  length: 30})
    name: string;

    @Column('string', {default: 18})
    password: number;
    
    @Column({nullable: false, unique: true})
    email: string;
    
    @Column({nullable: false, unique: true})
    username: string;

    @UpdateDateColumn()
    updatedAt: Date;

    @CreateDateColumn()
    createdAt: Date;


}