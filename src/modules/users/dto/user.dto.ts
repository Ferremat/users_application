import { MinLength, MaxLength, IsString} from "class-validator";
//peticion a los roles que hay en la tabla de roles de la api
const roles: string[] = ['administrador', 'usuario', 'invitado'];

export class CreateUserDto {
        
        @IsString()
        @MinLength(3)
        @MaxLength(50)
        name: string;
    
        
        @IsString()
        @MinLength(6, { message: 'La contraseña debe tener al menos 6 caracteres' })
        @MaxLength(32, { message: 'La contraseña no puede superar los 32 caracteres' })
        @Matches(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).+$/, {
        message:
            'La contraseña debe incluir al menos una mayúscula, una minúscula y un número',
        })
        password: string;

        
        @IsString()
        @MinLength(5)
        @MaxLength(100)
        email: string;
        
        @IsString()
        @MinLength(3)
        @MaxLength(20)
        username: string;


}

function Matches(arg0: RegExp, arg1: { message: string; }): (target: CreateUserDto, propertyKey: "password") => void {
    throw new Error("Function not implemented.");
}
