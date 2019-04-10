export declare class PodUtil {
    static writeToFile: (url: string, data: string) => Promise<void>;
    static readFolder: (url: string) => Promise<any>;
    static updateFile: (url: string, data: string) => Promise<any>;
    static readFile: (url: string) => Promise<any>;
    static removeFile: (url: string) => Promise<any>;
    static giveGrantsTo: (file: any, contact: any) => Promise<void>;
    static createFile: (url: string, data: string) => Promise<void>;
    private static buildGrantText;
}
