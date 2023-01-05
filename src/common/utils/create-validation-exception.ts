import { IFormatExceptionMessage } from '@common/domain/adapters/exceptions.interface';
import { CommonErrorCodeEnum } from '@common/domain/enums/error-code.enum';
import { BadRequestException, ValidationError } from '@nestjs/common';

export const createValidationException = (errors: ValidationError[]) => {
  const message = errors
    .map((i) => Object.values(i.constraints || {}))
    .flat()
    .join(', ');

  return new BadRequestException({
    error_code: CommonErrorCodeEnum.INVALID_PARAM,
    error_text: '',
    error_description: message,
  } as IFormatExceptionMessage);
};
