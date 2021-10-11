import * as React from 'react';
import { FC } from 'react';
import styles from './controlStyles.module.scss';
import { Get, MgtTemplateProps } from '@microsoft/mgt-react/dist/es6/spfx';

export const GraphGet: FC<{}> = (props) => {

    const LoadingTemplate = (props: MgtTemplateProps) => {
        return (
            <div>Loading...</div>
        );
    };

    const ProfileInfo = (props: MgtTemplateProps) => {
        console.log(props);
        return (
            <div>
                <div><b>Display Name: </b>{props.dataContext.displayName}</div>
                <div><b>Job Title: </b>{props.dataContext.jobTitle}</div>
                <div><b>Email: </b>{props.dataContext.mail}</div>
            </div>
        );
    };

    const MessageTemplate = (props: MgtTemplateProps) => {
        console.log(props);
        return (
            <div>
                <div><b>'{props.dataContext.subject}'</b> from <i>{props.dataContext.sender.emailAddress.name}</i></div>
            </div>
        );
    };

    return (
        <div className={styles.getStyle}>
            <p>My Profile Info</p>
            <Get resource="/me" >
                <LoadingTemplate template="loading" />
                <ProfileInfo template="default" />
            </Get>
            <p>My Email Messages</p>
            <Get resource="/me/messages" pollingRate={5000}>
                <LoadingTemplate template="loading" />
                <MessageTemplate template='value' />
            </Get>
        </div>
    );
};