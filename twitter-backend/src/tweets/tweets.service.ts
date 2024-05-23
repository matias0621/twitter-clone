import { Injectable } from "@nestjs/common";
import { Tweets } from "@prisma/client";
import { PrismaService } from "src/prisma/prisma.service";


@Injectable()
export class TweetsService{
    
    constructor(private prisma: PrismaService){}

    async getAllTweets(): Promise<Tweets[]>{
        return this.prisma.tweets.findMany();
    }

    async getTweetById(id: number): Promise<Tweets>{
        return this.prisma.tweets.findUnique({
            where: {id}
        });
    }

    async createTweet(data: Tweets): Promise<Tweets>{
        return this.prisma.tweets.create({data});
    }

    async updateTweet(id: number, data: Tweets): Promise<Tweets>{
        return this.prisma.tweets.update({
            where: {id},
            data
        });
    }

    async deleteTweet(id: number): Promise<Tweets>{
        return this.prisma.tweets.delete({
            where: {id}
        });
    }
}