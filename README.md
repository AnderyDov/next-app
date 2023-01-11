# Next + React + typescript project

Простое Next приложение с использованием основных опций фреймворка, взаимодействие с сервером с rest api

# Эндпоинты для общения с сервером:

NEXT_PUBLIC_DOMAIN= <корневой путь для api>

1.  получение двнных меню
    method: POST
    path : '/api/top-page/find'
    body : {"firsCategory": number}

2.  получение данных страницы
    method: GET
    path : '/api/top-page/byAlias/' + params.alias

3.  получение данных товара
    method: POST
    path : '/api/product/find'
    bode : {"page": string, limit: number}
