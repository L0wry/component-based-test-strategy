import {createAction, createRequestTypes, FAILURE, REQUEST, SUCCESS} from './index';

export const COMMENT_THREAD = createRequestTypes('COMMENT_THREAD');
export const thread = {
  request: (videoId, nextPageToken) => createAction(COMMENT_THREAD[REQUEST], {videoId, nextPageToken}),
  success: (response, videoId) => createAction(COMMENT_THREAD[SUCCESS], {response, videoId}),
  failure: (response) => createAction(COMMENT_THREAD[FAILURE], {response}),
};

export const ADD_COMMENT = createRequestTypes('ADD_COMMENT');
export const addComment = {
  request: (comment) => createAction(ADD_COMMENT[REQUEST], {comment}),
  success: (response) => createAction(ADD_COMMENT[SUCCESS], {response}),
  failure: (response) => createAction(ADD_COMMENT[FAILURE], {response}),
}