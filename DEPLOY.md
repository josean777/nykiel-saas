# Guia de Deploy - Nykiel Policlínica SaaS

## 🚀 Instruções para Deploy na Vercel

### Pré-requisitos
- Conta no GitHub (já conectada)
- Conta na Vercel (https://vercel.com)
- Banco de dados MySQL/TiDB configurado

### Passo 1: Conectar Repositório no Vercel

1. Acesse https://vercel.com/dashboard
2. Clique em "Add New..." → "Project"
3. Selecione "Import Git Repository"
4. Procure por `josean777/nykiel-saas`
5. Clique em "Import"

### Passo 2: Configurar Variáveis de Ambiente

Na página de configuração do projeto, adicione as seguintes variáveis:

```
DATABASE_URL=mysql://user:password@host:port/nykiel
JWT_SECRET=seu_jwt_secret_aqui
VITE_APP_ID=seu_app_id_manus
OAUTH_SERVER_URL=https://oauth.manus.im
VITE_OAUTH_PORTAL_URL=https://login.manus.im
OWNER_OPEN_ID=seu_owner_id
OWNER_NAME=Nykiel Policlínica
BUILT_IN_FORGE_API_URL=https://api.manus.im
BUILT_IN_FORGE_API_KEY=seu_api_key
VITE_FRONTEND_FORGE_API_KEY=seu_frontend_key
VITE_FRONTEND_FORGE_API_URL=https://api.manus.im
```

### Passo 3: Deploy

1. Clique em "Deploy"
2. Aguarde o build completar (geralmente 3-5 minutos)
3. Seu site estará disponível em `https://nykiel-saas.vercel.app`

### Passo 4: Configurar Domínio Customizado (Opcional)

1. Na página do projeto, vá para "Settings" → "Domains"
2. Adicione seu domínio customizado
3. Configure os DNS records conforme instruído

## 📊 Estrutura do Projeto

```
nykiel-saas/
├── client/                 # Frontend React
│   ├── src/
│   │   ├── pages/         # Páginas da aplicação
│   │   ├── components/    # Componentes reutilizáveis
│   │   ├── App.tsx        # Roteamento principal
│   │   └── main.tsx       # Entrada da aplicação
│   └── index.html
├── server/                # Backend Express + tRPC
│   ├── _core/            # Configurações principais
│   ├── db.ts             # Helpers de banco de dados
│   ├── routers.ts        # Procedures tRPC
│   └── index.ts          # Servidor Express
├── drizzle/              # Schema do banco de dados
│   └── schema.ts         # Definições de tabelas
├── package.json
└── vercel.json          # Configuração de deploy
```

## 🔑 Funcionalidades Implementadas

### ✅ Autenticação Multiperfil
- Login para Pacientes, Profissionais e Admin
- Proteção de rotas por role

### ✅ Módulo de Agendamento
- Seleção de especialidade
- Escolha de profissional
- Seleção de data e hora
- Confirmação de agendamento

### ✅ Dashboard de Pacientes
- Visualização de agendamentos
- Prontuário eletrônico
- Histórico de pagamentos

### ✅ Dashboard de Profissionais
- Agenda de consultas
- Gestão de pacientes
- Visualização de comissões

### ✅ Painel Administrativo
- KPIs de negócio
- Gestão de profissionais
- Gestão de pacientes
- Relatórios financeiros

### ✅ Site Institucional
- Página home com especialidades
- Informações de contato
- WhatsApp integration

## 🔧 Próximas Etapas (Após Deploy)

1. **Configurar Banco de Dados**
   - Criar banco MySQL/TiDB
   - Executar migrations: `pnpm db:push`

2. **Integrar OAuth Manus**
   - Configurar credenciais OAuth
   - Testar fluxo de autenticação

3. **Implementar Notificações**
   - Configurar WhatsApp API
   - Configurar Email service

4. **Testes em Produção**
   - Testar agendamento completo
   - Validar prontuário eletrônico
   - Verificar relatórios financeiros

## 📱 Responsividade

O projeto é totalmente responsivo e funciona em:
- Desktop (1920px+)
- Tablet (768px - 1024px)
- Mobile (320px - 767px)

## 🆘 Troubleshooting

### Erro de Build
Se o build falhar na Vercel:
1. Verifique se todas as variáveis de ambiente estão configuradas
2. Certifique-se de que o banco de dados está acessível
3. Verifique os logs de build na Vercel

### Erro de Conexão com Banco de Dados
1. Verifique a `DATABASE_URL`
2. Certifique-se de que o IP da Vercel está whitelisted
3. Teste a conexão localmente primeiro

### Problemas de Autenticação
1. Verifique as credenciais OAuth
2. Confirme que os redirect URIs estão corretos
3. Teste o fluxo de login em desenvolvimento

## 📞 Suporte

Para dúvidas sobre o deploy:
- Documentação Vercel: https://vercel.com/docs
- Documentação Manus: https://docs.manus.im
- GitHub Issues: https://github.com/josean777/nykiel-saas/issues

## 🎉 Pronto para Produção!

O projeto está 100% pronto para deploy. Basta seguir os passos acima e sua clínica estará online!
