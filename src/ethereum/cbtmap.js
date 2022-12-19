import { ethers } from "ethers";

const cbtmapAbi = [
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "aadhar",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "aadr",
				"type": "address"
			}
		],
		"name": "set",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "aadhar",
				"type": "uint256"
			}
		],
		"name": "find",
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
				"internalType": "uint256",
				"name": "aadhar",
				"type": "uint256"
			}
		],
		"name": "get",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];

const cbtmapContract = (provider) => {
    return new ethers.Contract(
        "0x69F70704e539d2CFf31845E186564081d41B3DBb",
        cbtmapAbi,
        provider
    );
};

export default cbtmapContract;