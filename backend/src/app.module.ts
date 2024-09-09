import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { UsersModule } from './users/users.module';
import * as Joi from 'joi';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { User } from './users/entities/user.entity';
import { CommonModule } from './common/common.module';
import { BetsModule } from './bets/bets.module';
import { Account } from './users/entities/account.entity';
import { Bet } from './bets/entities/bet.entity';
import { AuthModule } from './auth/auth.module';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: process.env.NODE_ENV === 'dev' ? '.env.dev' : '.env.test',
      ignoreEnvFile: process.env.NODE_ENV === 'prod',
      validationSchema: Joi.object({
        NODE_ENV: Joi.string().valid('dev', 'prod', 'test'),
        DB_HOST: Joi.string().required(),
        DB_PORT: Joi.string().required(),
        DB_USERNAME: Joi.string().required(),
        DB_PASSWORD: Joi.string().required(),
        DB_NAME: Joi.string().required(),
        SECRET_KEY: Joi.string().required(),
        JWT_ACCESSTOKEN_SECRET_KEY: Joi.string().required(),
        JWT_ACCESS_TOKEN_EXPIRATION_TIME: Joi.string().required(),
        JWT_REFRESH_TOKEN_SECRET_KEY: Joi.string().required(),
        JWT_REFRESH_TOKEN_EXPIRATION_TIME: Joi.string().required(),
      }),
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      installSubscriptionHandlers: true,
      autoSchemaFile: true,
      subscriptions: {
        'subscriptions-transport-ws': {
          onConnect: (connectionParams: any) => {
            return {
              token: connectionParams['x-jwt'],
            };
          },
        },
      },
      context: ({ req, res, connection }) => {
        const TOKEN_KEY = 'x-jwt';
        if (req) {
          return { token: req ? req.headers[TOKEN_KEY] : connection.context[TOKEN_KEY], res, req };
        }
      },
    }),

    TypeOrmModule.forRootAsync({
      useFactory: (configService: ConfigService) => ({
        type: 'mysql',
        host: configService.get('DB_HOST'),
        port: +configService.get('DB_PORT'),
        username: configService.get('DB_USERNAME'),
        password: configService.get('DB_PASSWORD'),
        database: configService.get('DB_NAME'),
        synchronize: configService.get('NODE_ENV') !== 'prod',
        entities: [User, Account, Bet],
      }),
      inject: [ConfigService],
    }),

    JwtModule.registerAsync({
      global: true,
      useFactory: (configService: ConfigService) => ({
        global: true,
        secret: `${configService.get('SECRET_KEY')}`,
        signOptions: { expiresIn: `${configService.get('JWT_ACCESS_TOKEN_EXPIRATION_TIME')}s` },
      }),
      inject: [ConfigService],
    }),

    UsersModule,

    CommonModule,

    BetsModule,

    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
