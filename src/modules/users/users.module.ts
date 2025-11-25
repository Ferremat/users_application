import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { user } from './entities/user.entity'; // Nombre de entidad en minúsculas es poco convencional
import { ClientsModule, Transport } from '@nestjs/microservices';
import { envs } from 'src/config';

@Module({
  controllers: [UsersController],
  
  imports: [
    TypeOrmModule.forFeature([user]), 
    ClientsModule.register([
      {
        name: 'MSERVICE_USERS',
        transport: Transport.TCP,
        options: {
            host: envs.DATABASE_URL, 
            port: envs.PORT,
        },
      },
    ]),
  ],
  
  // 3. PROVEEDORES (SERVICIOS)
  providers: [UsersService],
  
  exports: [
    TypeOrmModule, 
    UsersService
  ]
})
export class UsersModule {}