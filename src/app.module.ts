import { Module } from '@nestjs/common';
import { AppConfigModule } from './app/config/config.module';
import { AppDataBaseModule } from './app/database/database.module';
import { AppLifecycleModule } from './app/lifecycle/lifecycle.module';

@Module({
    imports: [AppConfigModule, AppDataBaseModule, AppLifecycleModule],
})
export class AppModule {}
