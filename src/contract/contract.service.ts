import { Body, Injectable } from '@nestjs/common';
import { Web3 } from 'web3';
import { abi } from 'sepabi';
import * as dotenv from 'dotenv';
import { RegisteredSubscription } from 'web3/lib/commonjs/eth.exports';
import { NumberDto, WordDto } from './dtos/word.dto';
@Injectable()
export class ContractService {

    private web3: Web3;
    private contract: any;
    private account: any;

    constructor() {
        dotenv.config();
        this.web3 = new Web3(process.env.TESTNET_RPC_URL);
        this.contract = new this.web3.eth.Contract(abi.abi, process.env.CONTRACT_ADDRESS);
        this.account = process.env.PUBLIC_KEY;

    }
    async GetNumber() {
        const number = await this.contract.methods.GetNumber().call();
        return number;
    }

    async GetWord() {
        const word = await this.contract.methods.GetWord().call();
        return word;
    }

    async UpdateNumber(sayi: NumberDto) {
        const { number } = sayi;
        const data = await this.contract.methods.UpdateNumber(number).encodeABI();
        const gasPrice = await this.web3.eth.getGasPrice();

        const tx = {
            to : process.env.CONTRACT_ADDRESS,
            from : this.account,
            data : data,
            gas : 2000000,
            gasPrice : gasPrice
        }


        const signedTx = await this.web3.eth.accounts.signTransaction(tx, process.env.PRIVATE_KEY);
        const receipt = await this.web3.eth.sendSignedTransaction(signedTx.rawTransaction as string);
        return this.GetNumber();
    }

    async UpdateWord( kelime : WordDto) {
        const { word } = kelime;
        console.log(word);
        const data = await this.contract.methods.UpdateWord(word).encodeABI();

        const gasPrice = await this.web3.eth.getGasPrice();

        const tx = {
            to : process.env.CONTRACT_ADDRESS,
            from : this.account,
            data : data,
            gas : 2000000,
            gasPrice : gasPrice
        }


        const signedTx = await this.web3.eth.accounts.signTransaction(tx, process.env.PRIVATE_KEY);
        const receipt = await this.web3.eth.sendSignedTransaction(signedTx.rawTransaction as string);


        return await this.GetWord();
    }



}
