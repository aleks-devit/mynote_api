import { Injectable } from '@nestjs/common';
import {HttpService} from "@nestjs/axios";

@Injectable()
export class AppService {
  constructor(private httpService: HttpService) {}

  getHello(): string {
    return 'Hello World!';
  }

  async getAll() {
    return await this.httpService.get('https://boostnote.io/api/docs', {headers: {
        authorization: "Bearer 35a617891c248c8b0f3b3d770eecc855ee3129ab76d437f0819a139c0d42c5ce"
      }
    }).toPromise().then(data => data.data)
  }

}
