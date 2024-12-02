export const config:any = {
  // Configuration for the deployment
  // Change the values for a more personalized deployment
  token: {
    name: "sweet dream5 evox Token",
    symbol: "sweet dream5 evox Token",
    admin: "0x33D33E756cB06b81fF0E861C0f071D3ae7E75021",
    pauser: "0x33D33E756cB06b81fF0E861C0f071D3ae7E75021",
    minter: "0x33D33E756cB06b81fF0E861C0f071D3ae7E75021"
  },
  // Timelock
  timelock: {
    minDelay: 150, // 12 days (assuming 12 seconds per block)
    proposer: "0x33D33E756cB06b81fF0E861C0f071D3ae7E75021",
    executer: "0x33D33E756cB06b81fF0E861C0f071D3ae7E75021",
    admin: "0x33D33E756cB06b81fF0E861C0f071D3ae7E75021"
  },
  // Set clockMode to true for timestamp mode, false for block number mode
  clockMode: false,
  // Governor
  governor: {
    name: "sweet dream5 evox Dao",
    // 7200 is 24 hours (assuming 12 seconds per block)
    votingDelay: 150,
    // 50400 is 7 days (assuming 12 seconds per block)
    votingPeriod: 150,
    // Threshold to be able to propose
    proposalThreshold: 0, // Set a non-zero value to prevent proposal spam.

    timelock: "0x01db1f75B8CA6ED8d1851A0C641967384479171f",
    sablier: "0xE9B30d4421a5f741a184E47848d6d3038936e245",
    token: "0x846CC3c8F05aE5c1733dF05e1b4546A319C8bbC0",
  },
  // First Mint is used to mint the initial tokens for this governance
  // It must be higher than the proposalThreshold
  // so there are enough tokens for the governance to be able to propose
  // 
  // ATTENTION:
  // If the amount is not higher than 0, it will not mint any tokens and will also maintain roles for the deployer.
  // Keep it as ZERO if you plan on doing manual changes and mints, before locking it up to be controlled by governor contracts.
  // 
  // After the first mint, the deployer will lose the minter and admin role and give it to the timelock, which is the executor.
  init: {
    token: "0x846CC3c8F05aE5c1733dF05e1b4546A319C8bbC0", 
    governor: "0xbFA6F7817a7e08Ae798090987D113E08740dE460",
    timelock: "0x01db1f75B8CA6ED8d1851A0C641967384479171f",
    sablier: "0xE9B30d4421a5f741a184E47848d6d3038936e245",
    user1: "0xFcFB312FD2f225798e01f23c11a5861f4A732216",
    user2: "0x33D33E756cB06b81fF0E861C0f071D3ae7E75021",
    amount1: 10000_000000000000000000n,
    amount2: 10000_000000000000000000n
  },

  Sablier: {
    name : "sweet dream5 evox Sablier",
    sablier_contract_sepolia : "0x7a43F8a888fa15e68C103E18b0439Eb1e98E4301",
    quorum : 3000_000000000000000000n,
    admin: "0x33D33E756cB06b81fF0E861C0f071D3ae7E75021",
    governor: "0xbFA6F7817a7e08Ae798090987D113E08740dE460",
    token: "0x846CC3c8F05aE5c1733dF05e1b4546A319C8bbC0"
  }
}