### Requisitos

* PHP 8.2 
* MySQL 8
* Composer
* Node.js 20
  
### Instalar dependencias php e node ###

Duplicar o arquivo ".env-example" e renomear para ".env".
Alterar no arquivo ".env" as credenciais do Banco de dados.


instalar as dependencias do php
```
composer install
```

instalar as depencias do NOde.js
```
npm install
```

Gerar a chave no arquivo ".env"
```
php artisan key:generate
```
Executar as migration para criar a base de dados e as tabelas.
```
php artisan migrate
```

Cadastrar registro de teste
```
php artisan db:seed
```


### Como Rodar o projeto ###


Executar as bibliotecas Node.js
```
npm run dev
```

Executar o projeto criado com Laravel.
```
php artisan serve
```

Acessar no navegador a URL apos .executar os dois comandos acima 
```
http://127.0.0.1:8000
```


### Caso nao tenha o projeto criado ###
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

Criar Seed. 
```
php artisan make:seeder UserSeeder
```

Cadastrar registro de teste
```
php artisan db:seed
```
