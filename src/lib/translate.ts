import { TxKeyPath, i18n } from "../i18n/i18n";

/**
 * Translates text.
 *
 * @param key The i18n key.
 * @param options The options object containing dynamic values.
 */
export const translate = (key: TxKeyPath, options?: Record<string, any>) => {
  return key ? i18n.global.t(key, options) : "";
};
