import * as React from 'react';
import styles from './GraphToolkitDemo.module.scss';
import { IGraphToolkitDemoProps } from './IGraphToolkitDemoProps';
import { Person } from '@microsoft/mgt-react/dist/es6/spfx';
import { avatarType, PersonCardInteraction, ViewType } from '@microsoft/mgt-spfx';
import { GraphPeoplePicker } from '../../../ToolkitControls/Graph.PeoplePicker';

export default class GraphToolkitDemo extends React.Component<IGraphToolkitDemoProps, {}> {
    public render(): React.ReactElement<IGraphToolkitDemoProps> {
        return (
            <div className={styles.graphToolkitDemo}>
                <div className={styles.container}>
                    <div className={styles.row}>
                        <div className={styles.column}>
                            <GraphPeoplePicker />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
