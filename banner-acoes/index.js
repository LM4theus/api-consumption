const axios = require('axios');

const symbols = ['PETR4', 'VALE3', 'ITUB4', 'BBDC4', 'MGLU3', 'WEGE3', 'B3SA3']; // escolha até 10

const token = 'seu token';

async function buscarAcoes() {

    for (const symbol of symbols){
  try {
    const response = await axios.get(`https://brapi.dev/api/quote/${symbol}`, {
      params: {
        token,
        symbols: symbols.join(',')
      }
    });

    const acoes = response.data.results;

    acoes.forEach(acao => {
      console.log(`Empresa: ${acao.longName}`);
      console.log(`Símbolo: ${acao.symbol}`);
      console.log(`Preço atual: R$ ${acao.regularMarketPrice}`);
      console.log(`Variação: ${acao.regularMarketChangePercent}%`);
      console.log('-----------------------------');
    });
  } catch (error) {
    console.error('Erro ao buscar ação:', error.message);
  }
 } 
}

buscarAcoes();
