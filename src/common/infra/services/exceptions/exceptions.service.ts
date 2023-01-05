import {
  IException,
  IFormatExceptionMessage,
} from '@common/domain/adapters/exceptions.interface';
import {
  BadRequestException,
  ForbiddenException,
  HttpException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';

@Injectable()
export class ExceptionsService implements IException {
  badRequestException(data: IFormatExceptionMessage): HttpException {
    return new BadRequestException(data);
  }

  notFoundException(data: IFormatExceptionMessage): HttpException {
    return new NotFoundException(data);
  }

  internalServerErrorException(data?: IFormatExceptionMessage): HttpException {
    return new InternalServerErrorException(data);
  }

  forbiddenException(data?: IFormatExceptionMessage): HttpException {
    return new ForbiddenException(data);
  }

  unauthorizedException(data?: IFormatExceptionMessage): HttpException {
    return new UnauthorizedException(data);
  }
}
