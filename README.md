# Next + React + typescript project

Простое Next приложение с использованием основных опций фреймворка, взаимодействие с сервером с rest api

# Эндпоинты для общения с сервером:

NEXT_PUBLIC_DOMAIN= <корневой путь для api>

1.  получение двнных меню\n
    method: POST\n
    path : '/api/top-page/find'\n
    body : {"firsCategory": number}\n

2.  получение данных страницы\n
    method: GET\n
    path : '/api/top-page/byAlias/' + params.alias\n

3.  получение данных товара\n
    method: POST\n
    path : '/api/product/find'\n
    bode : {"page": string, limit: number}\n
