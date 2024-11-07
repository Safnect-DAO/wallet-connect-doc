import{_ as i,c as a,a0 as t,o as n}from"./chunks/framework.BZ2JbyVi.js";const c=JSON.parse('{"title":"connect","description":"","frontmatter":{},"headers":[],"relativePath":"fractal-bitcoin.md","filePath":"fractal-bitcoin.md"}'),l={name:"fractal-bitcoin.md"};function e(p,s,h,k,r,d){return n(),a("div",null,s[0]||(s[0]=[t(`<h1 id="connect" tabindex="-1">connect <a class="header-anchor" href="#connect" aria-label="Permalink to &quot;connect&quot;">​</a></h1><p>Connecting to the Fractal Bitcoin network of safnect wallet</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">safnectwallet.fractalBitcoin.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">connect</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span></code></pre></div><ul><li><p><strong>Parameters</strong></p><p>None</p></li><li><p><strong>Return Value</strong></p><ul><li>Promise - object <ul><li>address - string: The current account&#39;s address</li><li>publicKey - string: The public key of the current account</li></ul></li></ul></li></ul><h1 id="requestaccounts" tabindex="-1">requestAccounts <a class="header-anchor" href="#requestaccounts" aria-label="Permalink to &quot;requestAccounts&quot;">​</a></h1><p>Requests to connect the current account</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">safnectwallet.fractalBitcoin.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">requestAccounts</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span></code></pre></div><ul><li><p><strong>Parameters</strong></p><p>None</p></li><li><p><strong>Return Value</strong></p><ul><li>Promise - object <ul><li>address - string: The current account&#39;s address</li><li>publicKey - string: The public key of the current account</li></ul></li></ul></li></ul><h1 id="getbalance" tabindex="-1">getBalance <a class="header-anchor" href="#getbalance" aria-label="Permalink to &quot;getBalance&quot;">​</a></h1><p>Get the FB coin balance of the wallet address</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">safnectwallet.fractalBitcoin.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getBalance</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span></code></pre></div><ul><li><p><strong>Parameters</strong></p><p>None</p></li><li><p><strong>Return Value</strong></p><ul><li>Promise - object</li></ul><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;code&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;msg&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;ok&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;data&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">      &quot;address&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;bc1px8vatydhg6e6lrs6yz7rcpqx4r4k335vskkmjrd85kz4s9l5547sn42fff&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">      &quot;satoshi&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">172178</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">      &quot;pendingSatoshi&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">      &quot;utxoCount&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">      &quot;btcSatoshi&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">172178</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">      &quot;btcPendingSatoshi&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">      &quot;btcUtxoCount&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">      &quot;inscriptionSatoshi&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">      &quot;inscriptionPendingSatoshi&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">      &quot;inscriptionUtxoCount&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div></li></ul><h1 id="send" tabindex="-1">send <a class="header-anchor" href="#send" aria-label="Permalink to &quot;send&quot;">​</a></h1><p>Send FB to <code>receiverAddress</code></p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">safnectwallet.fractalBitcoin.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">send</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(receiverAddress, amount);</span></span></code></pre></div><ul><li><p><strong>Parameters</strong></p><ul><li>receiverAddress - string: Receiver Address</li><li>amount - number: Number of satoshi</li></ul></li><li><p><strong>Return Value</strong></p><ul><li>Promise - object <ul><li>success - boolean: Send result (true | false)</li><li>txid - string: Transaction ID</li></ul></li></ul></li></ul><h1 id="signpsbt" tabindex="-1">signPsbt <a class="header-anchor" href="#signpsbt" aria-label="Permalink to &quot;signPsbt&quot;">​</a></h1><p>Sign some psbt transactions</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">safnectwallet.fractalBitcoin.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">signPsbt</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(psbtHex);</span></span></code></pre></div><ul><li><p><strong>Parameters</strong></p><ul><li>psbtHex - string: The hexadecimal strings of the PSBT to be signed</li></ul><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">psbtHex = </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;70736274ff0100f4020000000300000000000000000000000000000000000000000000000000000000000000000000000000ffffffff00000000000000000000000000000000000000000000000000000000000000000100000000fffffffff78cca7dd09be76fe61e00bea31b5711a18e7a6c784e47130a4ee9e568b902740000000000ffffffff0300000000000000001976a914000000000000000000000000000000000000000088ac00000000000000001976a914000000000000000000000000000000000000000088acbc6b9f06000000002251202ab40cb34d63f8d6c83dad5221701893ff5432fce4ed9ffed09e7cc876c5c2a3000000000001011f0000000000000000160014ae47938f7acd1623e6e10e1ebcc33c2a7cb6e30d0001011f0000000000000000160014ae47938f7acd1623e6e10e1ebcc33c2a7cb6e30d0001012b22020000000000002251202ab40cb34d63f8d6c83dad5221701893ff5432fce4ed9ffed09e7cc876c5c2a301030483000000011720e84964089e843405d1b98ce76f61f376787860e452bc33d83da859f04ecb14db00000000&quot;</span></span></code></pre></div></li><li><p><strong>Return Value</strong></p><ul><li>Promise - string: The hexadecimal strings of the signed PSBT</li></ul></li></ul><h1 id="signpsbts" tabindex="-1">signPsbts <a class="header-anchor" href="#signpsbts" aria-label="Permalink to &quot;signPsbts&quot;">​</a></h1><p>Sign some psbt transactions</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">safnectwallet.fractalBitcoin.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">signPsbts</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(data);</span></span></code></pre></div><ul><li><p><strong>Parameters</strong></p><ul><li>data - object <ul><li>psbts - string[]: The hexadecimal strings of the PSBTs to be signed</li><li>toSignInputs - array: The options of signing psbt <ul><li>index - number</li><li>address - string</li><li>disableTweakSigner - boolean</li></ul></li></ul></li></ul><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">data = {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> &quot;psbts&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">     &quot;70736274ff0100d702000000018bcbd712d7...&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">     &quot;70736274ff0100fd52010200000004bddae1...&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ],</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> &quot;toSignInputs&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">     [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">         {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">             &quot;index&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">             &quot;address&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;bc1pzd3qdryjwcpx5sd5a8msf6xaskq0sedc6ud8tl0ruqdmwd7kqmwsadwdh4&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">             &quot;disableTweakSigner&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">         }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">     ],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">     [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">         {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">             &quot;index&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">             &quot;address&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;bc1pzd3qdryjwcpx5sd5a8msf6xaskq0sedc6ud8tl0ruqdmwd7kqmwsadwdh4&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">             &quot;disableTweakSigner&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">         },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">         {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">             &quot;index&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">             &quot;address&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;bc1pzd3qdryjwcpx5sd5a8msf6xaskq0sedc6ud8tl0ruqdmwd7kqmwsadwdh4&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">             &quot;disableTweakSigner&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">         },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">         {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">             &quot;index&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">             &quot;address&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;bc1pzd3qdryjwcpx5sd5a8msf6xaskq0sedc6ud8tl0ruqdmwd7kqmwsadwdh4&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">             &quot;disableTweakSigner&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">         }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">     ]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  ]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div></li><li><p><strong>Return Value</strong></p><ul><li>Promise - string[]: The hexadecimal strings of the signed PSBT</li></ul></li></ul><h1 id="signmessage" tabindex="-1">signMessage <a class="header-anchor" href="#signmessage" aria-label="Permalink to &quot;signMessage&quot;">​</a></h1><p>Signs a message with &quot;ecdsa&quot; signing algorithm</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">safnectwallet.fractalBitcoin.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">signMessage</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(signStr);</span></span></code></pre></div><ul><li><p><strong>Parameters</strong></p><ul><li>signStr - string: The data to be signed</li></ul></li><li><p><strong>Return Value</strong></p><ul><li>Promise - string: Signed result</li></ul></li></ul><h1 id="getcat20balance" tabindex="-1">getCat20Balance <a class="header-anchor" href="#getcat20balance" aria-label="Permalink to &quot;getCat20Balance&quot;">​</a></h1><p>Get the Cat-20 token balance of the wallet address</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">safnectwallet.fractalBitcoin.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getCat20Balance</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(tokenId);</span></span></code></pre></div><ul><li><p><strong>Parameters</strong></p><ul><li>tokenId - string: Cat-20 Token ID</li></ul></li><li><p><strong>Return Value</strong></p><ul><li>Promise - numner</li></ul></li></ul><h1 id="sendcat20" tabindex="-1">sendCat20 <a class="header-anchor" href="#sendcat20" aria-label="Permalink to &quot;sendCat20&quot;">​</a></h1><p>Send Cat-20 token to <code>receiverAddress</code></p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">safnectwallet.fractalBitcoin.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sendCat20</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(tokenId, receiverAddress, amount);</span></span></code></pre></div><ul><li><p><strong>Parameters</strong></p><ul><li>tokenId - string: Cat-20 Token ID</li><li>receiverAddress - string: Receiver Address</li><li>amount - number: Number of token</li></ul></li><li><p><strong>Return Value</strong></p><ul><li>Promise - object <ul><li>success - boolean: Send result (true | false)</li><li>txid - string: Transaction ID</li></ul></li></ul></li></ul><h1 id="getcat721nfts" tabindex="-1">getCat721Nfts <a class="header-anchor" href="#getcat721nfts" aria-label="Permalink to &quot;getCat721Nfts&quot;">​</a></h1><p>Get the Cat-721 NFTs of the wallet address</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">safnectwallet.fractalBitcoin.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getCat721Nfts</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(address, network);</span></span></code></pre></div><ul><li><p><strong>Parameters</strong></p><ul><li>address - string: the wallet address</li><li>network - string: &#39;testnet&#39; | &#39;mainnet&#39;</li></ul></li><li><p><strong>Return Value</strong></p><ul><li>Promise - object <ul><li>nft - string: nft id</li><li>collId - string: collection id</li><li>localId - string</li><li>symbol - string</li><li>name - string: collection name</li><li>max - string: maxium nfts of the collection</li><li>description - string: collection description</li><li>content - string: nft content</li></ul></li></ul></li></ul><h1 id="sendcat721nft" tabindex="-1">sendCat721Nft <a class="header-anchor" href="#sendcat721nft" aria-label="Permalink to &quot;sendCat721Nft&quot;">​</a></h1><p>Send Cat-721 NFT to <code>receiverAddress</code></p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> data </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  network,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  collId,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  localId,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  receiverAddress</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">safnectwallet.fractalBitcoin.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sendCat721Nft</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(data);</span></span></code></pre></div><ul><li><p><strong>Parameters</strong></p><ul><li>data - object: <ul><li>collId - string: collection id</li><li>localId - string: nft localId</li><li>receiverAddress - string: Receiver <code>Taproot</code> Address</li><li>network - string: &#39;testnet&#39; | &#39;mainnet&#39;</li></ul></li></ul></li><li><p><strong>Return Value</strong></p><ul><li>Promise - object <ul><li>success - boolean: Send result (true | false)</li><li>txid - string: Transaction ID</li></ul></li></ul></li></ul>`,44)]))}const E=i(l,[["render",e]]);export{c as __pageData,E as default};
