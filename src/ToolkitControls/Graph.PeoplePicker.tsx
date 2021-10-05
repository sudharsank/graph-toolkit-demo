import * as React from 'react';
import { useState, useEffect } from 'react';
import styles from './controlStyles.module.scss';
import { PeoplePicker } from '@microsoft/mgt-react/dist/es6/spfx';
import { PersonType } from '@microsoft/mgt-spfx';

export const GraphPeoplePicker: React.FC<{}> = (props) => {
    const [selPeople, setSelPeople] = useState<string[]>([]);

    const _onSelectionChanged = (e: any) => {
        let selusers: string[] = [];
        if (e.detail && e.detail.length > 0) {
            e.detail.map(user => {
                selusers.push(user.userPrincipalName);
            });
        }
        console.log(selusers);
        setSelPeople(selusers);
    };

    useEffect(() => {

    }, [selPeople]);

    return (
        <div className={styles.peoplePickerContainer}>
            <p>All Users and Groups</p>
            <PeoplePicker type={PersonType.any} placeholder="Select users or groups!"
                selectionChanged={_onSelectionChanged} />
            <div className={styles.selUsers}><b>Selected Users</b>: {selPeople.length > 0 ? selPeople.join(', ') : 'No users selected!'}</div>
            <p>Group Users</p>
            <PeoplePicker type={PersonType.person} placeholder="Select users from group!" groupId={'a5bf1924-0121-449c-8a94-515025544596'} />
            <div className={styles.customStyledPicker}>
                <p>Custom Style applied</p>
                <PeoplePicker />
            </div>
        </div>
    );
};
