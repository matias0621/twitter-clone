import { BadRequestException, Body, Controller, Delete, Get, NotFoundException, Param, Post, Put } from "@nestjs/common";
import { TweetsService } from "./tweets.service";
import { Tweets } from "@prisma/client";


@Controller()
export class TweetsController{

    constructor(private tweetsService: TweetsService){}

    @Get()
    async getAllTweets(){
        return await this.tweetsService.getAllTweets();
    }

    @Get(':id')
    async getTweetById(@Param('id') id: string){
        const tweetFound = await this.tweetsService.getTweetById(Number(id));

        if (!tweetFound) throw new BadRequestException('Tweet no encontrado')
        
        return tweetFound;
    }

    @Post()
    async createTweet(@Body('data') data: Tweets){
        return await this.tweetsService.createTweet(data);
    }

    @Put(':id')
    async updateTweet(@Param('id') id: string, @Body() data: Tweets){
        try {
            return await this.tweetsService.updateTweet(Number(id), data);
        } catch (error) {
            throw new NotFoundException('Tweet no encontrado');
        }
    }

    @Delete(':id')
    async deleteTweet(@Param('id') id: string){
        try {
            return await this.tweetsService.deleteTweet(Number(id));
        } catch (error) {
            throw new NotFoundException('Tweet no encontrado');
        }
    }
}