// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract DefiBet {

    address public owner;

    struct BetDetails {
        uint payoutOne;
        uint payoutTwo;
        string betName;
    }

    mapping (bytes32 => BetDetails) public BettingDetails;

    modifier onlyOwner {
        require(msg.sender == owner);
        _;
    }

    constructor () public {
        owner = msg.sender;
    }

    //Odds are going to be passed in as Decimals: 

    // Positive Example: +180 = 1 + (180 / 100) -> 2.8000
    // Negative Example: -142 = 1 - (100 / -142) -> 1.7042

    function create_bet_pair(uint _oddsOne, uint _oddsTwo, string memory betName) public onlyOwner returns(bytes32) {
        
        BettingDetails[]

    }

    function bet(address _from, uint256 _amount, bytes32 _id) public payable returns (bytes32) {
        require (msg.sender == _from, "from is not the caller");

        
    }

    function add_liquidity() public payable returns (bool) {


    }
}