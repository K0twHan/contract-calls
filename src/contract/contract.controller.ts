import { Body, Controller, Get, Post } from '@nestjs/common';
import { ContractService } from './contract.service';
import { ApiBody, ApiOperation, ApiProperty, SwaggerModule } from '@nestjs/swagger';
import { NumberDto, WordDto } from './dtos/word.dto';


@Controller('contract')
export class ContractController {

    constructor(private contractService: ContractService) {}


    @Get('number')
    GetNumber() {
        return this.contractService.GetNumber();
    }

    @Get('word')
    GetWord() {
        return this.contractService.GetWord();
    }

    @Post('number')
    UpdateNumber(@Body() number: NumberDto) {
        return this.contractService.UpdateNumber(number);
    }

    @Post('word')
    UpdateWord(@Body() word : WordDto) {
        return this.contractService.UpdateWord(word);
    }
}
