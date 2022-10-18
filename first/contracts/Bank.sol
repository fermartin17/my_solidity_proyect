pragma solidity ^0.8.0;

import "./Regulator.sol";

contract Bank is Regulator {

    uint256 private _value;
    address private owner;

    modifier ownerModifier{
        require(owner == msg.sender, "Owner is not equal to sender.");
        _; // When execute your function, if I put it over the require, first execute the function and then the validation.
    }

    constructor (uint256 amount) public{
        _value = amount;
        owner = msg.sender;
    }

    function deposit(uint256 amount) public ownerModifier {
        _value  += amount;
    }

    function withdraw(uint256 amount) public ownerModifier {
        if(checkValue(amount)){
            _value  -= amount;
        }
    }

    function balance() public view returns(uint256){
        return _value;
    }

    function checkValue(uint256 amount) public returns(bool){
        return _value >= amount;
    }

    function loan() public returns(bool){
        return _value > 0;
    }
}
