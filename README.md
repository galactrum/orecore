# Orecore

Infrastructure to build Galactrum and blockchain-based applications for the next generation of financial technology.

**Note:** If you're looking for the Orecore Library please see: https://github.com/GAB5TER/orecore-lib

## Getting Started

Before you begin you'll need to have Node.js v4+ installed. There are several options for installation. One method is to use [nvm](https://github.com/creationix/nvm) to easily switch between different versions, or download directly from [Node.js](https://nodejs.org/).

Spin up a full node and join the network:

```bash
orecored
```

You can then view the Insight block explorer at the default location: `http://localhost:3001/insight`, and your configuration file will be found in your home directory at `~/.orecore`.

Create a transaction:
```js
var orecore = require('orecore');
var transaction = new orecore.Transaction();
var transaction.from(unspent).to(address, amount);
transaction.sign(privateKey);
```

## Applications

- [Orecore Node](https://github.com/GAB5TER/orecore-node) - A full node with extended capabilities using Galactrum
- [Insight API](https://github.com/GAB5TER/insight-api) - A blockchain explorer HTTP API
- [Insight UI](https://github.com/GAB5TER/insight-ui) - A blockchain explorer web user interface
- [Wallet Service](https://github.com/GAB5TER/orecore-wallet-service) - A multisig HD service for wallets (In progress)
- [Wallet Client](https://github.com/GAB5TER/orecore-wallet-client) - A client for the wallet service (In progress)
- CLI Wallet - A command-line based wallet client
- Angular Wallet Client - An Angular based wallet client
- Copay - An easy-to-use, multiplatform, multisignature, secure Galactrum wallet

## Libraries

- [Orecore Lib](https://github.com/GAB5TER/orecore-lib) - All of the core Galactrum primatives including transactions, private key management and others
- Payment Protocol - A protocol for communication between a merchant and customer
- [Orecore P2P](https://github.com/GAB5TER/orecore-p2p) - The peer-to-peer networking protocol
- [Orecore Mnemonic](https://github.com/GAB5TER/orecore-mnemonic) - Implements mnemonic code for generating deterministic keys
- [Orecore Channel](https://github.com/GAB5TER/orecore-channel) - Micropayment channels for rapidly adjusting Galactrum transactions
- [Orecore Message](https://github.com/GAB5TER/orecore-message) - Galactrum message verification and signing
- [Orecore ECIES](https://github.com/GAB5TER/orecore-ecies) - Uses ECIES symmetric key negotiation from public keys to encrypt arbitrarily long data streams.

## Documentation

The complete docs are hosted here: [bitcore documentation](http://bitcore.io/guide/). There's also a [bitcore API reference](http://bitcore.io/api/) available generated from the JSDocs of the project, where you'll find low-level details on each orecore utility.

- [Read the Developer Guide](http://bitcore.io/guide/)
- [Read the API Reference](http://bitcore.io/api/)

To get community assistance and ask for help with implementation questions, please use our [community forums](http://bitpaylabs.com/c/bitcore).

## Security

We're using Orecore in production, as are [many others](http://bitcore.io#projects), but please use common sense when doing anything related to finances! We take no responsibility for your implementation decisions.

If you find a security issue, please email security@bitpay.com.

## Contributing

Please send pull requests for bug fixes, code optimization, and ideas for improvement. For more information on how to contribute, please refer to our [CONTRIBUTING](https://github.com/GAB5TER/orecore/blob/master/CONTRIBUTING.md) file.

This will generate files named `orecore.js` and `orecore.min.js`.

## License

Released under the MIT license, under the same terms as Orecore itself. See [LICENSE](LICENSE) for more info.
