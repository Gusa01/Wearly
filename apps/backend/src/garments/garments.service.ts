import { Prisma, PrismaClient } from '@prisma/client';
import { Injectable } from '@nestjs/common';
import { CreateGarmentDto } from './dto/create-garment.dto';

@Injectable()
export class GarmentsService {
  constructor(private readonly prisma: PrismaClient) {}

  async create(createGarmentDto: CreateGarmentDto, userId: string) {
    const data: Prisma.GarmentCreateInput = {
      name: createGarmentDto.name,
      type: createGarmentDto.type || '',
      color: createGarmentDto.color,
      fabric: createGarmentDto.fabric,
      imageUrl: createGarmentDto.imageUrl,
      user: { connect: { id: userId } },
    };
    return await this.prisma.garment.create({ data });
  }

  async findAll() {
    return await this.prisma.garment.findMany();
  }

  async findById(id: Prisma.GarmentWhereUniqueInput['id']) {
    return await this.prisma.garment.findUnique({ where: { id } });
  }

  async update(id: Prisma.GarmentWhereUniqueInput['id'], data: Prisma.GarmentUpdateInput) {
    return await this.prisma.garment.update({ where: { id }, data });
  }
  async delete(id: Prisma.GarmentWhereUniqueInput['id']) {
    return await this.prisma.garment.delete({ where: { id } });
  }
}
