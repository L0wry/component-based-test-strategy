import {fork, take} from 'redux-saga/effects';
import {REQUEST} from '../actions';
import * as commentActions from '../actions/comment'
import * as api from '../api/youtube-api';
import {fetchEntity} from './index';

export function* fetchCommentThread(videoId, nextPageToken) {
  const request = api.buildCommentThreadRequest.bind(null, videoId, nextPageToken);
  yield fetchEntity(request, commentActions.thread, videoId);
}

export function* postAddComment(comment) {
  const request = api.buildAddCommentRequest.bind(null, comment);
  yield fetchEntity(request, commentActions.addComment, comment);
}

/******************************************************************************/
/******************************* WATCHERS *************************************/
/******************************************************************************/
export function* watchCommentThread() {
  while(true) {
    const {videoId, nextPageToken} = yield take(commentActions.COMMENT_THREAD[REQUEST]);
    yield fork(fetchCommentThread, videoId, nextPageToken);
  }
}


export function* watchAddComment(){
  while(true) {
    const stuff = yield take(commentActions.ADD_COMMENT[REQUEST]);
    yield fork(postAddComment, stuff);
  }
}