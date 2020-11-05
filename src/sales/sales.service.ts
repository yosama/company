import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

import { CreateTalkDTO } from './dto/request/create.sales.dto';
import { TalkDTO } from './dto/sales.dto';

@Injectable()
export class SalesService {
    private talks: TalkDTO[] = [];

    constructor(
        private readonly config: ConfigService
    ) {}

    createTalk(payload: CreateTalkDTO): TalkDTO {
        console.log('Creating new company');

        this.talks.push(payload as TalkDTO);

        return payload as TalkDTO;
    }

    getTalks():TalkDTO[] {
        return this.talks;
    }

    getTalksByDate(date?: string): TalkDTO[] {

        const dateInTime = new Date(date).getTime();

        return this.talks.filter(talk =>
            (dateInTime >= talk.startDate &&
            new Date(dateInTime).getTime() + 86400000 <= talk.startDate)
        ).sort((a, b) => (b.startDate - a.startDate));

    }
}
