import React from 'react';
import setupStory from './SetupStory'
import Watch from '../containers/Watch/Watch';
import { withQuery } from '@storybook/addon-queryparams';


const videoId = 'SGw3WYvvKrU'

export default {
    title: 'Watch',
    component: Watch,
    decorators: [withQuery, storyFn => setupStory(storyFn)],
    parameters: {
        query: {
            v: videoId,
        },
    },
};

export const withLoadedVideo = () => <Watch />

