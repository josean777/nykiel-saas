# Nykiel Policlínica - SaaS TODO

## Fase 1: Infraestrutura e Banco de Dados
- [x] Inicializar projeto webdev com template web-db-user
- [x] Criar schema de banco de dados completo
- [x] Criar helpers de banco de dados (db.ts)
- [x] Criar procedures tRPC (routers.ts)
- [ ] Configurar conexão com banco de dados
- [ ] Executar migrations do Drizzle

## Fase 2: Autenticação Multiperfil
- [x] Implementar autenticação OAuth Manus
- [x] Criar fluxo de login/registro para pacientes
- [x] Criar fluxo de login/registro para profissionais
- [x] Criar fluxo de login/registro para admin
- [x] Implementar proteção de rotas por role
- [x] Criar página de login
- [x] Criar página de registro

## Fase 3: Módulo de Agendamento
- [x] Criar página de listagem de profissionais
- [x] Criar página de agendamento de consultas
- [x] Implementar visualização de disponibilidade
- [x] Implementar confirmação de agendamento
- [x] Implementar cancelamento/remarcação
- [ ] Integrar notificações de agendamento (WhatsApp/Email)

## Fase 4: Prontuário Eletrônico
- [x] Criar página de histórico de atendimentos
- [ ] Criar formulário de anotações por profissional
- [ ] Implementar upload de documentos
- [ ] Criar visualização de evolução do paciente
- [ ] Implementar controle de acesso ao prontuário

## Fase 5: Painel Administrativo
- [x] Criar dashboard admin
- [x] Implementar gestão de profissionais
- [x] Implementar gestão de pacientes
- [x] Implementar gestão de agendamentos
- [x] Criar relatórios de faturamento
- [x] Implementar gestão de comissões

## Fase 6: Site Institucional
- [x] Criar página home com especialidades
- [ ] Criar página de equipe com CRO/CRM
- [ ] Criar página de localização
- [ ] Criar blog para SEO
- [x] Integrar WhatsApp para agendamentos

## Fase 7: Notificações Automáticas
- [ ] Implementar lembretes de consulta (WhatsApp)
- [ ] Implementar confirmação de agendamento (Email)
- [ ] Implementar campanhas de recall
- [ ] Implementar notificações de pagamento

## Fase 8: Financeiro
- [ ] Criar gestão de formas de pagamento
- [ ] Implementar cálculo de comissões
- [ ] Criar relatórios financeiros
- [ ] Implementar controle de convênios

## Fase 9: Testes e Validação
- [ ] Testar fluxo de agendamento
- [ ] Testar prontuário eletrônico
- [ ] Testar painel admin
- [ ] Testar notificações
- [ ] Validar responsividade

## Fase 10: Deploy e GitHub
- [ ] Fazer push para GitHub
- [ ] Configurar deploy no Vercel
- [ ] Testar em produção
- [ ] Documentação final

## Notas Importantes

- **Localização**: Entre Rios, Bahia
- **Contato**: (75) 98238-0086 / WhatsApp: wa.me/message/6VQQSZGALX4HP1
- **Especialidades**: Odontologia (forte), Medicina, Nutrição, Fisioterapia, Psicologia, Estética
- **Profissionais Odontológicos**: Dra. Vitória Nykiel, Dra. Cristiane Andrade, Dra. Denise Figueredo, Dra. Willyane França, Dra. Withanauara Noronha, Dra. Karine Cavalcanti, Dra. Samantha Brandão, Dr. Ramon Silva, Dra. Daniela Galvão
- **Stack**: React 19 + TypeScript + Tailwind CSS 4 + Express 4 + tRPC 11 + Drizzle ORM + MySQL
