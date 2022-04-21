import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { CreateDateColumn, UpdateDateColumn } from "typeorm";

@Entity("users", { schema: "yata" })
export class UserEntity {

    @PrimaryGeneratedColumn({ type: "int", name: "id" })
    id: number;

    @Column("varchar", { name: "username", unique: true, length: 150 })
    username: string;

    @Column("varchar", { name: "password", length: 128 })
    password: string;

    @Column("varchar", { name: "role", length: 255 })
    roles: string;

    @Column("datetime", { name: "last_login", nullable: true })
    lastLogin: Date | null;

    @Column("varchar", { name: "email", length: 254 })
    email: string;

    @Column("varchar", { name: "is_active", length: 255 })
    isActive: string;

    @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
    createdAt: Date;

    @UpdateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)", onUpdate: "CURRENT_TIMESTAMP(6)" })
    updatedAt: Date;
}
//  https://docs.nestjs.com/techniques/database
