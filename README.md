# API da Câmara com Axios

Projeto criado com o comando solicitado:

```bash
npx create-expo-app@latest react-camara-api --template blank-typescript
```

Mantém a entrada index.ts e o App.tsx do padrão blank-typescript. O App apresenta a tela Home.
A organização em src/app/Home, src/components/Button e arquivos styles.ts segue o exemplo de compras da aula.

## Executar o projeto pronto

Extraia o ZIP e execute dentro da pasta react-camara-api:

```bash
npm ci
npm start
```

Abra com Expo Go compatível com o SDK instalado. É necessário acesso à internet para consultar a API.
O Axios já está incluído nas dependências. Para adicioná-lo em um projeto novo: `npx expo install axios`.

## Arquivos principais

- `src/services/api.ts`: único arquivo de serviço. Configura Axios com baseURL, timeout e cabeçalho Accept.
- `src/app/Home/index.tsx`: contém a tipagem local, os estados e a consulta com api.get.
- `src/app/Home/styles.ts`: estilos da tela.
- `src/components/Button`: botão reutilizado do exemplo de compras.
- `App.tsx`: apresenta Home.

Não há pasta types nem arquivo deputados.ts.

## Roteiro de leitura

1. Observe a instância criada com axios.create no arquivo services/api.ts.
2. Na Home, observe o tipo Deputado declarado no próprio arquivo.
3. O botão chama conectarAPI, que executa api.get com os parâmetros da consulta.
4. `resposta.data` é o corpo JSON interpretado pelo Axios. Não é necessário chamar resposta.json().
5. `resposta.data.dados` é o array de deputados retornado pela Câmara.
6. A tela exibe esse array como texto JSON com JSON.stringify e também o registra no console.
7. try/catch/finally controla sucesso, falhas e encerramento do carregamento.

A consulta solicita apenas a primeira página, com até 20 deputados, em ordem de nome.
Ela não representa a relação completa de deputados. A tipagem TypeScript não valida o JSON em tempo de execução.
O exemplo se limita à conexão e à visualização do retorno: FlatList e cards ficam para a atividade dos estudantes.

## Conferência manual

Pressione Consultar API: o botão deve ficar desabilitado durante a consulta.
Confira a quantidade e o JSON na tela. Consulte novamente: o retorno deve ser substituído.
Teste uma consulta sem conexão e confira a mensagem de erro e a possibilidade de tentar novamente.

## Documentação

- https://axios-http.com/docs/instance
- https://dadosabertos.camara.leg.br/swagger/api.html

## Validação

Verificação TypeScript concluída com `npx tsc --noEmit`. A interface não foi executada em celular neste ambiente.
