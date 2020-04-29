# Bitcoin Price Plasmoid

## About
Plasma applet showing the current price of Bitcoin from various markets to choose from.

Written by Maciej Gierej - http://makg.eu

## Installation
```
plasmapkg2 -i package
```

Use additional `-g` flag to install plasmoid globally, for all users.

## Supported sources
- BitBay
- Bitfinex
- Bitmaszyna.pl
- BitMEX
- Bitstamp
- Blockchain.info
- Bybit
- Deribit
- Kraken
- Cex.io
- Coinbase Pro

## Screenshots
![Bitcoin Price Plasmoid](https://raw.githubusercontent.com/NeoButane/plasma-applet-bitcoin-price/master/bitcoin-price-plasmoid.png)

![Bitcoin Price Plasmoid (Panel)](https://raw.githubusercontent.com/NeoButane/plasma-applet-bitcoin-price/master/bitcoin-price-panel.png)

![Bitcoin Price Plasmoid (Configuration)](https://raw.githubusercontent.com/NeoButane/plasma-applet-bitcoin-price/master/bitcoin-price-config.png)

## Contributors
- Maciej Gierej
- NasCorp

## Changelog

### 1.2.1a
- Forked to add BitMEX, Bybit, Deribit
- Changed refresh rate from minutes to seconds
- Changed GDAX to Coinbase Pro
- Removed CoinMarketCap (requires subscription), Bitmarket.pl (dead), currency converter (requires invidiual API key)
