import { Module } from '@nestjs/common';

import { ConfigModule, ConfigService } from '@nestjs/config';
import SensorModule from '../sensors/sensors.module';
import InfluxDBService from './influxdb.service';
import influxDBConfig from './influxdb.config';

@Module({
  imports: [
    SensorModule,
    ConfigModule.forRoot({
      load: [influxDBConfig],
    }),
  ],
  providers: [InfluxDBService, ConfigService],
})
class InfluxDBModule {}

export default InfluxDBModule;
