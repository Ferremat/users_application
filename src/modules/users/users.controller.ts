import { Controller } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/user.dto';
import { MessagePattern, Payload } from '@nestjs/microservices'; 
// Ya no necesitamos @Inject ni ClientProxy aquí

// Se usa solo para agrupar manejadores, el valor no importa en TCP
@Controller() 
export class UsersController {
  
    // 1. CORRECCIÓN: Inyectar el servicio LOCAL (UsersService)
    constructor(private readonly usersService: UsersService) {}

    // 2. CORRECCIÓN: Agregar el método MessagePattern para recibir el mensaje del Gateway
    @MessagePattern({ cmd: 'create_user' })
    create(@Payload() createUserDto: CreateUserDto) {
        console.log('✅ Mensaje TCP recibido. Procediendo a guardar en la VPS...');
        // Llama al servicio para ejecutar TypeORM y guardar en la base de datos remota
        return this.usersService.create(createUserDto);
    }
}