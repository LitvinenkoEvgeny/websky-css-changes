Изменения дефолтных стилей websky/web-checkin

Удобный воркфлоу(на примере nordwind):
добавить директорию нужного проекта

nordwind/index.css/

в workspace в инструментах разработчика
выполнить

```
live-server nordwind
```

после в консоли
на площадке букинга/чекина nordwind
в консоли выполнить
```
document.head.insertAdjacentHTML('beforeEnd', '<link rel="stylesheet" href="http://127.0.0.1:8080/index.css/index.css">')
```

В итоге получим подобие live-reload'а