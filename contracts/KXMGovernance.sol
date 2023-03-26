pragma solidity ^0.8.0;

import "./IERC20.sol";

contract KXMTokenDAO {
    address public admin;
    uint256 public totalSupply;
    IERC20 public token;

    struct Proposal {
        uint256 id;
        address proposer;
        uint256 votes;
        mapping(address => bool) voters;
        string description;
        bool executed;
    }

    Proposal[] public proposals;

    mapping(address => uint256) public balanceOf;

    constructor(address _token) {
        admin = msg.sender;
        token = IERC20(_token);
        totalSupply = 10000000 * 10 ** 18;
    }

    function propose(string memory _description) external returns (uint256) {
        require(
            balanceOf[msg.sender] > 0,
            "You need to hold tokens to propose a vote"
        );
        uint256 proposalId = proposals.length;
        proposals.push(
            Proposal(proposalId, msg.sender, 0, _description, false)
        );
        return proposalId;
    }
}
