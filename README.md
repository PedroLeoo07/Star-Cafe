## Filmes

### Descrição

O projeto consiste em uma API que permite o gerenciamento de filmes, sendo possível adicionar, atualizar e deletar filmes.

### Tecnologias

- Node.js
- Express
- JSON
- CORS
- UUID

### Instalação

1. Clone o repositório
2. Entre na pasta do projeto
3. Rode o comando `npm install` para instalar as dependências
4. Rode o comando `npm start` para iniciar o servidor
5. Acesse a URL `http://localhost:1417/` para ver a lista de filmes
6. Acesse a URL `http://localhost:1417/api/movies` para ver a lista de filmes

## Código em XML

![M](public/código%20em%20XML.png)



  # API de Filmes - Velozes e Furiosos

## Filmes

### Velozes e Furiosos 5
- **Diretor:** Justin Lin
- **Distribuição:** Universal
- **Lançamento:** 15 de abril de 2011

### Velozes e Furiosos 7
- **Diretor:** James Wan
- **Distribuição:** Universal
- **Lançamento:** 15 de abril de 2015

### Velozes e Furiosos 10
- **Diretor:** James Wan
- **Distribuição:** Universal
- **Lançamento:** 15 de abril de 2015

### Velozes e Furiosos 4
- **Diretor:** James Wan
- **Distribuição:** Universal
- **Lançamento:** 15 de abril de 2015

## Rotas da API

### Adicionar Filme
- **Método:** POST
- **Endpoint:** `/addMovie`
- **Parâmetros:**
  - `title`
  - `director`
  - `distribution`
  - `lancamento`

### Obter Todos os Filmes
- **Método:** GET
- **Endpoint:** `/getAllMovies`

### Obter Filme por ID
- **Método:** GET
- **Endpoint:** `/getMovieById/{id}`
- **Parâmetros:**
  - `id`

### Atualizar Filme
- **Método:** PUT
- **Endpoint:** `/updateMovie/{id}`
- **Parâmetros:**
  - `id`
  - `updateData`

### Deletar Filme
- **Método:** DELETE
- **Endpoint:** `/deleteMovie/{id}`
- **Parâmetros:**
  - `id`


