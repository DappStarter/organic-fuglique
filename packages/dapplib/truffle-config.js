require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hunt nasty success system normal note oil provide hockey entire front ski'; 
let testAccounts = [
"0xe58818e15bf15235675f9fe9a9fc586858ad7dbe11d947b5eb0e3b17ef25fbbe",
"0xdddda4bdf6b380e4d35ab8874e5a18b06ec04b834d6a6dc26a2f2f2185a825ab",
"0x7340305c832be6149f47dc445161b43ee25d1ddcc88df4e49eb85cfaae7b21ec",
"0x0b4da0c98a81426a0c367aaa4a39b1339fc62a993aedafc6e58b3cdee3de14a1",
"0x665448a0dcabb0058af6200822708031de99af08f6fbfb5e04d268532f28392a",
"0x3967c9cc2a49decafa5dc92a892089419d5eb98d8e71c2fc88f1bb482bf84651",
"0x505fdd7f38a77eee166fc13a7e611a1836bb37d20b2ef8c9ada67aa7f0d31349",
"0x20127d0e6e57489e027dbfbe8a17cbd01daa07d740cc56cd803bdb9b80953426",
"0x77de2b199e493f6740e9bba9bd3738d3f0944501267480ef9c8b4bdb15f2e29a",
"0xfa90a977fbfed6d771192e38f16466cf7a82e0185297821535aeafcfda59e0e5"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
