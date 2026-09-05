# AcervoTech

O AcervoTech é uma aplicação de biblioteca digital desenvolvida como Projeto Integrador entre as disciplinas de Front-end e Programação Web.

O sistema permite cadastrar livros, consultar os livros cadastrados e filtrar os livros por categoria.

## Tecnologias utilizadas

### Front-end

- React
- Vite
- Axios
- React Router DOM
- CSS Modules

### Back-end

- Java
- Spring Boot
- JdbcTemplate
- H2 Database

## Estrutura do projeto

```
ACERVOTECH/
├── api/
├── cliente/
├── start.bat
├── start.sh
└── README.md
```

A pasta api contém o back-end desenvolvido com Spring Boot.

A pasta cliente contém o front-end desenvolvido com React e Vite.

Como executar o projeto

O projeto possui scripts para facilitar a inicialização do front-end e do back-end.

Antes de executar, é necessário ter instalado:

Java
Maven
Node.js
npm
Linux

Na raiz do projeto, dê permissão de execução ao arquivo:

```
chmod +x start.sh
```

Depois execute:

```
./start.sh
```

O script irá iniciar o back-end e o front-end.

Windows

Na raiz do projeto, execute:

```
start.bat
```

Também é possível executar o arquivo start.bat com dois cliques.

Endereços utilizados

Back-end:

```
http://localhost:8080
```

Front-end:

```
http://localhost:5173
```

Após iniciar o projeto, abra no navegador:

```
http://localhost:5173

```
Funcionalidades

O sistema possui:

Cadastro de livros
Consulta de livros cadastrados
Filtro de livros por categoria
Persistência dos dados no banco
Integração entre o front-end e o back-end
Validação dos dados enviados para a API
Dados de um livro

Cada livro possui:

```
Título
Autor
Categoria
Ano de publicação
Quantidade
```

O id é gerado automaticamente pelo banco de dados.

```
Endpoints da API
Listar todos os livros
GET /livros
```

Exemplo:
```
http://localhost:8080/livros
Cadastrar um livro
POST /livros
```

Exemplo de JSON:

```
{
  "titulo": "O Hobbit",
  "autor": "J. R. R. Tolkien",
  "categoria": "Fantasia",
  "anoPublicacao": 1937,
  "quantidade": 3
}
```

Resposta esperada:

```
{
  "id": 1,
  "titulo": "O Hobbit",
  "autor": "J. R. R. Tolkien",
  "categoria": "Fantasia",
  "anoPublicacao": 1937,
  "quantidade": 3
}
```

Buscar livros por categoria

```
GET /livros/categoria/{categoria}
```

Exemplo:
```
http://localhost:8080/livros/categoria/Fantasia
```

Status HTTP utilizados

A API utiliza os seguintes códigos:

```
200 OK
201 Created
400 Bad Request
```

Integração

O front-end utiliza Axios para realizar requisições para a API.

A API Spring Boot executa na porta 8080.

O front-end React executa normalmente na porta 5173.

Para que o sistema funcione corretamente, os dois devem estar executando ao mesmo tempo.

Autor

Arthur Bispo
