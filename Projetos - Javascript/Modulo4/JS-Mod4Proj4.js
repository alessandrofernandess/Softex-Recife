// Modulo 4 - Projeto 4

// Conexão com Banco de Dados

const databaseDriver = require(mysql);

// Configurações de conexão

const dbConfig = {
  host: 'localhost',
  user: 'root',
  password: 'suaSenha',
  database: mysql
}

// Tente estabelecer a conexão com o banco de dados

databaseDriver.connect(dbConfig, (err) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err);
    return 'Erro ao conectar ao banco de dados';
  } else {
    console.log('Conexão com o banco de dados bem-sucedida');
    return 'Conexão com o banco de dados bem-sucedida';
  }
});
