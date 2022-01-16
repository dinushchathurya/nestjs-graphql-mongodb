import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';
import { User } from '../../src/auth/entities/user.entity';

@Injectable()
export class MailService {

    constructor(private mailerService: MailerService) {}

    async sendUserConfirmation(user: User, token: string) {
        
        const url = `example.com/auth/confirm?token=${token}`;

        await this.mailerService.sendMail({
            to: "test@gmail.com",
            subject: 'Welcome to Nice App! Confirm your Email',
            template: '/confirmation', 
            context: { 
                name: user.name,
                url,
            },
        });
    }
}
