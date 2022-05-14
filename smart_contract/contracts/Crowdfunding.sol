//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/utils/math/SafeMath.sol";


contract CrowdFunding {
    using SafeMath for uint256;

    struct Funder {
        address addr;
        uint amount;
    }

    enum State {
        Fundraising,
        Expired,
        Successful
    }
    struct Project  {
        address payable contractAddress;
        address payable projectStarter;
        string projectTitle;
        string projectDesc;
        uint goalAmount;
        uint deadline;
        uint numFunders;
        uint amount;
        string status;
        uint id;
    }
    uint numProject;
    mapping (uint => Funder) funders;
    // mapping (uint => Project)  projects;
    Project[] public projects;
    

    event projectStarted(
        address payable contractAddress,
        address payable projectStarter,
        string projectTitle,
        string projectDesc,
        uint256 deadline,
        uint256 goalAmount, 
        uint numFunders
    );
     // Event that will be emitted whenever funding will be received
    event FundingReceived(address contributor, uint amount, uint currentTotal);

    function startProject (
        string calldata title,
        string calldata description,
        uint amontToRaise,
        uint durationIndays,
        address payable contractAddress
    ) external {
        uint raiseUntil = block.timestamp.add(durationIndays.mul(1 days));
        uint numOfProject = numProject++;
        uint initialAmount = 0;
       projects.push(Project(payable(contractAddress), payable(msg.sender), title, description, amontToRaise, raiseUntil, initialAmount, initialAmount, 'Fundraising', numOfProject));


        emit projectStarted (contractAddress, payable(msg.sender), title, description, raiseUntil, amontToRaise, numOfProject);
    }

    function returnAllProjects() external view returns(Project[] memory){
        
        return projects;
    }

    function contribute (uint id, uint amount) external payable {
        uint i = find(id);
        if ( keccak256(abi.encodePacked(projects[i].status)) == keccak256(abi.encodePacked('Fundraising'))) {
            // require(payable(projects[i].projectStarter) != msg.send);
            projects[i].amount += amount;
            projects[i].numFunders += 1;
            Funder storage c = funders[id];
            c.addr = msg.sender;
            c.amount = msg.value;
            checkIfFundingCompleteOrExpired(i);
            emit FundingReceived(msg.sender, msg.value, projects[i].amount);
        }
    } 

    function checkIfFundingCompleteOrExpired(uint proj) public {

        if (projects[proj].amount >= projects[proj].goalAmount ) {
            projects[proj].status = 'Successful';
        }
        if (block.timestamp > projects[proj].deadline) {
            projects[proj].status = 'Expired';
        }
    } 

    function find(uint id) view internal returns(uint) {
        for(uint i=0; i < projects.length; i++) {
            if (projects[i].numFunders == id) {
                return i;
            }
        }
        revert('Project does not exist');
    }

}
