pragma solidity ^0.8.0;

contract SmartAccountContract {
    function modifySignature(bytes memory signature) public pure returns (bytes memory) {
        bytes1 firstByte = signature[0];
        if (firstByte == 0x00) {
            firstByte = 0x01;
        } else {
            firstByte = 0x00;
        }
        bytes memory newSignature = abi.encodePacked(firstByte, signature[1:]);
        return newSignature;
    }
}