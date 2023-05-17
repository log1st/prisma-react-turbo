import IConfigItemDefault from './models/IConfigItem';
import StringUtilityDefault from './utilities/StringUtility';
import CaseConverterEnumDefault from './constants/CaseConverterEnum';
import IResultsDefault from './models/IResults';
import IReplacerDefault from './models/IReplacer';
import IReplacerSlotQuestionDefault from './models/IReplacerSlotQuestion';
export { StringUtilityDefault as StringUtility };
export { CaseConverterEnumDefault as CaseConverterEnum };
export declare type IResults = IResultsDefault;
export declare type IConfigItem = IConfigItemDefault;
export declare type IReplacer = IReplacerDefault;
export declare type IReplacerSlotQuestion = IReplacerSlotQuestionDefault;
/**
 * Main method to create your template files. Accepts an array of `IConfigItem` items.
 */
export declare function generateTemplateFiles(data: IConfigItem[]): Promise<void>;
/**
 * Main method to create your template files with command line.
 */
export declare function generateTemplateFilesCommandLine(data: IConfigItem[]): Promise<void>;
/**
 * Main method to run generate on multiple templates at once, without any interactive prompts.
 */
export declare function generateTemplateFilesBatch(data: Omit<IConfigItem, 'stringReplacers'>[]): Promise<void>;
