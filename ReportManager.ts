import * as fs from 'fs';
import * as path from 'path';
import { AnalyzerFacade } from './AnalyzerFacade';
import { JsonReportAdapter } from './JsonReportAdapter';
import { CsvReportAdapter } from './CsvReportAdapter';
import { XmlReportAdapter } from './XmlReportAdapter';

export class ReportManager {
  constructor(private format: string) {}

  generateReport(targetPath: string) {
    try {
      let adapter;
      switch (this.format) {
        case 'json':
          adapter = new JsonReportAdapter();
          break;
        case 'csv':
          adapter = new CsvReportAdapter();
          break;
        case 'xml':
          adapter = new XmlReportAdapter();
          break;
        default:
          throw new Error('Unsupported format');
      }

      const analyzer = new AnalyzerFacade(adapter);
      const report = analyzer.generateReport(targetPath);

      const reportsDir = path.join(__dirname, '..', 'reports');
      if (!fs.existsSync(reportsDir)) {
        fs.mkdirSync(reportsDir);
      }

      const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
      const filename = `report-${timestamp}.${this.format}`;
      const filePath = path.join(reportsDir, filename);
      fs.writeFileSync(filePath, report);
      console.log(`Report generated successfully: ${filePath}`);
    } catch (err) {
      if (err instanceof Error) {
  console.error('Error generating report:', err.message);
} else {
  console.error('Unknown error generating report:', err);
}
    }
  }
}