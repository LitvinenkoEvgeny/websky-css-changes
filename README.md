Изменения дефолтных стилей websky/web-checkin

Удобный воркфлоу(на примере nordwind):
добавить директорию нужного проекта

dist/nordwind/

в workspace (devtools -> Sources -> Filesystem) в инструментах разработчика

выполнить

```
live-server dist/nordwind
```

после на площадке букинга/чекина nordwind
в консоли выполнить
```
document.head.insertAdjacentHTML('beforeEnd', '<link rel="stylesheet" href="http://127.0.0.1:8080/index.css">')
```

В итоге получим подобие live-reload'а