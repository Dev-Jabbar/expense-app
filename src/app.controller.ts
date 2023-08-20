import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';

import { ReportType, data } from './data';

@Controller('/report/:type')
export class AppController {
  @Get()
  getAllReports(@Param('type') type: string) {
    const reportType =
      type == 'income' ? ReportType.INCOME : ReportType.EXPENSE;
    return data.report.filter((report) => {
      return report.type === reportType;
    });
  }

  @Get(':id')
  getReportById(@Param('type') type: string, @Param('id') id: string) {
    const reportType =
      type == 'income' ? ReportType.INCOME : ReportType.EXPENSE;
    return data.report
      .filter((report) => {
        return report.type === reportType;
      })
      .find((report) => {
        return report.id === id;
      });
  }

  @Post()
  createReport(@Body() body: { amount: number; source: string }) {
    console.log({ body });
    return 'Created';
  }

  @Put(':id')
  updateReport() {
    return 'updated';
  }

  @Delete(':id')
  deleteReport() {
    return 'delete';
  }
}

//http://localhost:3000/report/income
