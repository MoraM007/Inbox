const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const web3 = new Web3(ganache.provider());
beforeEach(() =>{
    //Get A list of All Accounts
    web3.eth.getAccounts().then(fetchedAccounts => {
         console.log(fetchedAccounts);
      });

    //Use one of those accounts to deploy
    //the contract
});

describe('Inbox', () =>{
    it('deploys a contract', () => {});
});

