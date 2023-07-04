import { Module } from '@nestjs/common';

import { database } from './config/database.config';
import { ContentModule } from './modules/content/content.module';
import { CoreModule } from './modules/core/core.module';

@Module({
    imports: [ContentModule, CoreModule.forRoot(database()), ContentModule],
    controllers: [],
    providers: [],
})
export class AppModule {}
