# SAP samples for China developers.

This repository contains some SAP BTP Samples for China developers including partners, customers, employees. We will describe details in Chinese for convenience.

**Disclaimer**: this repository is not official support by SAP.

目标主要集中在 BTP 平台上的开发者，提供一些 Samples 示例给中国地区的开发者参考。

**注意**：这个仓库并非 SAP 官方支持。

## 层次结构

- `cap`: node.js CAP application

  - `./app/risks` 是 `Fiori Elements` webapp.
  - `./app/mitigations-freestyle` 是 `Fiori Freestyle` webapp.
  - 这两个 webapp 都使用 `./srv` 作为后端。`cds watch` 启动工程，访问 http://localhost:4004/launchpage.html 或者 http://localhost:4004/risks/webapp/index.html?sap-language=zh 或者 http://localhost:4004/mitigations-freestyle/webapp/index.html?sap-language=zh，其中 url 添加 `sap-language=zh` 参数可以实现页面的本地化，添加参数 `?sap-ui-debug=true&sap-ui-logLevel=3` 可以开启 Fiori Logger.

- `fiori/quickstart.03` 从 https://sapui5.hana.ondemand.com/#/topic/073d1073fc604beda94589d5c93b32e2 下载下来的示例，配置静态文件服务器即可访问，比如 Nginx 等等。

- `fiori/layout.SimpleForm` 从 https://sapui5.hana.ondemand.com/#/entity/sap.ui.layout.form.SimpleForm/sample/sap.ui.layout.sample.SimpleForm354wide 下载下来的示例，配置静态文件服务器即可访问，比如 Nginx 等等。

- `fiori/sap.m.sample.HeaderContainer` 和 `fiori/sap.m.sample.RefreshResponsive` 从 https://sapui5.hana.ondemand.com/#/controls 下载下来的示例，配置静态文件服务器即可访问，比如 Nginx 等等。设备适配和响应式。

- `fiori/sap.ui.layout.sample.GridResponsiveness` 从 https://sapui5.hana.ondemand.com/#/controls 下载下来的示例，配置静态文件服务器即可访问，比如 Nginx 等等。Grid 响应式布局。

- SAP API Business Hub
  - TODO
- 前后端分离
  - 小程序
  - TODO

## 互动

欢迎通过 issues 来提问。

也欢迎提交 PR 😊。

## TODO

- https://learning.sap.com/learning-journey/build-side-by-side-extensions-on-sap-btp
- https://developers.sap.com/tutorials/btp-cf-buildpacks-java-create.html
