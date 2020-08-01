import React from 'react';
import setupStory from './SetupStory'
import HeaderNav from '../containers/HeaderNav/HeaderNav';
import { withQuery } from '@storybook/addon-queryparams';

const videoId = 'SGw3WYvvKrU'

export default {
    title: 'Header',
    component: HeaderNav,
    decorators: [withQuery, storyFn => setupStory(storyFn)],
    parameters: {
        query: {
            v: videoId,
        },
    },
};

export const withHeader = () => <HeaderNav />

