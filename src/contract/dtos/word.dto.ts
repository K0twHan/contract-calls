import { ApiProperty } from '@nestjs/swagger';


export class WordDto {
    @ApiProperty({example : "selamlar",required : true})
    word: string;
}

export class NumberDto {
    @ApiProperty({example : 5,required : true})
    number: number;
}