import { IsOptional, IsString, IsUrl, Length } from 'class-validator';

export class CreateGarmentDto {
  @IsString()
  @Length(2, 40, { message: 'Name must be between 2 and 40 characters long' })
  name: string;

  @IsOptional()
  @IsString()
  type?: string;

  @IsOptional()
  @IsString()
  fabric?: string;

  @IsOptional()
  @IsString()
  color?: string;

  @IsOptional()
  @IsUrl({}, { message: 'imageUrl must be a valid URL' })
  imageUrl?: string;
}
