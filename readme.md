### Leitor de Arquivos CNAB

Este projeto é uma CLI (Interface de Linha de Comando) para leitura e processamento de arquivos CNAB (Centro Nacional de Automação Bancária). O objetivo é fornecer uma ferramenta flexível e expansível para buscar informações específicas em arquivos CNAB, incluindo a capacidade de exportar os dados processados para um formato JSON.

### Funcionalidades

1. **Leitura de Arquivo CNAB**:

    - Permite que o usuário forneça o caminho do arquivo CNAB pela linha de comando.
    - O campo do arquivo é opcional; caso não seja especificado, o programa utiliza um arquivo padrão.
2. **Busca por Segmentos**:

    - Não implementada. Refinando requisitos...
  
3. **Filtro por Nome da Empresa**:

    - Permite o filtro da saída com base no nome de uma empresa.

4. **Exportação para JSON**:

    - Cria um novo arquivo em formato JSON contendo as informações essenciais.
    - Inclui nome da empresa, endereço completo e posições no arquivo CNAB onde as informações foram localizadas.

### Instalação

Certifique-se de ter o Node.js (20+) instalado em seu sistema. Clone o repositório e instale as dependências:

sh

```
git clone <url-do-repositorio>
cd <nome-do-repositorio>
npm install
npx tsc
```

### Teste

Para testar, rode o comando:

`npm run test`

### Uso

A CLI pode ser executada usando o Node.js. Aqui estão as opções disponíveis:

`node dist/cli/index.js [options]`

#### Opções

- `--segment, -s` (string): Tipo de segmento (P, Q ou R). (não funcional)
- `--company, -c` (string): Nome da empresa para busca.
- `--file, -f` (string): Caminho para o arquivo CNAB.
- `--output, -o` (string): Caminho para o arquivo de saída.
- `--type, -t` (string): Tipo de exportador (json). Padrão: 'json'.

#### Exemplos de Uso

1. **Buscar Empresa**:

    `node dist/cli/index.js --company "Nome da Empresa" --file path/to/cnabfile.txt --output path/to/output.json --type json`

2. **Usar Arquivo Padrão e Exportar para JSON**:

    `node dist/cli/index.js --output path/to/output.json --type json`

### Contato

Para mais informações ou dúvidas, entre em contato pelo e-mail: <diego.caetano@outlook.com>.

* * * * *

Este projeto é um desafio que faz parte de um processo de entrevista e não visa se tornar produtivo.
