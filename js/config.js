// Configuração do Financeiro Flip
// A chave pública pode ficar no GitHub: quem protege os dados são as regras
// de segurança do banco (RLS) criadas no setup.sql.
window.CAIXA_CONFIG = {
  SUPABASE_URL: 'https://bbfgvenewdgnaejupfnx.supabase.co',
  SUPABASE_KEY: 'sb_publishable_6fkxoTSJZSQPvC-Bb26gNw_fHIlPyRQ',
  // Aparecem como botões na tela de login (só digita a senha)
  USUARIOS: [
    { nome: 'Alexandre', email: 'flipdesign3dsolucoes@gmail.com' },
    { nome: 'Aline', email: 'alinesthefani@gmail.com' }
  ]
};
