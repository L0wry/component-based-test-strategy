import React from 'react';
import setupStory from './SetupStory'
import { SideBar } from '../containers/SideBar/SideBar';

export default {
    title: 'SideBar',
    component: SideBar,
    decorators: [storyFn => setupStory(storyFn)],
};

export const withSidebar = () => <SideBar />

