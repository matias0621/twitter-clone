import { Module } from "@nestjs/common";
import { TweetsController } from "./tweets.controller";
import { TweetsService } from "./tweets.service";
import { PrismaModule } from "src/prisma/prisma.module";


@Module({
    controllers:[TweetsController],
    providers: [TweetsService],
    imports: [PrismaModule]
})
export class TweetsModule{}