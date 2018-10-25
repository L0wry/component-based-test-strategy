import {fork, take, takeEvery} from 'redux-saga/effects';
import * as api from '../api/youtube-api';
import * as videoActions from '../actions/video';
import {REQUEST} from '../actions';
import {fetchEntity} from './index';

export const fetchVideoCategories = fetchEntity.bind(null, api.buildVideoCategiesRequest, videoActions.categories);
export function* fetchMostPopularVideos(amount, loadDescription, nextPageToken) {
  const request = api.buildMostPopularVideosRequest.bind(null, amount, loadDescription, nextPageToken);
  yield fetchEntity(request, videoActions.mostPopular);
}
/******************************************************************************/
/******************************* WATCHERS *************************************/
/******************************************************************************/

export function* watchVideoCategories() {
  yield takeEvery(videoActions.VIDEO_CATEGORIES[REQUEST], fetchVideoCategories);
}

export function* watchMostPopularVideos() {
  while (true) {
    const {amount, loadDescription, nextPageToken} = yield take(videoActions.MOST_POPULAR[REQUEST]);
    yield fork(fetchMostPopularVideos, amount, loadDescription, nextPageToken);
  }
}