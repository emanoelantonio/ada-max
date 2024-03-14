# Ada Max

Este projeto é uma plataforma de Streaming de vídeo onde os usuários podem assistir uma variedade de **Filmes**, **Séries** e **Documentários**. Esse projeto foi desenvolvido utilizando os conceitos abordados ao longo do módulo 6 de **Framework de Front End II (REACT)** na plataforma da [AdaTech](https://ada.tech/) para o programa _Vem Ser Tech iFood_ do [Potência Tech](https://potenciatech.com.br/) em parceria com a [iFood](https://www.ifood.com.br/).

## Tecnologias

- React
  - Comunicação com API's;
  - Hooks (useCallback, useContext, useState, useEffect, useMemo, useRef) e custom hooks;
  - Formulário utilizando bibliotecas externas e Rotas.
- [React Query](https://tanstack.com/query/v3/docs/framework/react/overview) `data-fetching library`: Para lidar com requisições de dados e cache;
- [React Hook Form](https://react-hook-form.com/) `Performant, flexible and extensible forms with easy-to-use validation`: Para lidar com forms;
- [Zod](https://zod.dev/) `TypeScript-first schema validation with static type inference`: Para criação de schemas de validação de dados;
- [React i18next](https://react.i18next.com/guides/quick-start) Internacionalização;
- [Styled Components](https://styled-components.com/)`Styling your way with speed, strong typing, and flexibility.`: Para aplicar os estilos;

## Requisitos e Funcionalidades

### Login

- [ x ] Tela de login com `email` e `password`;
- [ x ] Fazer validação dos campos;
- [ x ] Fazer chamada POST `/api/signIn`;
- [ x ] Quando BackEnd retornar 401: Mostrar mensagem de erro ex:`Credencias inválidas`
- [ x ] Quando BackEnd retornar 200: Redirecionar para tela conforme o role do usuário;
      Se for `user` para tela `Profile` se `admin` para Backstage;

### Logout

- [ x ] Criar algum ponto no sistema para fazer logout, limpando o token e redirecionando para o login;

### Profile

- [ x ] Listar os profiles;
- [ x ] Criar um novo profile;
- [ x ] Alterar um profile;
- [ x ] Remover um profile;
- [ x ] Apos selecionado um profile, redirecionar para `/home`

### Home

- [ x ] Mostrar os banners. Pegando de GET `/api/banners`;
- [ x ] (plus) Criar um carousel com os banners;
- [ x ] Mostrar os trilhos de ofertas. Pegando em GET `/api/trail-offers`;
- [ x ] No momento que o elmento da oferta entrar no viewport, chamamos o GET `/api/trail-offer/:id` então mostramos data um dos thumbs das ofertas

### Funcionalidades gerais

- [ x ] Use Internacionalização para os textos;
- [ x ] Use os hooks, especialmente criando custom hooks;
- [ x ] Componentize os elementos para que fiquem reaproveitáveis;
- [ x ] Use Context API;
- [ x ] Valide sempre os formulários para que o mesmo não seja submetido sem os dados estarem ok;
- [ x ] Coloque `Loading` onde precisa;
- [ x ] Trate erros inesperados usando Error Boundaries; (para não dar a famosa tela branca)


## 📑 Report :

Você pode reportar algum problema na seção <a href="https://github.com/emanoelantonio/ada-max/issues">Issues</a>, considere importante.

### 🤝 Contribuindo - We can advanced together!

## 🧠 Autores :
 <img style="border-radius: 50%;" src="https://avatars2.githubusercontent.com/u/60781248?s=460&u=43dbba3483d275c3d8964df24a8f5139f53dc282&v=4" width="50px;" alt="imagem de perfil do autor"/></br><sub>Emanoel Antonio</sub></br>
<img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/117774887?v=4" width="50px;" alt="imagem de perfil do autor"/></br><sub>Ana Emanuela</sub></br>
  </br>
 <a href="https://www.linkedin.com/in/emanoel-antonio/"><img align="center" src="https://img.shields.io/static/v1?label=&message=Linkedin&color=3D008A&style=for-the-badge&logo=linkedin"/></a>
 <img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/117774887?v=4" width="50px;" alt="imagem de perfil do autor"/></br><sub>Ana Emanuela</sub></br>
  </br>
  </br>
 <a href="https://www.linkedin.com/in/gustavoschmitt13/"><img align="center" src="https://img.shields.io/static/v1?label=&message=Linkedin&color=3D008A&style=for-the-badge&logo=linkedin"/></a>
 <img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/86036030?s=400&u=264352b8ae079e44f1b120e6cf05d34a60775b7f&v=4" width="50px;" alt="imagem de perfil do autor"/></br><sub>Gustavo Schmitt</sub></br>
  </br>