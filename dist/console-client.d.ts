import { IExtension } from './extension';
import { IFax } from './fax';
import { IGroup } from './group';
import { IHttpClient } from './http-client';
import { IPhonebookEntry } from './phonebook-entry';
import { ISystemStatus } from './system-status';
import { IUserInfo } from './userinfo';
export declare class ConsoleClient {
    private readonly httpClient;
    constructor(httpClient: IHttpClient);
    /**
     * Get system status
     * @returns {Promise<ISystemStatus>}
     */
    getSystemStatus(): Promise<ISystemStatus>;
    /**
     * Get extensions
     * @returns {Promise<IExtension[]>}
     */
    getExtensionList(): Promise<IExtension[]>;
    /**
     * Get faxes
     * @returns {Promise<IFax[]>}
     */
    getFaxList(): Promise<IFax[]>;
    /**
     * Get current user info
     * @returns {Promise<IUserInfo>}
     */
    getCurrentUser(): Promise<IUserInfo>;
    /**
     * Get groups
     * @returns {Promise<IGroup[]>}
     */
    getGroupList(): Promise<IGroup[]>;
    /**
     * Get phonebook
     * @returns {Promise<IPhonebookEntry[]>}
     */
    getPhonebookList(): Promise<IPhonebookEntry[]>;
}
