# V1 Ecommerce Practice App
A simple application using Laravel 5.7

## Prerequisite
- Composer
- NPM
- MySQL
- PHP 7+

## Setup
- Install the laravel dependencies by running this command.
```
composer install
```
- Install NPM Packages used in this project by running this command.
```
npm install
```
***Note: If you encounter any issues with `node-sass`, please consider this solution https://github.com/sass/node-sass/issues/2345 . it only occurs on Node v10+***

- Ensure to create a database provided in your `.env` or rename it to your preferred empty database.
```
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=yourdbnamehere
DB_USERNAME=dbusername
DB_PASSWORD=dbpassword
```
- After successfully setup your database. Please run our migration by this command.
```
php artisan migrate
```
- Upon completion of the migration we need to fill it up with our Default data and Fake Data by running:
```
php artisan db:seed
```

After that setup we are good to go.

## Running The Application.
There are two types in running the application.

### 1) Using `XAMPP` Apache
- Transfer the whole application folder to the `htdocs` in your XAMPP directory.
- Then access it as `localhost/<projectFolder>/public` since the `index.php` is in the public folder.
- it should display the `Home` page which shows the `list` of products.

### 2) Inside the Application (on any location)
- Open a `cmd` or `terminal` go to the `root folder` of the application.
- Then run `php artisan serve --port <portNumber>` to any port you desired.
- It will generate a url and port, run it in the browser.
- it should display the `Home` page which shows the `list` of products.

## Features in Application.
#### Home
- :heavy_check_mark: List of Product
  - :x: Tab of product types
- :x: Purchase Product
- :x: Customer Transaction History
#### Admin
- :x: Login 
- :heavy_check_mark: Product Management
  - :heavy_check_mark: Adding of Product
  - :x: Edit of Product
  - :x: Delete of Product 
- :x: User Admin Management (CRUD)
- :x: Customer Information Management (CRUD)
- :x: Product Type Management (CRUD)
- :x: Product Sales
- :x: Pending Product Purchase Information

## Other Ready Setup
Ready setup but still on going
- Dynamic currency support with exchange rates (could also use API)
- Translation Ready
- Different Timezone Ready
- Customer Pending Purchases
- Transaction History