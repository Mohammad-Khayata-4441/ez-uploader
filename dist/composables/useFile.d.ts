import { type AxiosRequestConfig } from 'axios';
export type DocumentType = 'pdf' | 'excel' | 'word' | 'text';
export type FileType = 'image' | 'video' | DocumentType;
export declare const useFile: () => {
    toBase64: (file: File) => Promise<unknown>;
    getFileSize: (size: string | number) => string;
    getFileName: (fileName: string) => string;
    getFileExt: (filePath?: string) => string;
    getFileType: (fileExt: string) => FileType;
    openFileWindow: (onUpload: (payload: {
        file: File;
        base64: string;
    }) => void) => void;
    EXCEL_EXTENTIONS: string[];
    IMAGE_EXTENTIONS: string[];
    PDF_EXTENTIONS: string[];
    VIDEO_EXTENTIONS: string[];
    WORD_EXTENTIONS: string[];
    downloadFile: (fileUrl: string, config?: AxiosRequestConfig) => Promise<void>;
};
