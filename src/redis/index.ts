import RedisClient from '@redis/client/dist/lib/client';
import { RedisClientType, RedisFunctions, createClient } from 'redis'


class RedisService {
  private static _instance: RedisService;
  private conn:RedisClientType

  private constructor() {

    this.conn = createClient({
      url: process.env.REDIS_SERVER || "redis://localhost:6379"
    })

    this.conn.connect();
    
    this.conn.on("connect", function() {
      console.log("Redis Connected")
    });
    
    this.conn.on("error", function (){
      console.error("Redis Error")
    })
  }

  public getClient = () => {
    return this.conn
  }

  static getInstance() {
      if (this._instance) {
          return this._instance;
      }

      this._instance = new RedisService();
      return this._instance;
  }
}

export default RedisService;