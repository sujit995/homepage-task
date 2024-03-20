export const data = [
    {
      title: "1. Information Gathering",
      items: [
        "Collected and reviewed all relevant documentation, including whitepaper, technical specifications, and design documents.",
        "Obtained a clear understanding of the CDP platform's functionality, economic model, and intended user interactions.",
        "Discussed client concerns and specific areas of focus for the audit."
      ]
    },
    {
      title: "2. Manual Code Review:",
      items: [
        "On introducing new add-ons, previous add-on configurations had to",
        ["Vulnerability identification: Searching for known vulnerabilities like reentrancy, front-running, integer overflows, and access control issues etc.", "Logic flaws: Identifying inconsistencies or unintended behaviors in the code logic.", "Tokenomics correctness: Verifying if the code accurately implements the intended economic model and token distribution mechanisms.", "Solidity best practices: Compliance with secure coding standards and adherence to established guidelines."]
      ]
    },
    {
      title: "3. Functional Testing:",
      items: [
        "Developed and executed a comprehensive set of test cases covering various user interactions and edge cases.",
        "Simulated different deposit, claim, and referral scenarios to assess functionality and uncover potential exploits.",
        "Focused on scenarios identified during the manual review and client concerns (e.g., infinite minting, reward calculation errors).",
        "Leveraged tools like Hardhat and Ganache to deploy and test the smart contract locally."
      ]
    },
    {
      title: "4. Automated Testing:",
      items: [
        "Employed static analysis tools like Slither to identify vulnerabilities through automated code scanning.",
        "Utilized symbolic execution tools like Mythril to explore various code execution paths and uncover potential attack vectors.",
        "Integrated unit tests are written by the CDP team to verify specific contract functions and their behaviour."
      ]
    },
    {
      title: "5. Reporting & Remediation:",
      items: [
        "Prepared a detailed report outlining all identified vulnerabilities, categorized by severity and potential impact.",
        "Provided clear recommendations for fixing each vulnerability, including code snippets and best practices.",
        "Collaborated with the CDP team to prioritize and address the identified issues.",
        "Conducted additional verification testing after vulnerability fixes were implemented."
      ]
    }
  ];


  export const itemdata = [
    {
      title: "1. Unauthorized Claim/Compound:",
      items: [
        "Users could claim/compound a substantial amount without making a deposit or waiting for the stipulated time."
      ]
    },
    {
      title: "2. Precision Loss in mintCDP():",
      items: [
        "Precision loss and unscaled values were identified while calculating rewardPerShare in the mintCDP() function.",
      ]
    },
    {
      title: "3. Multiplication Accuracy:",
      items: [
        "Multiplication operations were prone to providing incorrect answers due to unscaled values, posing a potential risk to accurate calculations."
      ]
    },
    {
      title: "4. Incorrect Share Allocation:",
      items: [
        "The protocol was allocating shares for all days, even when there were no corresponding deposits, leading to inefficient use of resources."
      ]
    },
    {
      title: "5. Logic Error in Referral Handling:",
      items: [
        "A logic error resulted in users always having their user.referral set to address(0), which could be exploited to trick the referral system"
      ]
    },
    {
        title: "6. Referral Exploitation:",
        items: [
          "Users could exploit the referral system to extract more CDP from the protocol, undermining its integrity."
        ]
      }
  ];

export const impactData = [
    {
      items: "Implementation of reentrancy protection mechanisms."
    },
    {
      items: "Accurate handling of decimal values using established libraries or best practices."
    },
    {
      items: "Revised calculations with proper scaling factors"
    },
    {
      items: "Fixing logic errors to ensure deposits and waiting periods are enforced."
    },
    {
      items: "Addressing referral system vulnerabilities to prevent abuse."
    },
  ]

  export const links = [
    {
      name: "Ethereum Audit",
      links: "#"
    },
    {
      name: "Polygon Audit",
      links: "#"
    },
    {
      name: "BSC Audit",
      links: "#"
    },
    {
      name: "Solana Audit",
      links: "#"
    },
    {
      name: "NEAR Audit",
      links: "#"
    },
    {
      name: "Algorand Audit",
      links: "#"
    },
    {
      name: "Tezos Audit",
      links: "#"
    },
    {
      name: "Hyperledger Fabric Audit",
      links: "#"
    },
    {
      name: "L1 Audit",
      links: "#"
    },
    {
      name: "Polkadot Audit",
      links: "#"
    },
    {
      name: "Wallet Audit",
      links: "#"
    },
    {
      name: "Zksync Audit",
      links: "#"
    },
    {
      name: "Starknet Audit",
      links: "#"
    },
  ]

  export const links2 = [
    {
      name: "QuillAI",
      links: "#"
    },
    {
      name: "QuillCheck",
      links: "#"
    },
    {
      name: "QuillShield",
      links: "#"
    },
    {
      name: "QuillAcademy",
      links: "#"
    },
    {
      name: "QuillMonitor",
      links: "#"
    },
    {
      name: "Web3Suggest",
      links: "#"
    },
    {
      name: "Explore All Tools",
      links: "#"
    },
  ]