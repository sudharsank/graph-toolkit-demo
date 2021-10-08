import * as React from 'react';
import { FC } from 'react';
import { useState } from 'react';
import styles from './controlStyles.module.scss';
import { FileList } from '@microsoft/mgt-react/dist/es6/spfx';
import { CacheService } from '@microsoft/mgt-spfx';
import { PrimaryButton } from 'office-ui-fabric-react/lib/Button';

export const GraphFileList: FC<{}> = (props) => {
    const [selFileInfo, setSelFileInfo] = useState<any>(undefined);

    const _onFileOrFolderClick = (e: any) => {
        console.log(e);
        if (e.detail) {
            let fileInfo: any = {
                Editor: e.detail.lastModifiedBy.user.displayName,
                Modified: e.detail.lastModifiedDateTime,
                ItemId: e.detail.remoteItem.sharepointIds.listItemId,
                FileUrl: e.detail.remoteItem.webDavUrl,
                FilePrevUrl: e.detail.remoteItem.webUrl
            };
            setSelFileInfo(fileInfo);
        }
    };

    const _onClearCache = () => {
        CacheService.clearCaches();
    };

    return (
        <div className={styles.filesList}>
            <p>My Onedrive files</p>
            <FileList fileListQuery="/me/drive/recent" pageSize={5} itemClick={_onFileOrFolderClick} />
            <div>
                <p>Selected file info</p>
                {selFileInfo &&
                    <div className={styles.fileInfo}>
                        <div><p>Last Modified By:</p> {selFileInfo.Editor}</div>
                        <div><p>Last Modified Time:</p> {selFileInfo.Modified}</div>
                        <div><p>List Item Id:</p> {selFileInfo.ItemId}</div>
                        <div><p>File Url:</p> {selFileInfo.FileUrl}</div>
                        <div><p>File Preview Url:</p> {selFileInfo.FilePrevUrl}</div>
                    </div>
                }
            </div>
            <p>File Upload</p>
            <FileList enableFileUpload={true} maxUploadFile={2}></FileList>
            <PrimaryButton onClick={_onClearCache} text="Clear Cache" />
            <div className={styles.customFileList}>
                <p>Custom Style</p>
                <FileList fileListQuery="/sites/m365devpractice.sharepoint.com,1d7acb57-c393-4dbe-8733-4dcd3db6b3fe,2b5f2ad1-fb0f-48fb-bf93-715328878436/drives/b!V8t6HZPDvk2HM03NPbaz_tEqXysP-_tIv5NxUyiHhDadfdq-G3_MTJRmpqMsjD3d/root/children" />
            </div>
        </div>
    );
};