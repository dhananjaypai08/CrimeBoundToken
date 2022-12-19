import { ethers } from "ethers";

const cbtmapAbi = [
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "aadhar",
				"type": "uint256"
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
	}
];

const cbtmapContract = (provider) => {
    return new ethers.Contract(
        "0x8D6F913b77682a96a4b53c65D4CBec50aA115501",
        cbtmapAbi,
        provider
    );
};

export default cbtmapContract;