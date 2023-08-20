export enum ReportType {
  INCOME = 'income',
  EXPENSE = 'expense',
}

const data: Data = {
  report: [
    {
      id: 'uuid1',
      source: 'Salary',
      amount: 7500,
      created_at: new Date(),
      updated_at: new Date(),
      type: ReportType.INCOME,
    },
  ],
};

interface Data {
  report: {
    id: string;
    source: string;
    amount: number;
    created_at: Date;
    updated_at: Date;
    type: ReportType;
  }[];
}

data.report.push({
  id: 'uuid1',
  source: 'Salary',
  amount: 7500,
  created_at: new Date(),
  updated_at: new Date(),
  type: ReportType.INCOME,
});
