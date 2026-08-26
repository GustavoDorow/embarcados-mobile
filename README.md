# Embarcados Mobile

Aplicativo de hospedagens alternativas em Santa Catarina, desenvolvido como Atividade 1 da disciplina INE5670 - Desenvolvimento de Sistemas Móveis e Embarcados, da Universidade Federal de Santa Catarina (UFSC), no semestre 2026.2.

O projeto usa React Native, Expo SDK 57 e Expo Router.

## Proposta

O aplicativo ajuda turistas a encontrar campings, hostels, pensões e outras hospedagens alternativas. A proposta da atividade prevê:

- tela inicial com identidade visual e atrações turísticas de Santa Catarina;
- lista de propriedades ordenada por nome e com filtro por cidade;
- detalhes da hospedagem com imagens, vídeo, descrição, endereço, preços e contatos;
- lista persistente de propriedades de interesse;
- mapa com as propriedades disponíveis;
- abertura de e-mail, telefone, WhatsApp e aplicativo de mapas pelos dados de cada hospedagem.

Os dados das propriedades devem vir de arquivos JSON ou XML, locais ou remotos, sem ficarem escritos diretamente nos componentes.

## Requisitos

- Node.js 22.13 ou mais recente;
- npm;
- Expo Go em um celular, ou um emulador Android/iOS configurado.

O iOS Simulator exige macOS. Também é possível executar a versão web em um navegador.

## Como rodar

Clone o repositório e entre na pasta do projeto:

```bash
git clone https://github.com/GustavoDorow/embarcados-mobile.git
cd embarcados-mobile
```

Instale as dependências:

```bash
npm install
```

Inicie o servidor de desenvolvimento:

```bash
npm start
```

O terminal mostrará um QR Code para abrir o app no Expo Go. O computador e o celular devem estar na mesma rede. Também é possível iniciar uma plataforma diretamente:

```bash
npm run android
npm run ios
npm run web
```

Se a rede local impedir a conexão com o celular, use um túnel:

```bash
npx expo start --tunnel
```

## Estrutura principal

```text
src/app/       telas e rotas do Expo Router
src/components componentes reutilizáveis
src/constants  constantes do aplicativo
src/hooks      hooks compartilhados
assets/        imagens, ícones e outros arquivos estáticos
```

## Licença

Este projeto está disponível sob os termos da licença MIT.
