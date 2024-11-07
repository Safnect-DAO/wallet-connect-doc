# Safnect Wallet Connect

visit [Documentation](https://safnect-dao.github.io/wallet-connect-doc/introduction) for more detail

## Introduction

In a DApp, adding a "Connect Safnect Wallet" button allows interaction with the Safnect Wallet, such as obtaining addresses, prompting wallet signatures, and more.

## Preparation

If you haven't downloaded the Safnect extensions wallet yet, please go to the download page:

Chrome wallet extensions: https://chromewebstore.google.com/search/Safnect%20Wallet?hl=zh-CN&utm_source=ext_sidebar <br/><br/>


If you have already downloaded the extensions wallet, check if the extensions wallet is running normally in your browser by copying the following code into the browser's developer console:


`if (typeof window.safnectwallet !== 'undefined') {console.log('Safnect Wallet is installed!');}`

## Supported Networks

### Fractal Bitcoin

<br/><br/>

#### connect

`safnectwallet.fractalBitcoin.connect();`

***Description***

Connecting to the Fractal Bitcoin network of safnect wallet

***Parameters***

None

***Return Value***

Promise - object

address - string: The current account's address

publicKey - string: The public key of the current account

<br/><br/>

#### requestAccounts

`safnectwallet.fractalBitcoin.requestAccounts();`

***Description***

Requests to connect the current account

***Parameters***

None

***Return Value***

Promise - object

address - string: The current account's address

publicKey - string: The public key of the current account

<br/><br/>

#### getBalance

`safnectwallet.fractalBitcoin.getBalance();`

***Description***

Get the FB coin balance of the wallet address

***Parameters***

None

***Return Value***

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
<br/><br/>

#### getCat20Balance

`safnectwallet.fractalBitcoin.getCat20Balance(tokenId);`

***Description***

Get the Cat-20 token balance of the wallet address

***Parameters***

tokenId - Cat-20 Token ID

***Return Value***

Promise - Number

<br/><br/>

#### send

`safnectwallet.fractalBitcoin.send(receiverAddress, amount);`

***Description***

Send FB to `receiverAddress`

***Parameters***

receiverAddress - Receiver Address

amount - Number of satoshi

***Return Value***

Promise - Object

success - Send result true | false

txid - Transaction ID

<br/><br/>

#### sendCat20

`safnectwallet.fractalBitcoin.sendCat20(tokenId, receiverAddress, amount);`

***Description***

Send Cat-20 token to `receiverAddress`

***Parameters***

tokenId - Cat-20 Token ID

receiverAddress - Receiver Address

amount - Number of token

***Return Value***

Promise - Object

success - Send result true | false

txid - Transaction ID

<br/><br/>

#### signPsbt

`safnectwallet.fractalBitcoin.signPsbt(psbtHex);`

***Description***

Sign some psbt transactions

***Parameters***

psbtHex - Object: The hexadecimal strings of the PSBT to be signed.

```
psbtHex = "70736274ff0100f4020000000300000000000000000000000000000000000000000000000000000000000000000000000000ffffffff00000000000000000000000000000000000000000000000000000000000000000100000000fffffffff78cca7dd09be76fe61e00bea31b5711a18e7a6c784e47130a4ee9e568b902740000000000ffffffff0300000000000000001976a914000000000000000000000000000000000000000088ac00000000000000001976a914000000000000000000000000000000000000000088acbc6b9f06000000002251202ab40cb34d63f8d6c83dad5221701893ff5432fce4ed9ffed09e7cc876c5c2a3000000000001011f0000000000000000160014ae47938f7acd1623e6e10e1ebcc33c2a7cb6e30d0001011f0000000000000000160014ae47938f7acd1623e6e10e1ebcc33c2a7cb6e30d0001012b22020000000000002251202ab40cb34d63f8d6c83dad5221701893ff5432fce4ed9ffed09e7cc876c5c2a301030483000000011720e84964089e843405d1b98ce76f61f376787860e452bc33d83da859f04ecb14db00000000"
```
***Return Value***

Promise - string: The hexadecimal strings of the signed PSBT.

<br/><br/>

#### signPsbts

`safnectwallet.fractalBitcoin.signPsbts(data);`

***Description***

Sign some psbt transactions

***Parameters***

data - Object: The hexadecimal strings of the PSBTs to be signed.

```
data = {
   "psbts": [
       "70736274ff0100d702000000018bcbd712d7...",
       "70736274ff0100fd52010200000004bddae1..."
   ],
   "toSignInputs": [
       [
           {
               "index": 0,
               "address": "bc1pzd3qdryjwcpx5sd5a8msf6xaskq0sedc6ud8tl0ruqdmwd7kqmwsadwdh4",
               "disableTweakSigner": false
           }
       ],
       [
           {
               "index": 0,
               "address": "bc1pzd3qdryjwcpx5sd5a8msf6xaskq0sedc6ud8tl0ruqdmwd7kqmwsadwdh4",
               "disableTweakSigner": false
           },
           {
               "index": 2,
               "address": "bc1pzd3qdryjwcpx5sd5a8msf6xaskq0sedc6ud8tl0ruqdmwd7kqmwsadwdh4",
               "disableTweakSigner": false
           },
           {
               "index": 3,
               "address": "bc1pzd3qdryjwcpx5sd5a8msf6xaskq0sedc6ud8tl0ruqdmwd7kqmwsadwdh4",
               "disableTweakSigner": false
           }
       ]
   ]
}
```
***Return Value***

Promise - string[]: The hexadecimal strings of the signed PSBTs. 

<br/><br/>

#### signMessage

`safnectwallet.fractalBitcoin.signMessage(signStr);`

***Description***

Signs a message with "ecdsa" signing algorithm

***Parameters***

signStr - string: The data to be signed

***Return Value***

Promise - string: Signed result
