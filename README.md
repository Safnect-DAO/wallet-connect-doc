# Safnect Wallet Connect

## Introduction

In a DApp, adding a "Connect Safnect Wallet" button allows interaction with the Safnect Wallet, such as obtaining addresses, prompting wallet signatures, and more.

## Preparation

If you haven't downloaded the Safnect extensions wallet yet, please go to the download page:

Chrome wallet extensions: https://chromewebstore.google.com/search/Safnect%20Wallet?hl=zh-CN&utm_source=ext_sidebar <br/><br/>


If you have already downloaded the extensions wallet, check if the extensions wallet is running normally in your browser by copying the following code into the browser's developer console:


`if (typeof window.safnectwallet !== 'undefined') {console.log('Safnect Wallet is installed!');}`

## Supported Networks

### Fractal Bitcoin

#### connect

`safnectwallet.fractalBitcoin.connect();`

Description

Connecting to the Fractal Bitcoin network of safnect wallet

Parameters

None

Return Value

Promise - object

address - string: The current account's address

publicKey - string: The public key of the current account

#### requestAccounts

`safnectwallet.fractalBitcoin.requestAccounts();`

Description

Requests to connect the current account

Parameters

None

Return Value

Promise - object

address - string: The current account's address

publicKey - string: The public key of the current account

#### getBalance

`safnectwallet.fractalBitcoin.getBalance();`

Description

Get the FB coin balance of the wallet address

Parameters

None

Return Value

Promise - object

```
{
    "code": 0,
    "msg": "ok",
    "data": {
        "address": "bc1px8vatydhg6e6lrs6yz7rcpqx4r4k335vskkmjrd85kz4s9l5547sn42fff",
        "satoshi": 172178, 
        "pendingSatoshi": 0, 
        "utxoCount": 1,
        "btcSatoshi": 172178,
        "btcPendingSatoshi": 0,
        "btcUtxoCount": 1,
        "inscriptionSatoshi": 0,
        "inscriptionPendingSatoshi": 0,
        "inscriptionUtxoCount": 0
    }
}
```

#### getCat20Balance

`safnectwallet.fractalBitcoin.getCat20Balance(tokenId);`

Description

Get the Cat-20 token balance of the wallet address

Parameters

tokenId - Cat-20 Token ID

Return Value

Promise - Number

#### send

`safnectwallet.fractalBitcoin.send(receiverAddress, amount);`

Description

Send FB to `receiverAddress`

Parameters

receiverAddress - Receiver Address

amount - Number of satoshi

Return Value

Promise - Object

success - Send result true | false

txid - Transaction ID

#### sendCat20

`safnectwallet.fractalBitcoin.sendCat20(tokenId, receiverAddress, amount);`

Description

Send Cat-20 token to `receiverAddress`

Parameters

tokenId - Cat-20 Token ID

receiverAddress - Receiver Address

amount - Number of token

Return Value

Promise - Object

success - Send result true | false

txid - Transaction ID

#### signPsbts

`safnectwallet.fractalBitcoin.signPsbts(psbts, toSignInputs);`

Description

Sign some psbt transactions

Parameters

psbts - string[]: The hexadecimal strings of the PSBTs to be signed.

toSignInputs - To sign inputs

Return Value

Promise - string[]: The hexadecimal strings of the signed PSBTs.


