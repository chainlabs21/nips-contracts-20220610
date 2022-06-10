{
	"deploy": {
		"VM:-": {
			"linkReferences": {},
			"autoDeployLib": true
		},
		"main:1": {
			"linkReferences": {},
			"autoDeployLib": true
		},
		"ropsten:3": {
			"linkReferences": {},
			"autoDeployLib": true
		},
		"rinkeby:4": {
			"linkReferences": {},
			"autoDeployLib": true
		},
		"kovan:42": {
			"linkReferences": {},
			"autoDeployLib": true
		},
		"görli:5": {
			"linkReferences": {},
			"autoDeployLib": true
		},
		"Custom": {
			"linkReferences": {},
			"autoDeployLib": true
		}
	},
	"data": {
		"bytecode": {
			"functionDebugData": {},
			"generatedSources": [],
			"linkReferences": {},
			"object": "",
			"opcodes": "",
			"sourceMap": ""
		},
		"deployedBytecode": {
			"functionDebugData": {},
			"generatedSources": [],
			"immutableReferences": {},
			"linkReferences": {},
			"object": "",
			"opcodes": "",
			"sourceMap": ""
		},
		"gasEstimates": null,
		"methodIdentifiers": {
			"_admins(address)": "0d5e2053",
			"_min_amount_withdrawable()": "10d4c4ea",
			"_min_balance_required_for_bid()": "de909778",
			"_min_deposit_amount()": "8f54aa6b",
			"_min_lockup_period()": "f109f691",
			"_owner()": "b2bdfa7b",
			"_profit_eoa()": "7a48cbbb",
			"_use_user_black_whitelist_or_none()": "ff4380cc",
			"_user_black_white_list_registry()": "058ea490",
			"set_min_balance_required_for_bid(uint256)": "8dfb6d0a"
		}
	},
	"abi": [
		{
			"inputs": [
				{
					"internalType": "address",
					"name": "",
					"type": "address"
				}
			],
			"name": "_admins",
			"outputs": [
				{
					"internalType": "bool",
					"name": "",
					"type": "bool"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [],
			"name": "_min_amount_withdrawable",
			"outputs": [
				{
					"internalType": "uint256",
					"name": "",
					"type": "uint256"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [],
			"name": "_min_balance_required_for_bid",
			"outputs": [
				{
					"internalType": "uint256",
					"name": "",
					"type": "uint256"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [],
			"name": "_min_deposit_amount",
			"outputs": [
				{
					"internalType": "uint256",
					"name": "",
					"type": "uint256"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [],
			"name": "_min_lockup_period",
			"outputs": [
				{
					"internalType": "uint256",
					"name": "",
					"type": "uint256"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [],
			"name": "_owner",
			"outputs": [
				{
					"internalType": "address",
					"name": "",
					"type": "address"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [],
			"name": "_profit_eoa",
			"outputs": [
				{
					"internalType": "address",
					"name": "",
					"type": "address"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [],
			"name": "_use_user_black_whitelist_or_none",
			"outputs": [
				{
					"internalType": "uint256",
					"name": "",
					"type": "uint256"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [],
			"name": "_user_black_white_list_registry",
			"outputs": [
				{
					"internalType": "address",
					"name": "",
					"type": "address"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "uint256",
					"name": "__min_balance",
					"type": "uint256"
				}
			],
			"name": "set_min_balance_required_for_bid",
			"outputs": [],
			"stateMutability": "nonpayable",
			"type": "function"
		}
	]
}