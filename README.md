# AcervoTech

Aplicação de biblioteca digital desenvolvida como Projeto Individual Integrador entre as disciplinas de **Front-end** e **Programação Web**, na SPTech.

O sistema permite cadastrar livros, consultar o acervo e filtrar os registros por categoria. O front-end React consome uma API REST em Java com Spring Boot, que valida e armazena as informações em um banco relacional H2 utilizando JdbcTemplate.

## Funcionalidades

- Cadastro com cinco campos: título, autor, categoria, ano de publicação e quantidade.
- Listagem dos livros cadastrados.
- Filtro por categoria.
- Validação dos dados no back-end.
- Tratamento de carregamento, sucesso e erro no front-end.

## Tecnologias

| Front-end | Back-end |
| --- | --- |
| React e Vite | Java 21 e Spring Boot |
| Axios | JdbcTemplate |
| React Router DOM | H2 Database |
| CSS Modules | Maven |

## Organização do repositório

| Caminho | Conteúdo |
| --- | --- |
| `cliente/` | Aplicação React e arquivos CSS Modules. |
| `api/` | API REST e configuração Maven. |
| `api/src/main/resources/application.properties` | Configuração da aplicação. |
| `api/src/main/resources/schema.sql` | Script de criação da tabela de livros. |
| `docs/documentacao-api.pdf` | Documentação técnica completa. |

## Pré-requisitos

Antes de executar, instale:

- **JDK 21**, incluindo o compilador `javac`.
- **Maven**.
- **Node.js e npm**, em versão compatível com o Vite utilizado pelo projeto.

Para conferir as instalações, execute no terminal:

```bash
java -version
javac -version
mvn -version
node -v
npm -v
```

## Como executar

Utilize **dois terminais separados**: um para a API e outro para o front-end. Os comandos abaixo partem da pasta raiz `AcervoTech`, que contém `api` e `cliente`.

### 1. Abrir o projeto

1. Baixe ou clone o repositório.
2. Abra a pasta `AcervoTech` no VS Code.
3. Selecione **Terminal > Novo Terminal**.
4. Confira se o terminal está na pasta raiz do projeto.

### 2. Iniciar a API

No primeiro terminal, entre na pasta `api`, onde está o `pom.xml`:

```bash
cd api
```

Inicie o back-end:

```bash
mvn spring-boot:run
```

Aguarde a mensagem de inicialização de `AcervoTechApplication`. Na primeira execução, o Maven poderá baixar as dependências.

A API utiliza **http://localhost:8080**. Para consultar os livros, acesse [http://localhost:8080/livros](http://localhost:8080/livros). Sem cadastros, a resposta será `[]`.

**Mantenha esse terminal aberto e a API em execução.**

### 3. Iniciar o front-end

Abra um **segundo terminal** em **Terminal > Novo Terminal**. Partindo da raiz `AcervoTech`, entre na pasta do cliente:

```bash
cd cliente
```

> Se esse terminal abrir dentro de `api`, use `cd ../cliente`.

Na primeira execução, instale as dependências:

```bash
npm install
```

Depois, inicie o front-end:

```bash
npm run dev
```

Nas próximas execuções, basta executar `npm run dev` dentro de `cliente`. Repita `npm install` se as dependências forem alteradas ou se `node_modules` for removida.

### 4. Acessar a aplicação

Abra o endereço informado pelo Vite no terminal, normalmente [http://localhost:5173](http://localhost:5173).

- Acesse **Cadastrar Livros** para registrar um livro.
- Acesse **Verificar Livros** para consultar os registros e filtrar por categoria.

Os dois projetos devem permanecer em execução. Para encerrar, pressione **Ctrl + C** em cada terminal.

## Integração e banco de dados

O Axios utiliza `http://localhost:8080` como URL base, configurada em `cliente/src/services/api.js`. O cliente envia os cadastros por **POST** e consulta os livros por **GET**. A API utiliza `@CrossOrigin` para permitir a comunicação entre as aplicações em origens diferentes.

O banco H2 é configurado automaticamente em memória, e a tabela é criada pelo arquivo `schema.sql`. Não é necessário instalar um servidor de banco separado para essa configuração.

**Os livros permanecem disponíveis somente enquanto a API está ligada. Ao encerrá-la e reiniciá-la, os cadastros são perdidos.** Atualizar apenas o navegador não apaga os dados.

## Documentação técnica

Os endpoints, campos, regras de validação, códigos HTTP, exemplos de requisições e respostas e o roteiro de testes estão no documento abaixo:

[Consultar a documentação técnica em PDF](docs/documentacao-api.pdf)

## Autor

Arthur Bispo dos Santos — SPTech, 2026.
