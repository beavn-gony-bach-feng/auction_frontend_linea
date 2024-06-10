import {
  useWriteContract, useSimulateContract,
} from "wagmi";
import { britisConfig, dutchConfig, NFTConfig } from "@/constants";

const useWriteAuction = () => {
  const {
    data, error, writeContract, isError, isPending, isSuccess, failureReason,
  } = useWriteContract();
  const createBritish = (args:Array<any>) => {
    writeContract({
      ...britisConfig,
      functionName: "createAuction",
      args,
    });
  };
  const createDutch = (args:Array<any>) => {
    writeContract({
      ...dutchConfig,
      functionName: "startAuction",
      args,
    });
  };
  const bidBritish = (value:any, args:Array<any>) => {
    writeContract({
      ...britisConfig,
      functionName: "bid",
      args,
      value,
    });
  };

  const bidDutch = (value:any, args:Array<any>) => {
    writeContract({
      ...dutchConfig,
      functionName: "bid",
      args,
      value,
    });
  };
  const useBidDutch = (value:any, args:Array<any>) => {
    const result = useSimulateContract({
      ...dutchConfig,
      functionName: "bid",
      args,
      value,
    });
    console.log(value, args, result, result.error?.message, "调用了出价");
    return result;
  };

  const cancelBritish = (args:Array<any>) => {
    writeContract({
      ...britisConfig,
      functionName: "cancelAuction",
      args,
    });
  };
  const cancelDutch = (args:Array<any>) => {
    writeContract({
      ...dutchConfig,
      functionName: "finalizeAuction",
      args,
    });
  };
  const approveNft = (args:Array<any>) => {
    writeContract({
      ...NFTConfig,
      functionName: "approve",
      args,
    });
    return {
      data, error, isError, isPending, isSuccess, failureReason,
    };
  };

  return {
    createBritish, createDutch, bidBritish, bidDutch, cancelBritish, cancelDutch, error, isError, isPending, isSuccess, data, failureReason, approveNft,
  };
};
const useApproveNft = () => {
  const {
    data, error, writeContract, isError, isPending, isSuccess, failureReason,
  } = useWriteContract();
  const approveNft2 = (address:any, args:Array<any>) => {
    writeContract({
      ...NFTConfig,
      address,
      functionName: "approve",
      args,
    });
  };

  return {
    approveNft2, data, error, isError, isPending, isSuccess, failureReason,
  };
};
export { useWriteAuction, useApproveNft };
