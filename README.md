# verificaservidor
Aplicação em JS, Node e NPM utilizando systeminformation.io para *verificação de informações* do sistema/servidor.

## Ajuda

Qualquer ajuda pode ser solicita por e-mail ou envie sua contribuição para o *verificaservidor*.

## Instalação

Instale usando `npm install -g`. Para iniciar a verificação, utilize `node infosistema.js`.

## Exemplo de uso

```node
node infosistema.js

    💻 Informações da CPU
       - Core Físico: 4
       - Processadores: 1
       - Fabricante: Intel


      💻 Uso da CPU
         - Uso da CPU (%): 15.68594883612614
         - Uso pelo sistema da CPU (%): 5.367436468203072


    🖥 Informações do S.O
       - Plataforma: Windows
       - Release: 10.0.19044
       - Build: 19044


    📈 Informações de Memória
       - Total: 8570908672
       - Livre: 1096392704
       - Usada: 7474515968


    🔋 Informações de Bateria
       - Possui: true
       - Modelo: 75CCSDIDELL 7XC9N18L
       - Capacidade Atual: 0
       - Ciclos: 0
       - Voltagem: 9.242


    📝 Informações de Processos
        - Todos: 247
        - Rodando: 0
        - Inativos: 0
        - Desconhecidos: 247


    ✔️  Checklist Website
       - MS: 7160
       - Código de Status: 200
       - URL: https://renkel.com.br


    🐋 Informações do Docker
        - Containers: 2
        - Containers ativos: 1
        - Containers parados: 1
        - Containers desativados: 0
        - Imagens: 3

Verificando Nginx e MySQL:
[
  { proc: 'nginx', pid: null, pids: [], cpu: 0, mem: 0 },
  { proc: 'mysql', pid: null, pids: [], cpu: 0, mem: 0 }
]
```