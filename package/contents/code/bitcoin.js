var sources = [
        {
                name: 'None',
                url: './none',
                homepage: '0.0.0.0',
                getRate: function(data) {
                        return data.result.last_price;
                }
        },
        {
                name: 'Bybit',
                url: 'https://api.bybit.com/v2/public/tickers?symbol=BTCUSD',
                homepage: 'https://www.bybit.com/',
                getRate: function(data) {
                        return data.result[0].last_price;
                }
        },
        {
                name: 'Deribit',
                url: 'https://www.deribit.com/api/v2/public/ticker?instrument_name=BTC-PERPETUAL',
                homepage: 'https://www.deribit.com/',
                getRate: function(data) {
                        return data.result.last_price;
                }
        },
        {
                name: 'BitMEX',
                url: 'https://www.bitmex.com/api/v1/instrument?symbol=XBT',
                homepage: 'https://www.bitmex.com/',
                getRate: function(data) {
                        return data[0].lastPrice;
                }
        },
        {
                name: 'Bitmaszyna.pl (BTC/PLN)',
                url: 'https://bitmaszyna.pl/api/BTCPLN/ticker.json',
                homepage: 'https://bitmaszyna.pl/',
                getRate: function(data) {
                        return data.ask;
                }
        },
        {
                name: 'BitBay (BTC/PLN)',
                url: 'https://bitbay.net/API/Public/BTCPLN/ticker.json',
                homepage: 'https://bitbay.net',
                getRate: function(data) {
                        return data.ask;
                }
        },
	{
		name: 'Blockchain.info',
		url: 'https://blockchain.info/ticker',
		homepage: 'https://blockchain.info/',
		getRate: function(data) {
			return data.USD.last;
		}
	},
	{
		name: 'Bitfinex',
		url: 'https://api.bitfinex.com/v1/pubticker/btcusd',
		homepage: 'https://www.bitfinex.com/',
		getRate: function(data) {
			return data.mid;
		}
	},
	{
		name: 'Bitstamp',
		url: 'https://www.bitstamp.net/api/ticker',
		homepage: 'https://www.bitstamp.net/',
		getRate: function(data) {
			return data.ask;
		}
	},
	{
		name: 'Kraken',
		url: 'https://api.kraken.com/0/public/Ticker?pair=XXBTZUSD',
		homepage: 'https://www.kraken.com',
		getRate: function(data) {
			return data.result.XXBTZUSD.a[0];
		}
	},
	{
		name: 'Coinbase Pro',
		url: 'https://api-public.sandbox.pro.coinbase.com/products/BTC-USD/ticker',
		homepage: 'https://pro.coinbase.com/',
		getRate: function(data) {
			return data.ask;
		}
	},
	{
		name: 'CEX.IO',
		url: 'https://cex.io/api/last_price/BTC/USD',
		homepage: 'https://cex.io',
		getRate: function(data) {
			return data.lprice;
		}
	},
];

function getRate(source, callback) {
	source = typeof source === 'undefined' ? getSourceByName('BitMEX') : getSourceByName(source);
	
	if(source === null) return false;
	
	request(source.url, function(data) {
		if(data.length === 0) return false;

		data = JSON.parse(data);
		var rate = source.getRate(data);
		callback(rate);
	});
	
	return true;
}

function getSourceByName(name) {
	for(var i = 0; i < sources.length; i++) {
		if(sources[i].name == name) {
			return sources[i];
		}
	}
	
	return null;
}

function getAllSources() {
	var sourceNames = [];
	
	for(var i = 0; i < sources.length; i++) {
		sourceNames.push(sources[i].name);
	}
	
	return sourceNames;
}

function request(url, callback) {
	var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function() {
		if(xhr.readyState === 4) {
			callback(xhr.responseText);
		}
	};
	xhr.open('GET', url, true);
	xhr.send('');
}
