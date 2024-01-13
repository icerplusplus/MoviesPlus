# Set master image
FROM php:7.4-fpm-alpine

# Set working directory
WORKDIR /var/www/html

# Install PHP Composer
# ENV COMPOSER_ALLOW_SUPERUSER=1
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer
RUN docker-php-ext-install exif pdo_mysql
RUN apk add --no-cache zip libzip-dev
RUN docker-php-ext-configure zip
RUN docker-php-ext-install zip
RUN docker-php-ext-install pdo pdo_mysql 

# Copy existing application directory
COPY . .