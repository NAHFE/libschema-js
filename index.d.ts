/* tslint:disable */
/* eslint-disable */

/* auto-generated by NAPI-RS */

export function domainExists(domain: string): Promise<boolean | null>
export function schoolExists(domain: string, school: string): Promise<boolean | null>
export function classExists(domain: string, school: string, sclass: string): Promise<boolean | null>
export function getSchoolGuid(domain: string, name: string): Promise<string | null>
export function getClassGuid(domain: string, school: string, name: string): Promise<string | null>
export function getSchools(domain: string): Promise<Array<Array<string>> | null>
export function getClasses(domain: string, school: string): Promise<Array<Array<string>> | null>
export function png(domain: string, school: string, sclass: string, week: number, resWidth: number, resHeight: number): Promise<Buffer | null>
