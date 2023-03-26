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

    function vote(uint256 _proposalId) external {
        Proposal storage proposal = proposals[_proposalId];
        require(
            !proposal.voters[msg.sender],
            "You have already voted for this proposal"
        );
        uint256 voterBalance = balanceOf[msg.sender];
        proposal.voters[msg.sender] = true;
        proposal.votes += voterBalance;
    }

    function execute(uint256 _proposalId) external {
        Proposal storage proposal = proposals[_proposalId];
        require(msg.sender == admin, "Only the admin can execute a proposal");
        require(!proposal.executed, "Proposal has already been executed");
        proposal.executed = true;
        // Execute the proposal here...
    }
}
