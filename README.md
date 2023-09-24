# MarvelHeróis

Este projeto foi gerado com [Angular CLI](https://github.com/angular/angular-cli) na versão 15.2.9. 🚀

## Servidor de Desenvolvimento

Execute `ng serve` para iniciar o servidor de desenvolvimento. Acesse `http://localhost:4200/`. A aplicação será recarregada automaticamente se você modificar qualquer um dos arquivos de origem.

## Geração de Código

Execute `ng generate component nome-do-componente` para gerar um novo componente. Você também pode usar `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Construção

Execute `ng build` para construir o projeto. Os artefatos de construção serão armazenados no diretório `dist/`.

## Execução de Testes Unitários (NESSE PROJETO NÃO POSSUI TESTES ALÉM DOS PADRÕES DA GERAÇÃO DE COMPONENTES)

Execute `ng test` para executar os testes unitários via [Karma](https://karma-runner.github.io).

## Execução de Testes de Ponta a Ponta (NESSE PROJETO NÃO POSSUI TESTES ALÉM DOS PADRÕES DA GERAÇÃO DE COMPONENTES)

Execute `ng e2e` para executar os testes de ponta a ponta através de uma plataforma de sua escolha. Para usar este comando, você precisa primeiro adicionar um pacote que implementa as capacidades de teste de ponta a ponta.

## Ajuda Adicional

Para obter mais ajuda sobre o Angular CLI, use `ng help` ou consulte a página [Visão Geral e Referência de Comandos do Angular CLI](https://angular.io/cli).

---

## Configuração da API da Marvel

Para usar esta aplicação, você precisa se registrar na API da Marvel. Siga estas etapas:

1. Acesse [https://developer.marvel.com/](https://developer.marvel.com/).

2. Clique em "Get Started" para criar uma conta ou fazer login.

3. Após fazer login, vá para o painel de desenvolvedor.

4. Crie um novo aplicativo para obter suas chaves da API.

5. Uma vez que você tenha suas chaves (uma pública e uma privada), adicione-as ao arquivo `src/assets/config/appSettings.json`.

6. DETALHE IMPORTANTE NÃO ESQUEÇA DE AUTORIZAR AS CHAMADAS AO ENDPOINT SE NÃO VAI RETORNAR 401 EM "Your authorized referrers" sugiro usar 4200 ou * e depois remova.

   Exemplo de `appSettings.json`:

   ```json
   {
     "apiKey": "SUA_CHAVE_PUBLICA",
     "hash": "SUA_CHAVE_PRIVADA"
   }
   ```
