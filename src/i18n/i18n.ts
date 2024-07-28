import { createI18n } from "vue-i18n";
import { EN } from "./locale";

const i18n: any = createI18n({
  locale: "en",
  fallbackLocale: "en",
  messages: {
    en: EN,
  },
});

/**
 * Builds up valid keypaths for translations.
 * Update to your default locale of choice if not English.
 */
type DefaultLocale = typeof EN;
type TxKeyPath = RecursiveKeyOf<DefaultLocale>;
type RecursiveKeyOf<TObj extends Record<string, any>> = {
  [TKey in keyof TObj & string]: TObj[TKey] extends Record<string, any>
    ? `${TKey}` | `${TKey}.${RecursiveKeyOf<TObj[TKey]>}`
    : `${TKey}`;
}[keyof TObj & string];

export { i18n };
export type { TxKeyPath };
