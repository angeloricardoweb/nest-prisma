import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreateUserDTO {
  @IsNotEmpty({
    message: 'Nome não deve estar vazio',
  })
  name: string;

  @IsEmail(
    {},
    {
      message: 'Email inválido',
    },
  )
  @IsNotEmpty({
    message: 'Email não deve estar vazio',
  })
  email: string;

  @IsNotEmpty({
    message: 'habilidade não deve estar vazia',
  })
  skill: string;
}
