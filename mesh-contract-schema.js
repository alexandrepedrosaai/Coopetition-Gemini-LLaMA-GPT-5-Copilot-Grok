"$schema": "http://json-schema.org/draft-07/schema#",
  "title": "Mesh Contract Schema",
  "description": "Schema for Coopetition smart contracts ensuring interoperability, transparency, and governance.",
  "type": "object",
  "properties": {
    "contractId": {
      "type": "string",
      "description": "Unique identifier for the smart contract"
    },
    "participants": {
      "type": "array",
      "description": "List of AI systems participating in the coopetition mesh",
      "items": {
        "type": "object",
        "properties": {
          "name": { "type": "string" },
          "organization": { "type": "string" },
          "role": {
            "type": "string",
            "enum": ["validator", "integrator", "consumer", "provider"]
          }
        },
        "required": ["name", "organization", "role"]
      }
    },
    "governance": {
      "type": "object",
      "description": "Governance principles applied to the contract",
      "properties": {
        "transparency": { "type": "boolean" },
        "auditability": { "type": "boolean" },
        "antitrustCompliance": { "type": "boolean" }
      },
      "required": ["transparency", "auditability", "antitrustCompliance"]
    },
    "interoperability": {
      "type": "object",
      "description": "Technical interoperability rules",
      "properties": {
        "protocol": { "type": "string" },
        "version": { "type": "string" },
        "smartContractsEnabled": { "type": "boolean" }
      },
      "required": ["protocol", "version", "smartContractsEnabled"]
    },
    "consumerBenefits": {
      "type": "array",
      "description": "Expected benefits for consumers",
      "items": {
        "type": "string",
        "enum": ["choice", "innovation", "trust", "lowerCosts"]
      }
    }
  },
  "required": ["contractId", "participants", "governance", "interoperability", "consumerBenefits"
