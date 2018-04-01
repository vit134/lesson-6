# Архитектура. ШРИ-2018

- nodejs
- express
- pug
- gulp

## Run 

npm run build - сбилдить статику
npm start - запустить сервер

## Build and lint
- npm run build - build static files (dev enviropment, no minify)
- npm run build-watch - build static files with watch
- npm run build:prod - build static files (prod enviropment, with minify)

- lint - start js lint test
- lint--fix: - start js lint test with fix errors
- style-lint - start style lint test
- style-lint--fix - start style lint test with fix errors

## Структура

- modules - модули фрайворка
  - FLUX
    - Actions.js - хранятся все возможные экшены
    - Store.js - создание хранилища
    - UpdateState.js - обновление состояния хранилища
  - MVP
    - Model.js - модель
    - Presenter.js - презентер
    - View.js - вьюшка
  - utils
    - randomInt.js - рандоматор
    - SendToServer.js - фейковая отправка на сервер
    - togglePreloader.js - скрыть/показать прелоадер
- views
  - blocks
    - view-stub.pug - основной контент страницы
  - pages - страницы приложения с шаблонами и js


## Страница приложения

В приложении существует две страницы:
  - FLUX реализация
  - MVP реализация

Для перехода на другую страницу можно моспользоваться ссылкой над заголовком

