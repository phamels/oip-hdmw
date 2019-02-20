import { Insight } from 'insight-explorer'
import bip44constants from 'bip44-constants'
import config from './config'

var bitcoinFeePerKb = 100000

module.exports = {
	name: 'nix',
	displayName: 'NIX',
	ticker: 'NIX',
	satPerCoin: 1e8,
	feePerKb: bitcoinFeePerKb,
	feePerByte: bitcoinFeePerKb / 1024,
	maxFeePerByte: 100,
	minFee: bitcoinFeePerKb,
	dust: 546,

	txVersion: 1,

	explorer: new Insight(config.defaultApiUrls.nix),

	getExtraBytes: function(options){ return },

	network: {
		bip32: {
			public: 0x0488b21e,
			private: 0x0488ade4
		},
		slip44: 44,
		messagePrefix: '\u001bNIX Signed Message:\n',
		pubKeyHash: 26,
		scriptHash: 35,
		wif: 80
	}
}