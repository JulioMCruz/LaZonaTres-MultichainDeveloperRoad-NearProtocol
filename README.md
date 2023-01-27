# La Zona Tres - Multichain Developer Road (Near Protocol)

Check if near-cli is already installed:

```bash
near --version
```

Login with your NEAR testnet account

```bash
NEAR_ENV=testnet
near login
```

This command will open the browser to procees with the autentication.

After login you will have a output similar to this:

```bash
If your browser doesnt automatically open, please visit this URL
https://wallet.testnet.near.org/login/?referrer=NEAR+CLI&public_key=ed25519%3A8gR8Ycjtc3LiL3KPebe9AzaLaC2LK84RxZcuEUUadeYA&success_url=https%3A%2F%2F5000-juliomcruz-lazonatresmu-05gbpt3iyrk.ws-us84.gitpod.io
Please authorize at least one account at the URL above.

Which account did you authorize for use with NEAR CLI?
Enter it here (if not redirected automatically):
Logged in as [ juliomcruz.testnet ] with public key [ ed25519:8gR8Yc... ] successfully
```


Build the contract
```bash
npm run build
```

## Deploy the contract

### - Option 1

```bash
npm run deploy
```
 This commmand will generate the file build/contract.wasm.

### - Option 2

Set your developer account (Ex. I will use my testnet account):

```bash
NEAR_DEPLOYER_ACCOUNT=juliomcruz.testnet
```

Deploy the smart contract using the developer account

```bash
near deploy --accountId $NEAR_DEPLOYER_ACCOUNT --wasmFile build/contract.wasm
```

## Test the contract

Set the enviroment variables.

```bash
NEAR_DEPLOYER_ACCOUNT=juliomcruz.testnet
NEAR_CALLER_ACCOUNT=juliomcruz.testnet
```

Call get_repository

```bash
near call $NEAR_DEPLOYER_ACCOUNT  get_repository --accountId $NEAR_CALLER_ACCOUNT --amount 1
```

```bash
near call $NEAR_DEPLOYER_ACCOUNT get_requesters --accountId $NEAR_CALLER_ACCOUNT 
```


