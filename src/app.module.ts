import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { UsersModule } from './modules/users/users.module'; // <-- importar módulo de usuarios
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    
    // --- CÓDIGO A REEMPLAZAR AQUÍ ---
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule], // Asegúrate de importar ConfigModule
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get<string>('DB_HOST'),
        port: configService.get<number>('DB_PORT'),
        username: configService.get<string>('DB_USER'),
        password: configService.get<string>('DB_PASSWORD'),
        database: configService.get<string>('DB_NAME'),
        autoLoadEntities: true,
        synchronize: true,
      }),
      inject: [ConfigService],
    }),

    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  // Ya no necesitas inyectar configService en el constructor
  // constructor(private readonly configService: ConfigService) {}
}