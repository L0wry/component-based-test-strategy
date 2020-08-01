import React from 'react';
import setupStory from './SetupStory'
import { withQuery } from '@storybook/addon-queryparams';
import Search from '../containers/Search/Search';


const searchQuery = 'animal'
export default {
    title: 'Search',
    component: Search,
    decorators: [withQuery, storyFn => setupStory(storyFn)],
    parameters: {
        query: {
            search_query: searchQuery,
        },
    },
};

export const withSearchedAnimal = () => <Search />
