/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  UIDataProvider,
  UIDataProviderInterface,
} from "../UIDataProvider";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract ILensHub",
        name: "hub",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "handle",
        type: "string",
      },
    ],
    name: "getLatestDataByHandle",
    outputs: [
      {
        components: [
          {
            components: [
              {
                internalType: "uint256",
                name: "pubCount",
                type: "uint256",
              },
              {
                internalType: "address",
                name: "followModule",
                type: "address",
              },
              {
                internalType: "address",
                name: "followNFT",
                type: "address",
              },
              {
                internalType: "string",
                name: "handle",
                type: "string",
              },
              {
                internalType: "string",
                name: "imageURI",
                type: "string",
              },
              {
                internalType: "string",
                name: "followNFTURI",
                type: "string",
              },
            ],
            internalType: "struct DataTypes.ProfileStruct",
            name: "profileStruct",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "uint256",
                name: "profileIdPointed",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "pubIdPointed",
                type: "uint256",
              },
              {
                internalType: "string",
                name: "contentURI",
                type: "string",
              },
              {
                internalType: "address",
                name: "referenceModule",
                type: "address",
              },
              {
                internalType: "address",
                name: "collectModule",
                type: "address",
              },
              {
                internalType: "address",
                name: "collectNFT",
                type: "address",
              },
            ],
            internalType: "struct DataTypes.PublicationStruct",
            name: "publicationStruct",
            type: "tuple",
          },
        ],
        internalType: "struct LatestData",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "profileId",
        type: "uint256",
      },
    ],
    name: "getLatestDataByProfile",
    outputs: [
      {
        components: [
          {
            components: [
              {
                internalType: "uint256",
                name: "pubCount",
                type: "uint256",
              },
              {
                internalType: "address",
                name: "followModule",
                type: "address",
              },
              {
                internalType: "address",
                name: "followNFT",
                type: "address",
              },
              {
                internalType: "string",
                name: "handle",
                type: "string",
              },
              {
                internalType: "string",
                name: "imageURI",
                type: "string",
              },
              {
                internalType: "string",
                name: "followNFTURI",
                type: "string",
              },
            ],
            internalType: "struct DataTypes.ProfileStruct",
            name: "profileStruct",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "uint256",
                name: "profileIdPointed",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "pubIdPointed",
                type: "uint256",
              },
              {
                internalType: "string",
                name: "contentURI",
                type: "string",
              },
              {
                internalType: "address",
                name: "referenceModule",
                type: "address",
              },
              {
                internalType: "address",
                name: "collectModule",
                type: "address",
              },
              {
                internalType: "address",
                name: "collectNFT",
                type: "address",
              },
            ],
            internalType: "struct DataTypes.PublicationStruct",
            name: "publicationStruct",
            type: "tuple",
          },
        ],
        internalType: "struct LatestData",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x60a060405234801561001057600080fd5b506040516109e63803806109e683398101604081905261002f91610040565b6001600160a01b0316608052610070565b60006020828403121561005257600080fd5b81516001600160a01b038116811461006957600080fd5b9392505050565b6080516109406100a660003960008181609901528181610133015281816101d601528181610279015261032401526109406000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c80639d933d401461003b578063ed88bde414610064575b600080fd5b61004e6100493660046104cc565b610077565b60405161005b919061060a565b60405180910390f35b61004e6100723660046106c0565b610258565b61007f6103a5565b60405163107d394560e11b81526000906001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016906320fa728a906100ce9086906004016106d9565b602060405180830381865afa1580156100eb573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061010f91906106f3565b604051633c23d3d960e21b8152600481018290529091506000906001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169063f08f4f6490602401600060405180830381865afa15801561017a573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526101a29190810190610775565b80516040805180820182528381529051630c736c9960e41b81526004810186905260248101839052929350909160208201907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03169063c736c99090604401600060405180830381865afa158015610225573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405261024d9190810190610856565b905295945050505050565b6102606103a5565b604051633c23d3d960e21b8152600481018390526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03169063f08f4f6490602401600060405180830381865afa1580156102c8573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526102f09190810190610775565b80516040805180820182528381529051630c736c9960e41b81526004810187905260248101839052929350909160208201907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03169063c736c99090604401600060405180830381865afa158015610373573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405261039b9190810190610856565b9052949350505050565b60405180604001604052806103fb6040518060c001604052806000815260200160006001600160a01b0316815260200160006001600160a01b031681526020016060815260200160608152602001606081525090565b81526040805160c0810182526000808252602082810182905260609383018490529282018190526080820181905260a082015291015290565b634e487b7160e01b600052604160045260246000fd5b60405160c0810167ffffffffffffffff8111828210171561046d5761046d610434565b60405290565b604051601f8201601f1916810167ffffffffffffffff8111828210171561049c5761049c610434565b604052919050565b600067ffffffffffffffff8211156104be576104be610434565b50601f01601f191660200190565b6000602082840312156104de57600080fd5b813567ffffffffffffffff8111156104f557600080fd5b8201601f8101841361050657600080fd5b8035610519610514826104a4565b610473565b81815285602083850101111561052e57600080fd5b81602084016020830137600091810160200191909152949350505050565b60005b8381101561056757818101518382015260200161054f565b83811115610576576000848401525b50505050565b6000815180845261059481602086016020860161054c565b601f01601f19169290920160200192915050565b80518252602081015160208301526000604082015160c060408501526105d160c085018261057c565b6060848101516001600160a01b039081169187019190915260808086015182169087015260a09485015116949093019390935250919050565b60208152600082516040602084015280516060840152602081015160018060a01b0380821660808601528060408401511660a08601525050606081015160c08085015261065b61012085018261057c565b90506080820151605f19808684030160e0870152610679838361057c565b925060a0840151935080868403016101008701525050610699818361057c565b9150506020840151601f198483030160408501526106b782826105a8565b95945050505050565b6000602082840312156106d257600080fd5b5035919050565b6020815260006106ec602083018461057c565b9392505050565b60006020828403121561070557600080fd5b5051919050565b80516001600160a01b038116811461072357600080fd5b919050565b600082601f83011261073957600080fd5b8151610747610514826104a4565b81815284602083860101111561075c57600080fd5b61076d82602083016020870161054c565b949350505050565b60006020828403121561078757600080fd5b815167ffffffffffffffff8082111561079f57600080fd5b9083019060c082860312156107b357600080fd5b6107bb61044a565b825181526107cb6020840161070c565b60208201526107dc6040840161070c565b60408201526060830151828111156107f357600080fd5b6107ff87828601610728565b60608301525060808301518281111561081757600080fd5b61082387828601610728565b60808301525060a08301518281111561083b57600080fd5b61084787828601610728565b60a08301525095945050505050565b60006020828403121561086857600080fd5b815167ffffffffffffffff8082111561088057600080fd5b9083019060c0828603121561089457600080fd5b61089c61044a565b82518152602083015160208201526040830151828111156108bc57600080fd5b6108c887828601610728565b6040830152506108da6060840161070c565b60608201526108eb6080840161070c565b60808201526108fc60a0840161070c565b60a08201529594505050505056fea26469706673582212206182d1b19126b9749aa6be63840d20d2108afba39b3ae0229217dd33116258b764736f6c634300080a0033";

type UIDataProviderConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: UIDataProviderConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class UIDataProvider__factory extends ContractFactory {
  constructor(...args: UIDataProviderConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    hub: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<UIDataProvider> {
    return super.deploy(hub, overrides || {}) as Promise<UIDataProvider>;
  }
  getDeployTransaction(
    hub: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(hub, overrides || {});
  }
  attach(address: string): UIDataProvider {
    return super.attach(address) as UIDataProvider;
  }
  connect(signer: Signer): UIDataProvider__factory {
    return super.connect(signer) as UIDataProvider__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): UIDataProviderInterface {
    return new utils.Interface(_abi) as UIDataProviderInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): UIDataProvider {
    return new Contract(address, _abi, signerOrProvider) as UIDataProvider;
  }
}