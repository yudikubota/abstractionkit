import "ethers";
import type { BytesLike } from "ethers";
import type { UserOperation, JsonRpcError } from "src/types";

export abstract class Paymaster {
	abstract getPaymasterCallData(
		userOperation: UserOperation,
		config: string[],
	): Promise<{paymasterAndData: BytesLike} | JsonRpcError>;
}
