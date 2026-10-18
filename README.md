# Angular Starter

Angular 4 入門學習筆記（繁體中文），內容涵蓋環境建置、專案建置與打包、核心概念、元件互動與 HTTP 模組，並附上一個實作範例專案 [`sample-app`](./sample-app)。

> [!WARNING]
> **本專案已封存，不再維護。**
>
> 內容撰寫於 2017–2018 年，基於 Angular 4（Angular CLI 1.4、TypeScript 2.3、RxJS 5）。現行 Angular 版本有許多不相容的變更，筆記中的部分指令與程式碼可能已無法執行，學習新版 Angular 請以 [Angular 官方文件](https://angular.dev) 為準。

## 目錄

| # | 章節 | 內容 |
|---|------|------|
| 01 | [Environment and Introduction](./01.environment-and-introduction.md) | 開發環境設定、建立專案、Root Module 與 Root Component |
| 02 | [Run and Build Project](./02.run-and-build-project.md) | `ng serve` 開發伺服器、`ng build` 打包與 `base href` 設定 |
| 03 | [Concept](./03.concept.md) | Data Model、多元件組合、Service、Router |
| 04 | [Interaction with Components](./04.interaction-with-component.md) | Data Binding 與元件間的資料傳遞 |
| 05 | [Http Module](./05.http-module.md) | 透過 HTTP 呼叫遠端 API |
| 06 | [Common Issues](./06.common-issue.md) | 開發時常見問題與解法 |

## 範例專案

[`sample-app`](./sample-app) 是一個咖啡廳查詢工具，可依城市、Wi-Fi、座位、安靜程度與插座等條件篩選店家，使用 Angular 4 與 [PrimeNG](https://primeng.org) 4 開發。

```sh
cd sample-app
npm install
npm start   # http://localhost:4200
```

> [!NOTE]
> 範例專案依賴的套件版本較舊，需搭配舊版 Node.js（約 v6–v8）才能順利安裝與執行。

## 與現行 Angular 的主要差異

閱讀本筆記時，請留意以下已變更的部分：

| 本筆記（Angular 4） | 現行 Angular |
|----------------------|--------------|
| `@angular/http` 的 `Http` | `@angular/common/http` 的 `HttpClient`（`@angular/http` 已於 v8 移除） |
| `import 'rxjs/add/operator/...'` | 直接 import RxJS operator 並使用 `pipe()` |
| `NgModule` 與 `declarations` | 預設使用 standalone component |
| `*ngIf`、`*ngFor` | 內建控制流程 `@if`、`@for` |
| `@Input()`、constructor injection | 另可使用 signal-based `input()` 與 `inject()` |
| TSLint、Protractor | ESLint（`angular-eslint`）及其他現代 E2E 測試工具 |

## License

[MIT](./LICENSE)
