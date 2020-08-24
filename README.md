## Teste WAProject

Para inicializar é necessário ter o `node` instalado.

### Desenvolvimento

- Instale as dependências rodando `yarn` ou `npm i`;
- Caso queira evitar o problema de [rate limit](https://docs.github.com/en/rest/reference/rate-limit), configure o `.env` a partir do `.env.example`;
- Execute `yarn start` ou `npm run start`.

### Build

- Execute `yarn build` ou `npm run build`;
- Sirva a pasta build gerada após o comando anterior.

### Por que uma chave de api do GitHub?

O GitHub limita o uso da sua api para não autenticados em 50 requisições por hora.

Durante o desenvolvimento, tive que gerar uma chave apenas para teste, o hot reload em conjunto com o useEffect esgotou meu número máximo de requisições por hora.

Para gerar um token de acesso pessoal, siga os passos da [documentação oficial do github](https://docs.github.com/pt/github/authenticating-to-github/creating-a-personal-access-token).

_Nota: O uso do token não é necessário, porém recomendado, a aplicação funcionará mesmo que nenhum token seja provido._
