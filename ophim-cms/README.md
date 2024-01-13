<p align="center"><a href="https://laravel.com" target="_blank"><img src="https://raw.githubusercontent.com/laravel/art/master/logo-lockup/5%20SVG/2%20CMYK/1%20Full%20Color/laravel-logolockup-cmyk-red.svg" width="400"></a></p>

<p align="center">
<a href="https://travis-ci.org/laravel/framework"><img src="https://travis-ci.org/laravel/framework.svg" alt="Build Status"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/dt/laravel/framework" alt="Total Downloads"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/v/laravel/framework" alt="Latest Stable Version"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/l/laravel/framework" alt="License"></a>
</p>

## Description

Web film with hacoidev/ophim-core (https://github.com/hacoidev/ophim-core)

## Installation

```bash
$ cp .env.example .env
$ docker-compose up -d --build
$ docker-compose exec app sh
$ composer require --no-cache hacoidev/ophim-core -W
$ php artisan ophim:install
$ php artisan ophim:user
$ php artisan optimize:clear
$ php artisan key:generate
$ composer require --no-cache hacoidev/ophim-ripple
$ composer require --no-cache ophimcms/theme-ipc
$ composer require --no-cache hacoidev/ophim-crawler
$ php artisan ophim:menu:generate
$ php artisan schedule:run >> /dev/null 2>&1
```


