// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

contract CBTmap {
    mapping(uint256 => address) map;
    
    function set(uint256 aadhar) public {
        map[aadhar] = msg.sender;
        
    }

    function find(uint256 aadhar) public view returns (bool) {
        address addr =  map[aadhar];
        if (addr!=0x0000000000000000000000000000000000000000){
            return true;
        }
        return false;
    }
}