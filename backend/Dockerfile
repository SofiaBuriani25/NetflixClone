
# crea ambiente Linux con PHP
FROM php:8.4-cli 

# dipendenze base + estensioni PHP necessarie per Laravel
RUN apt-get update && apt-get install -y \
    git \
    unzip \
    curl \
    libzip-dev \
    && docker-php-ext-install pdo pdo_mysql zip

# installa composer dentro il container
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# le operazioni nel container avvengono in questa cartella
WORKDIR /var/www/html

# copia progetto
COPY . .

# installa dipendenze Laravel/PHP
RUN composer install

EXPOSE 8000

# AVVIA SERVER LARAVEL
CMD ["php", "artisan", "serve", "--host=0.0.0.0", "--port=8000"] 