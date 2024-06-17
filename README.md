Create a file hello_world.cairo
This code defines a hello_world function that returns the ASCII string "Hello, World!" as a value. The get_address function returns the contract address as a value.

Next,  compiling the contract using scarb.

Open a terminal and navigate to the directory containing hello_world.cairo. Run the following command to compile the contract: scarb build hello_world.cairo
generate a build directory containing the compiled contract code.

Now, let's deploy the contract using snforge.

Create a new file called deploy.py-attached 
Replace your_private_key with your Starknet account private key.

Run the following command to deploy the contract:
This will deploy the contract 
