pragma solidity ^0.8.0;

interface Regulator {
    function loan() external returns(bool);
    function checkValue(uint256 amount) external returns(bool);
}
