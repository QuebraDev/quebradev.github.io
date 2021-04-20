## QuebraDev

<br/>

Site do podcast QuebraDev.

> Um movimento social que tem como objetivo democratizar a informação para a periferia.

<br/>

- Utilizamos o [Hexo](https://hexo.io/) para desenvolvimento do site.
- Utilizamos o [Docker](https://www.docker.com/) para conteinerizar a aplicação.

<br />

Rodando local (Docker):
```
make start
```
--------------------------------

## Como adicionar uma página para um novo episódio?

<br />

Crie um arquivo para o novo episódio

```
hexo new post titulo-do-episodio
```

<br />

Em seguida, navegue até a página criada em: `source/_posts/titulo-do-episodio`

<br />

Modifique o arquivo com as informações do novo episódio de acordo com cada `chave` do arquivo gerado

<br />

### Chaves

```
title: título do episódio, é correspondente ao título que irá aparecer na página inicial do mesmo
```
```
type: tipo do episódio, utilizado para separar os temas de episódio que temos (Tecnologia, Vivências, Raízes, Politize-se)
```
```
season: sessão em que aparecerá no site, é um campo respectivo à temporada ou edição especial (1, 2, 3, 4, tonorumo)
```
```
cover: endereço da imagem que irá aparecer na home, na listagem de episódios, a imagem deve ter a nomenclatura semelhante à página criada e ser armazenada no diretório images (/images/titulo-do-episodio)
```
```
participants: lista de pessoas participantes do episódio
  - name: nome da pessoa participante
    twitter: identificação do usuário da pessoa participante no twitter
    github: identificação do usuário da pessoa participante no github
    linkedin: identificação do usuário da pessoa participante no linkedin
```
```
songs: lista de todas as músicas utilizadas no episódio 
  - name: nome da música
```
```
date: data de publicação do episódio no formato AAAA-MM-DD HH:MM:SS (2020-05-11 12:00:00)
```
```
tags: palavras chaves separadas por vírgulas que são referentes ao episódio, servem para indexação em buscadores
```
```
description: pequena descrição que vai aparecer na home ao lado da imagem referente ao episódio
```
```
embed_url: aqui irá a url do episódio, hoje extraímos a embed url do anchor, que é a plataforma que utilizamos para ser host dos nossos áudios, assim que um episódio é publicado, é gerada a embed url (responsável pela criação do iframe do episódio)
```
`---`

<br/>

`OBS: Após adicionar as chaves, resta o bloco final, nesta seção é adicionada a descrição completa do episódio que será apresentada na página do episódio gerada.`