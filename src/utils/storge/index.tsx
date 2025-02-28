/**
 * 将字符串解析为对象格式
 * 属性可能不存在
 * @param value
 * @returns
 */
function parse<T>(value?: string): T | undefined {
  if (value == undefined) {
    return undefined;
  }
  return JSON.parse(value) as T;
}

/**
 * 将任意格式处理为JSON
 * @param value
 * @returns
 */
function stringify(value: unknown): string {
  return JSON.stringify(value);
}

/**
 * 设置本地存储
 * @param key
 * @param value
 */
export function setStorage<T>(key: string, value: T) {
  localStorage.setItem(key, stringify(value));
}

/**
 * 获取本地存储
 * @param key
 * @returns
 */
export function getStorage<T>(key: string) {
  return parse<T>(localStorage.getItem(key)!);
}
