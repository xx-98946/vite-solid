import { toSignal } from "$/utils/signal";
import { setStorage, getStorage } from "$/utils/storge";

/**
 * 登录状态
 */
export const status = toSignal(getStorage<boolean>("data:status") || false);


/**
 * 设置登录状态
 * @param value 
 */
export function setStatus(value: boolean) {
    status.set(value);
    setStorage('data:status', value);
}

/**
 * 获取登录状态
 * @returns 
 */
export function getStatus() {
    return status.get();
}
