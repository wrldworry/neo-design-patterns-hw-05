# Design Patterns - HW05

## Патерни
- **Facade** — `ReportManager`, `AnalyzerFacade`
- **Adapter** — `JsonReportAdapter`, `CsvReportAdapter`, `XmlReportAdapter`

## Структура
```
src/
  DirectoryReport.ts
  DirectoryAnalyzer.ts
  ReportAdapter.ts
  JsonReportAdapter.ts
  CsvReportAdapter.ts
  XmlReportAdapter.ts
  AnalyzerFacade.ts
  ReportManager.ts
  main.ts
```

## Запуск
```bash
npx ts-node src/main.ts ./папка csv
```