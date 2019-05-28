import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Avatar from 'react-avatar-edit';
import { UserProfile } from './UserProfile';
import { UserRole } from './UserRole';
import { UserSettings } from './UserSettings';
import './site.css';

export default ({ data, update, active, onCrop, onClose, onBeforeFileLoad }) => {

    //const user = data.users[active];
    const userAvatar = data.users.map((user, index) => {
        return (<div>
            <Avatar
                width={150}
                height={200}
                onCrop={onCrop}
                onClose={onClose}
                onBeforeFileLoad={onBeforeFileLoad}
                src={user.avatar}
                label={"User image"}
                user={user}
                index={index}
                key={user.id}
                update={update}
            />
            {data.preview === null ? [] : <img
                src={data.preview}
                alt="Preview"
            />}
        </div>);
    });

    const userProfile = data.users.map((user, index) => {
        return (<UserProfile
            user={user}
            index={index}
            key={user.id}
            update={update}
        />);
    });

    const userRole = data.users.map((user, index) => {
        return (<UserRole
            user={user}
            index={index}
            key={user.id}
            update={update}
        />);
    });

    const userSettings = data.users.map((user, index) => {
        return (<UserSettings
            user={user}
            index={index}
            key={user.id}
            update={update}
        />);
    });

    return (
        <div className="thumbnail">
            <Tabs>
                <TabList className="nav justify-content-center bg-secondary">
                    <Tab className="nav-item nav-link">Profile</Tab>
                    <Tab className="nav-item nav-link">User role</Tab>
                    <Tab className="nav-item nav-link">Settings</Tab>
                </TabList>
                <div className="row mt-3">
                    <div className="col-sm-4">
                        {userAvatar[active]}
                    </div>
                    <div className="col-sm-8">
                        <TabPanel>
                            {userProfile[active]}
                        </TabPanel>
                        <TabPanel>
                            {userRole[active]}
                        </TabPanel>
                        <TabPanel>
                            {userSettings[active]}
                        </TabPanel>
                    </div>
                </div>
            </Tabs>
        </div>
    );
};