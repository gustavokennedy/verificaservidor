// Por Gustavo Kennedy Renkel
// Criado em 28/02/2022
const si = require('systeminformation');

async function order(){
  // Tempo
  await si.time(function(timeInfo){
    console.log(`
    🕒 Informações de Tempo
       - Hora do Servidor: ${timeInfo.current}
       - Fuso Horário: ${timeInfo.timezone}
    `)
  })
  // CPU
  await si.cpu(function(cpuInfo){
    console.log(`
    💻 Informações da CPU
       - Core Físico: ${cpuInfo.physicalCores}
       - Processadores: ${cpuInfo.processors}
       - Fabricante: ${cpuInfo.manufacturer}
    `)
  })
    // Uso da CPU
    await si.currentLoad(function(currentLoadInfo){
      console.log(`
      💻 Uso da CPU
         - Uso da CPU (%): ${currentLoadInfo.currentLoad}
         - Uso pelo sistema da CPU (%): ${currentLoadInfo.currentLoadSystem}
      `)
    })
  // S.O
  await si.osInfo(function(osInfo){
    console.log(`
    🖥 Informações do S.O
       - Plataforma: ${osInfo.platform}
       - Release: ${osInfo.release}
       - Build: ${osInfo.build}
    `)
  })
  // Memória
  await si.mem(function(memInfo){
    console.log(`
    📈 Informações de Memória
       - Total: ${memInfo.total}
       - Livre: ${memInfo.free}
       - Usada: ${memInfo.used}
    `)
  })
  // Bateria
  await si.battery(function(batteryInfo){
    console.log(`
    🔋 Informações de Bateria
       - Possui: ${batteryInfo.hasBattery}
       - Modelo: ${batteryInfo.model}
       - Capacidade Atual: ${batteryInfo.currentCapacity}
       - Ciclos: ${batteryInfo.cycleCount}
       - Voltagem: ${batteryInfo.voltage}
    `)
  })
  // Processos
  await si.processes(function(processesInfo){
    console.log(`
    📝 Informações de Processos
        - Todos: ${processesInfo.all}
        - Rodando: ${processesInfo.running}
        - Inativos: ${processesInfo.sleeping}
        - Desconhecidos: ${processesInfo.unknown}
    `)
  })
  // Verifica Website
  await si.inetChecksite("https://renkel.com.br", function(inetChecksiteInfo){
    console.log(`
    ✔️  Checklist Website
       - MS: ${inetChecksiteInfo.ms}
       - Código de Status: ${inetChecksiteInfo.status}
       - URL: ${inetChecksiteInfo.url}
    `)
  }) 
  // Docker
  await si.dockerInfo(function(dockerInfo){
    console.log(`
    🐋 Informações do Docker
        - Containers: ${dockerInfo.containers}
        - Containers ativos: ${dockerInfo.containersRunning} 
        - Containers parados: ${dockerInfo.containersStopped}
        - Containers desativados: ${dockerInfo.containersPaused}
        - Imagens: ${dockerInfo.images}
    `)
  })
  // Nginx & MySQL (verifica processo)
  console.log('Verificando Nginx e MySQL:'); await si.processLoad('nginx, mysql').then(data => console.log(data));
}
order()