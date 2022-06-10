{
	"compiler": {
		"version": "0.8.7+commit.e28d00a7"
	},
	"language": "Solidity",
	"output": {
		"abi": [
			{
				"inputs": [
					{
						"internalType": "address",
						"name": "__admin",
						"type": "address"
					}
				],
				"stateMutability": "nonpayable",
				"type": "constructor"
			},
			{
				"anonymous": false,
				"inputs": [
					{
						"indexed": false,
						"internalType": "address",
						"name": "_from",
						"type": "address"
					},
					{
						"indexed": false,
						"internalType": "uint256",
						"name": "_amount",
						"type": "uint256"
					}
				],
				"name": "Deposit",
				"type": "event"
			},
			{
				"anonymous": false,
				"inputs": [
					{
						"indexed": false,
						"internalType": "address",
						"name": "_from",
						"type": "address"
					},
					{
						"indexed": false,
						"internalType": "address",
						"name": "_to",
						"type": "address"
					}
				],
				"name": "TicketTokenCreated",
				"type": "event"
			},
			{
				"stateMutability": "payable",
				"type": "fallback"
			},
			{
				"inputs": [
					{
						"internalType": "address",
						"name": "",
						"type": "address"
					}
				],
				"name": "_acting_contracts",
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
				"name": "_admin",
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
						"internalType": "address",
						"name": "",
						"type": "address"
					}
				],
				"name": "_avail",
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
				"inputs": [
					{
						"internalType": "address",
						"name": "",
						"type": "address"
					}
				],
				"name": "_balances",
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
				"inputs": [
					{
						"internalType": "address",
						"name": "",
						"type": "address"
					}
				],
				"name": "_is_address_banned",
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
				"inputs": [
					{
						"internalType": "address",
						"name": "",
						"type": "address"
					}
				],
				"name": "_locked",
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
				"inputs": [
					{
						"internalType": "address",
						"name": "",
						"type": "address"
					}
				],
				"name": "_paytokens",
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
				"inputs": [
					{
						"internalType": "address",
						"name": "",
						"type": "address"
					}
				],
				"name": "_staking_time",
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
				"name": "_ticket_token",
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
				"name": "deploy_ticket_nft_contract",
				"outputs": [],
				"stateMutability": "nonpayable",
				"type": "function"
			},
			{
				"inputs": [
					{
						"internalType": "address",
						"name": "_seller",
						"type": "address"
					},
					{
						"internalType": "string",
						"name": "_itemid",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "_amount_ask",
						"type": "uint256"
					},
					{
						"internalType": "address",
						"name": "_paytoken",
						"type": "address"
					},
					{
						"internalType": "address",
						"name": "_buyer",
						"type": "address"
					}
				],
				"name": "match_exchange",
				"outputs": [],
				"stateMutability": "payable",
				"type": "function"
			},
			{
				"inputs": [
					{
						"internalType": "address",
						"name": "_address",
						"type": "address"
					},
					{
						"internalType": "bool",
						"name": "_status",
						"type": "bool"
					}
				],
				"name": "set_acting_contracts",
				"outputs": [],
				"stateMutability": "nonpayable",
				"type": "function"
			},
			{
				"inputs": [
					{
						"internalType": "address",
						"name": "_address",
						"type": "address"
					},
					{
						"internalType": "bool",
						"name": "_status",
						"type": "bool"
					}
				],
				"name": "set_is_address_banned",
				"outputs": [
					{
						"internalType": "bool",
						"name": "",
						"type": "bool"
					}
				],
				"stateMutability": "nonpayable",
				"type": "function"
			},
			{
				"inputs": [
					{
						"internalType": "address",
						"name": "_address",
						"type": "address"
					},
					{
						"internalType": "uint256",
						"name": "_amount",
						"type": "uint256"
					},
					{
						"internalType": "bool",
						"name": "_dec0inc1",
						"type": "bool"
					}
				],
				"name": "set_locked",
				"outputs": [
					{
						"internalType": "bool",
						"name": "",
						"type": "bool"
					}
				],
				"stateMutability": "nonpayable",
				"type": "function"
			},
			{
				"inputs": [],
				"name": "stake",
				"outputs": [],
				"stateMutability": "payable",
				"type": "function"
			},
			{
				"inputs": [
					{
						"internalType": "uint256",
						"name": "_amount",
						"type": "uint256"
					}
				],
				"name": "user_withdraw",
				"outputs": [],
				"stateMutability": "nonpayable",
				"type": "function"
			},
			{
				"inputs": [
					{
						"internalType": "address",
						"name": "_to",
						"type": "address"
					},
					{
						"internalType": "uint256",
						"name": "_amount",
						"type": "uint256"
					},
					{
						"internalType": "address",
						"name": "_paytoken",
						"type": "address"
					}
				],
				"name": "withdraw_fund",
				"outputs": [],
				"stateMutability": "nonpayable",
				"type": "function"
			}
		],
		"devdoc": {
			"kind": "dev",
			"methods": {},
			"version": 1
		},
		"userdoc": {
			"kind": "user",
			"methods": {
				"match_exchange(address,string,uint256,address,address)": {
					"notice": "string memory uri_  , address __admincontract  //\t\t, address __user_proxy_registry , address __user_black_white_list_registry , string memory __version "
				}
			},
			"version": 1
		}
	},
	"settings": {
		"compilationTarget": {
			"Staker.sol": "Staker"
		},
		"evmVersion": "london",
		"libraries": {},
		"metadata": {
			"bytecodeHash": "ipfs"
		},
		"optimizer": {
			"enabled": true,
			"runs": 200
		},
		"remappings": []
	},
	"sources": {
		"ERC1155.sol": {
			"keccak256": "0x7fecd75fde8eb71beb64fcd48e3026044677364a1ec3ee9316fbfe376de5813a",
			"license": "MIT",
			"urls": [
				"bzz-raw://b535193648cd42af52b4c6cd5294c764bd91f062afda4fe6b0bd74c7b2402282",
				"dweb:/ipfs/QmVhi4KCVRXaQGbrcgnCKnRu5CRnZR99K871tWi2hZ9mv7"
			]
		},
		"Staker.sol": {
			"keccak256": "0x7cbc7e9d301661f03556415e6457bf3176dba824be535119684440e87d3c4107",
			"license": "MIT",
			"urls": [
				"bzz-raw://b857b451c55935074acd495810af8463570d6b4b5f278ef68cda85ed6d741ae2",
				"dweb:/ipfs/QmePWs1KM1yAWYrTdiGU2y4mvfmhpQBaYwkvgUamzcao6q"
			]
		}
	},
	"version": 1
}