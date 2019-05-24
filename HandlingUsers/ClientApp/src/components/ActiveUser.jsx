import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Avatar from 'react-avatar-edit';
import UserProfile from './UserProfile';
import UserRole from './UserRole';
import UserSettings from './UserSettings';

export default ({ data, active }) => {
    //if (!data || !data[active]) { return <h3>Nothing found :(</h3>; }

    const user = data.users[active];

    return (
        <div className="thumbnail">
            <Tabs>
                <TabList className="nav justify-content-center bg-secondary">
                    <Tab className="nav-item nav-link">Profile</Tab>
                    <Tab className="nav-item nav-link">User role</Tab>
                    <Tab className="nav-item nav-link">Settings</Tab>
                </TabList>
                <div className="row">
                    <div className="col-sm-4">
                        <Avatar
                            width={150}
                            height={200}
                            onCrop={this.onCrop}
                            onClose={this.onClose}
                            src={data.src}
                            label={"User image"}
                        />
                        <img
                            src={data.preview}
                            alt="Preview" />
                    </div>
                    <div className="col-sm-8">
                        <TabPanel>
                            <UserProfile user={user}/>
                        </TabPanel>
                        <TabPanel>
                            <UserRole user={user}/>
                        </TabPanel>
                        <TabPanel>
                            <UserSettings user={user}/>
                        </TabPanel>
                    </div>
                </div>
            </Tabs>
        </div>
    );
};