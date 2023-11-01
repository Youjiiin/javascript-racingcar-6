import { Random } from "@woowacourse/mission-utils";

export const random = (numCars) => {
    return Array.from({ length: numCars }, () => Random.pickNumberInRange(0, 9));
};