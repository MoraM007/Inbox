const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode} = require('./compile');
const provider =  new HDWalletProvider(
    'seven delay sell balcony reduce fashion dinosaur stairs chat crystal dilemma cheap',
    'https://rinkeby.infura.io/v3/8bb30d2ea6254fc7bc08b64619eecd9d'
);
const web3 = new Web3(provider);

const deploy = async() => {
    const accounts = await web3.eth.getAccounts();

    console.log('Attempting to deploy from account', accounts[0]);

   
    const result = await new web3.eth.Contract(JSON.parse(interface))
        .deploy({ data: bytecode, arguments: ['Hi There!'] })
        .send({ from: accounts[0], gas:'0.0000002' });

    console.log('Contract deployed to', result.options.address);    
};


process.on('unhandledRejection', error => {
    // Will print "unhandledRejection err is not defined"
    console.log('unhandledRejection', error.message);
  });
  
  
deploy();