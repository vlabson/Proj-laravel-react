### Sequencia para Criar o projeto ###

Criar o projeto com Laravel.
```
composer create-project laravel/laravel .
```

Instalar o Breeze ( recurso nativo laravel para sistema de Login )
```
composer require laravel/breeze --dev
```

Publicar a autenticação, rotas, controladores e outros recursos para a aplicação
```
php artisan breeze:install
```
* Selecionar React com o Breeze, digitar o "react".
* Selecionar Recurso opcional, digitar o "dark".
* Selecionar framework para teste, digitar o "1".

Executar as migration para criar a base de dados e as tabelas.
```
php artisan migrate
```

Instalar as dependencias no Node.js
```
npm install
```

Executar as bibliotecas Node.js
```
npm run dev
```

Iniciar o projeto criado com Laravel.
```
php artisan serve
```

Acessar no navegador a URL.
```
http://127.0.0.1:8000
```

Criar Seed. 
```
php artisan make:seeder UserSeeder
```

Cadastrar registro de teste
```
php artisan db:seed
```