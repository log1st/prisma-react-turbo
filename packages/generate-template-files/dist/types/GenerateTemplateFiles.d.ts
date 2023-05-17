import IConfigItem from './models/IConfigItem';
export default class GenerateTemplateFiles {
    private _isCommandLine;
    private _isBatch;
    /**
     * Main method to create your template files. Accepts an array of `IConfigItem` items.
     */
    generate(options: IConfigItem[]): Promise<void>;
    /**
     * Main method to create your template files with the command line.
     */
    commandLine(options: IConfigItem[]): Promise<void>;
    /**
     * Main method to run generate on multiple templates at once, without any interactive prompts
     */
    batchGenerate(options: Omit<IConfigItem, 'stringReplacers'>[]): Promise<void>;
    private _outputFiles;
    /**
     * Ask what template options the user wants to use
     */
    private _getSelectedItem;
    /**
     */
    private _getDefaultCaseConverters;
    /**
     * New question asking what should text should be used to replace the template text.
     */
    private _getReplacerSlotValues;
    /**
     * Dynamic replacer values, used for interactive and batch generation
     */
    private _getDynamicReplacerSlotValues;
    /**
     * Create every variation for the for the replacement keys
     */
    private _getReplacers;
    /**
     */
    private _getOutputPath;
    /**
     */
    private _shouldWriteFiles;
    /**
     * Process and copy files.
     */
    private _createFiles;
    /**
     */
    private _onComplete;
}
