require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom argue olympic system index release rural mirror hunt industry flat gasp'; 
let testAccounts = [
"0x958d1f748593267bddc3afda63b1541018a0d64a8f23d95e86f819277f884566",
"0x055e192c47a6f8e7a53a5854ec2802831ad28a81ea817674674eacc6fa044f03",
"0xedb9dd2477259b879e68a799540b3ea5cfac412dad0d257c4041e8bfc88c535b",
"0x7c849eeec2503396726e1146ba8770b35cef263d22e29dc3024d8841fb6e2a0c",
"0x145f592a6b0b3e61c1091f09a5eb822cef677aebaf13ebfd26a9efb4ad191303",
"0x93fa73e2c7f40bb96f87ad1b6f936210b96b2310f582754504beb2745d7392d6",
"0xd3668fb192a3dcf280ebd1185152f501afb95819e14f75f7859de72f9b49be8f",
"0x696ce8980117df527a8b64fa5c887c8031588eb04e7510785ff33efbfbf9c9c2",
"0xcd114557fc72905ee0507c5e25d8cfc1e5ec7943158e0c2f3298d8ff5a6c1a43",
"0x705610b8bfc1423e390d286bdf12e8cca56361cccfca2a3886f280094ca2c6e9"
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
