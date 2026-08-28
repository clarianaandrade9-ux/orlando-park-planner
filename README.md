# Orlando Trip Planner 2.0

Aplicação modular, mobile-first e compatível com GitHub Pages. Une Compras e Gastos em **Compras & Orçamento**, inclui Parques/Outlets, imagem de produto, roteiro e migração da versão legada.

## Configuração
1. Crie um projeto no Firebase e habilite Authentication com Google, Firestore e Storage.
2. Registre um app Web e cole o objeto de configuração em `js/config.js`.
3. No Authentication, adicione o domínio do GitHub Pages aos domínios autorizados.
4. Publique `firestore.rules` e `storage.rules` pelo Firebase CLI ou console.
5. Crie `trips/orlando-2026` e o documento `trips/orlando-2026/members/SEU_UID` com `{ "role": "admin" }`.
6. Para GitHub Pages, publique a raiz na branch `main`.

## Desenvolvimento local
Use um servidor HTTP, pois módulos ES não funcionam corretamente abrindo o HTML por `file://`:
```bash
python3 -m http.server 8080
```
Acesse `http://localhost:8080`.

## Migração
A tela Configurações procura chaves legadas conhecidas no `localStorage`. Ao migrar, converte `shopping`, `expenses` e `itinerary` para o schema 2 e baixa um relatório JSON.

## Observação de segurança
As regras incluídas são um ponto de partida. Revise-as no Firebase Emulator antes de produção. A regra de Storage valida autenticação, tamanho e tipo, mas pode ser reforçada para verificar associação do usuário à viagem.
