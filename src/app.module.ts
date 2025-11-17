import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './modules/users/users.module';
import { UsersController } from './modules/users/users.controller';
import { UsersService } from './modules/users/users.service';
import { LoginModule } from './modules/users/submodules/login/login.module';
import { LoginController } from './modules/users/submodules/login/login.controller';
import { LoginService } from './modules/users/submodules/login/login.service';
import { ProfileModule } from './modules/users/submodules/profile/profile.module';
import { ProfileController } from './modules/users/submodules/profile/profile.controller';
import { ProfileService } from './modules/users/submodules/profile/profile.service';
@Module({
  imports: [UsersModule, LoginModule, ProfileModule],
  controllers: [AppController],
  providers: [AppService, UsersService, LoginService, ProfileService],
})
export class AppModule {}
