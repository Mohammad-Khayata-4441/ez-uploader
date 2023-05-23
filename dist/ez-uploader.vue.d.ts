import type { PropType as __PropType } from 'vue';
declare const _sfc_main: import("vue").DefineComponent<{
    url: {
        type: __PropType<string | string[]>;
        required: false;
    };
    base64: {
        type: __PropType<boolean>;
        required: false;
        default: boolean;
    };
    quality: {
        type: __PropType<number>;
        required: false;
        default: number;
    };
    contain: {
        type: __PropType<boolean>;
        required: false;
        default: boolean;
    };
    cover: {
        type: __PropType<boolean>;
        required: false;
        default: boolean;
    };
    accept: {
        type: __PropType<string>;
        required: false;
        default: string;
    };
    deleteBtnClass: {
        type: __PropType<string>;
        required: false;
        default: string;
    };
    previwerContainerClass: {
        type: __PropType<string>;
        required: false;
    };
    previwerItemClass: {
        type: __PropType<string>;
        required: false;
    };
    previewImageClass: {
        type: __PropType<string>;
        required: false;
    };
    file: {
        type: __PropType<File>;
        required: false;
        default: any;
    };
    maxSize: {
        type: __PropType<number>;
        required: false;
    };
    maxWidth: {
        type: __PropType<number>;
        required: false;
    };
    maxHeight: {
        type: __PropType<number>;
        required: false;
    };
    maxCount: {
        type: __PropType<number>;
        required: false;
    };
    deleteUrlBtn: {
        type: __PropType<boolean>;
        required: false;
        default: boolean;
    };
    downloadBtn: {
        type: __PropType<boolean>;
        required: false;
        default: boolean;
    };
    openBtn: {
        type: __PropType<boolean>;
        required: false;
        default: boolean;
    };
    modelValue: {
        type: __PropType<File | File[]>;
        required: false;
    };
    deletedUrls: {
        type: __PropType<string[]>;
        required: false;
        default: () => any[];
    };
}, {
    reset: () => void;
    resetValidation: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "update:url" | "update:deletedUrls" | "validationError")[], "update:modelValue" | "update:url" | "update:deletedUrls" | "validationError", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    url: {
        type: __PropType<string | string[]>;
        required: false;
    };
    base64: {
        type: __PropType<boolean>;
        required: false;
        default: boolean;
    };
    quality: {
        type: __PropType<number>;
        required: false;
        default: number;
    };
    contain: {
        type: __PropType<boolean>;
        required: false;
        default: boolean;
    };
    cover: {
        type: __PropType<boolean>;
        required: false;
        default: boolean;
    };
    accept: {
        type: __PropType<string>;
        required: false;
        default: string;
    };
    deleteBtnClass: {
        type: __PropType<string>;
        required: false;
        default: string;
    };
    previwerContainerClass: {
        type: __PropType<string>;
        required: false;
    };
    previwerItemClass: {
        type: __PropType<string>;
        required: false;
    };
    previewImageClass: {
        type: __PropType<string>;
        required: false;
    };
    file: {
        type: __PropType<File>;
        required: false;
        default: any;
    };
    maxSize: {
        type: __PropType<number>;
        required: false;
    };
    maxWidth: {
        type: __PropType<number>;
        required: false;
    };
    maxHeight: {
        type: __PropType<number>;
        required: false;
    };
    maxCount: {
        type: __PropType<number>;
        required: false;
    };
    deleteUrlBtn: {
        type: __PropType<boolean>;
        required: false;
        default: boolean;
    };
    downloadBtn: {
        type: __PropType<boolean>;
        required: false;
        default: boolean;
    };
    openBtn: {
        type: __PropType<boolean>;
        required: false;
        default: boolean;
    };
    modelValue: {
        type: __PropType<File | File[]>;
        required: false;
    };
    deletedUrls: {
        type: __PropType<string[]>;
        required: false;
        default: () => any[];
    };
}>> & {
    "onUpdate:modelValue"?: (...args: any[]) => any;
    "onUpdate:url"?: (...args: any[]) => any;
    "onUpdate:deletedUrls"?: (...args: any[]) => any;
    onValidationError?: (...args: any[]) => any;
}, {
    base64: boolean;
    quality: number;
    contain: boolean;
    cover: boolean;
    accept: string;
    deleteBtnClass: string;
    file: File;
    deleteUrlBtn: boolean;
    downloadBtn: boolean;
    openBtn: boolean;
    deletedUrls: string[];
}>;
export default _sfc_main;
