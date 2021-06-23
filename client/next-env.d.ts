/// <reference types="next" />
/// <reference types="next/types/global" />

declare interface Array {
  readonly findOne: (prop: string, value: any) => any;
  readonly findAll: (prop: string, value: any) => any[];
  readonly remove : (prop: string, value: any) => any[];
  readonly groupBy: (prop: string) => any;
  readonly orderBy: (prop: string, type: string) => any[];
}

declare module '*.svg';
declare module '*.png';
declare module '*.jpg';
declare module '*.webp';
declare module '@zeit/next-sass';
