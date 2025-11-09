import { Body, Controller, Delete, Get, NotFoundException, Param, Patch, Post } from '@nestjs/common';
import { GarmentsService } from './garments.service';
import { CreateGarmentDto } from './dto/create-garment.dto';

@Controller('garments')
export class GarmentsController {
  constructor(private readonly garmentsService: GarmentsService) {}

  @Post()
  create(@Body() createGarmentDto: CreateGarmentDto) {
    const userId = 'temp-user-id'; // Replace with actual user ID retrieved by auth guard
    return this.garmentsService.create(createGarmentDto, userId);
  }

  @Get()
  async findAll() {
    return await this.garmentsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const garment = await this.garmentsService.findById(id);
    if (!garment) throw new NotFoundException({ message: 'Garment not found' });
    return garment;
  }

  @Patch(':id')
  // Update to use update DTO when created
  async update(@Param('id') id: string, @Body() updateGarmentDto: Partial<CreateGarmentDto>) {
    const garment = await this.garmentsService.findById(id);
    if (!garment) throw new NotFoundException({ message: 'Garment not found' });
    return this.garmentsService.update(id, updateGarmentDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    const garment = await this.garmentsService.findById(id);
    if (!garment) throw new NotFoundException({ message: 'Garment not found' });
    return this.garmentsService.delete(id);
  }
}
