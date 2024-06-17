; File: hello_world.cairo

%lang starknet

from starknet import get_contract_address

@external
func hello_world() -> felt:
    return 0x48656c6c6f2c20576f726c6421

@external
func get_address() -> (felt[2], felt):
    return (get_contract_address(), 0)