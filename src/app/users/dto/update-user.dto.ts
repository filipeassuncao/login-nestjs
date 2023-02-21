import { IsNotEmpty } from 'class-validator';

export class UpdateUserDto {
  @IsNotEmpty()
  firstNmae: string;

  @IsNotEmpty()
  lastName: string;
}