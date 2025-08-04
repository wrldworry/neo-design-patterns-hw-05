import { DirectoryAnalyzer } from './DirectoryAnalyzer';
import { ReportAdapter } from './ReportAdapter';

export class AnalyzerFacade {
  private analyzer = new DirectoryAnalyzer();

  constructor(private adapter: ReportAdapter) {}

  generateReport(path: string): string {
    const report = this.analyzer.analyze(path);
    return this.adapter.export(report);
  }
}