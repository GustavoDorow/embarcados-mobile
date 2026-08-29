# Progresso do projeto

Última atualização: 26 de agosto de 2026.

## Objetivo

Desenvolver o aplicativo descrito em [`atividade01.pdf`](./atividade01.pdf), usando React Native com Expo SDK 57 e Expo Router.

O aplicativo será voltado à divulgação de hospedagens alternativas em Santa Catarina. Ele deverá permitir consultar hospedagens, abrir detalhes, salvar locais de interesse e visualizar as propriedades em um mapa.

## Requisitos principais da atividade

- Tela inicial com logomarca e conteúdo turístico de Santa Catarina.
- Lista de hospedagens ordenada por nome e filtrável por cidade.
- Uma única tela dinâmica para os detalhes de qualquer hospedagem.
- Lista persistente de hospedagens de interesse.
- Mapa com as propriedades disponíveis.
- Fotos, vídeos, descrição, endereço, preços e contatos em cada hospedagem.
- Links clicáveis para e-mail, telefone, WhatsApp e aplicativo de mapas.
- Dados das hospedagens armazenados em JSON ou XML, sem valores fixos no código-fonte.

## Limpeza inicial

O código de demonstração criado pelo template do Expo foi removido. Isso incluiu:

- telas de exemplo;
- componentes visuais de demonstração;
- hooks de tema;
- constantes de tema;
- estilos globais do template;
- script `reset-project` e sua entrada no `package.json`.

As pastas vazias foram preservadas com arquivos `.gitkeep`. Os arquivos de configuração, os recursos de `assets` e o PDF da atividade também foram mantidos.

Depois da limpeza, ficaram somente os arquivos mínimos necessários para executar um aplicativo Expo Router vazio.

## Estrutura atual

```text
src/
├── app/
│   ├── _layout.tsx
│   └── (tabs)/
│       ├── _layout.tsx
│       ├── index.tsx
│       ├── interests.tsx
│       └── properties.tsx
├── components/
│   └── ui/
├── constants/
└── hooks/
```

O nome `(tabs)` contém parênteses de propósito. No Expo Router, isso cria um grupo de rotas sem adicionar `tabs` ao endereço da tela.

## Implementação atual

### Layout principal

O arquivo `src/app/_layout.tsx` usa `Stack` como navegador principal. O cabeçalho desse navegador está oculto porque as telas principais usarão a barra de abas.

### Navegação por abas

O arquivo `src/app/(tabs)/_layout.tsx` usa `Tabs` e registra três telas:

- `index`, exibida ao usuário como `Início`;
- `properties`, exibida como `Hospedagens`;
- `interests`, exibida como `Interesses`.

O campo `name` deve corresponder ao nome do arquivo da rota. O campo `title` controla o texto exibido na interface.

### Tela inicial

O arquivo `src/app/(tabs)/index.tsx` cria a rota `/`. Por enquanto, ele mostra apenas o texto `Início` centralizado.

### Lista de hospedagens

O arquivo `src/app/(tabs)/properties.tsx` cria a rota `/properties`. Por enquanto, ele mostra apenas o texto `Lista de hospedagens` centralizado.

Essa tela receberá os dados das propriedades quando o arquivo JSON for criado.

### Lista de interesses

O arquivo `src/app/(tabs)/interests.tsx` cria a rota `/interests`. Por enquanto, ele mostra o texto `Propriedades de interesse` centralizado.

Essa tela exibirá as hospedagens marcadas pelo usuário de forma persistente.

## Verificações realizadas

- O TypeScript foi verificado com `npx tsc --noEmit`.
- As dependências foram verificadas com `npx expo install --check`.
- Uma exportação web de produção foi concluída com sucesso.
- A configuração usada segue a documentação da versão 57 do Expo.

## Próximo passo

Criar a base de dados de hospedagens alternativas em formato JSON (em `assets/data/properties.json` ou similar) com os dados exigidos pela especificação (nome, descrição, cidade, bairro, fotos, vídeo, coordenadas, contatos e preços).
