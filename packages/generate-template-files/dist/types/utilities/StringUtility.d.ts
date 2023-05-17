import CaseConverterEnum from '../constants/CaseConverterEnum';
/**
 * Utility class to convert the case type of strings.
 */
export default class StringUtility {
    /**
     * Helper method for {@link CaseConverterEnum} to convert text into the proper case.
     *
     * ```
     * StringUtility.toCase('livesDown_by-the.River', CaseConverterEnum.PascalCase);
     * // 'LivesDownByTheRiver'
     * ```
     */
    static toCase(str: string, caseType: CaseConverterEnum): string;
    /**
     * Converts a string to a sentence case string.
     *
     * ```
     * StringUtility.toSentence('livesDown_by-the.River');
     * // 'lives down by the river'
     *
     * StringUtility.toSentence('livesDown_by-the.River', '-');
     * // 'lives-down-by-the-river'
     *
     * StringUtility.toSentence('livesDown_by-the.River', '_');
     * // 'lives_down_by_the_river'
     *
     * StringUtility.toSentence('livesDown_by-the.River', '/');
     * // 'lives/down/by/the/river'
     * ```
     */
    static toSentence(str: string, separator?: string): string;
    /**
     * Converts a string to a camel case string.
     *
     * ```
     * StringUtility.toCamelCase('livesDown_by-the.River');
     * // 'livesDownByTheRiver'
     * ```
     */
    static toCamelCase(str: string): string;
    /**
     * Converts a hyphen string to a pascal case string.
     *
     * ```
     * StringUtility.toPascalCase('livesDown_by-the.River');
     * // 'LivesDownByTheRiver'
     * ```
     */
    static toPascalCase(str: string): string;
    /**
     * Converts a string to a constant case string.
     *
     * ```
     * StringUtility.toConstantCase('livesDown_by-the.River');
     * // 'LIVES_DOWN_BY_THE_RIVER'
     * ```
     */
    static toConstantCase(str: string): string;
    /**
     * Converts a string to a title case string.
     *
     * ```
     * StringUtility.toTitleCase('livesDown_by-the.River');
     * // 'Lives Down By The River'
     * ```
     */
    static toTitleCase(str: string): string;
    /**
     * Converts a string to a sentence case string.
     *
     * ```
     * StringUtility.toSentenceCase('livesDown_by-the.River');
     * // 'Lives down by the river'
     * ```
     */
    static toSentenceCase(str: string): string;
    /**
     * Determines if the value is a string value
     *
     * ```
     * StringUtility.isString('livesDown_by-the.River');
     * // true
     * ```
     */
    static isString(value: unknown): value is string;
}
