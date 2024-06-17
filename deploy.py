# File: deploy.py

import os
import json

from starknet import Account, Contract, Starknet

# Set up Starknet
starknet = Starknet(
    base_url="https://alpha4.starknet.io",
    account_address="0x04996e0127f20358561a13e6627a22b5678423e8",
    account_private_key="your_private_key",
)

# Load the compiled contract code
with open("build/hello_world.json", "r") as f:
    contract_code = json.load(f)

# Deploy the contract
contract = Contract(
    address=None,
    abi=contract_code["abi"],
    bytecode=contract_code["bytecode"],
    constructor_calldata=[],
)

# Deploy the contract
deployed_contract = starknet.deploy(contract)

# Print the contract address
print(f"Contract address: {deployed_contract.address}")