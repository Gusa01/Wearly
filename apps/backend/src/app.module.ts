import { Module } from '@nestjs/common';
import { GarmentsController } from './garments/garments.controller';
import { GarmentsService } from './garments/garments.service';
import { GarmentsModule } from './garments/garments.module';
import { OutfitsController } from './outfits/outfits.controller';
import { OutfitsService } from './outfits/outfits.service';
import { OutfitsModule } from './outfits/outfits.module';

@Module({
  imports: [GarmentsModule, OutfitsModule],
  controllers: [GarmentsController, OutfitsController],
  providers: [GarmentsService, OutfitsService],
})
export class AppModule {}
