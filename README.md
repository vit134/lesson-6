# Архитектура. ШРИ-2018

- nodejs
- express
- pug
- gulp

## Run and build

- npm run build - build static files (dev enviropment, no minify)
- npm run build:dev - build static files with watch
- npm run build:prod - build static files (prod enviropment, with minify)

- lint - start js lint test
- lint--fix: - start js lint test with fix errors
- style-lint - start style lint test
- style-lint--fix - start style lint test with fix errors

## Структура

- modules - модули фрайворка
  - Actions.js - хранятся все возможные экшены
  - Store.js - создание хранилища
  - UpdateState.js - обновление состояния хранилища
- views - страницы приложения
