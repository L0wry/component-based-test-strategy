import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import { AppLayout } from '../components/AppLayout/AppLayout';
import { Provider } from 'react-redux';
import { BrowserRouter, withRouter } from 'react-router-dom';
import { configureStore } from '../store/configureStore';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { youtubeLibraryLoaded } from '../store/actions/api';

const API_KEY = 'AIzaSyCOAKnSuDjVhL01ZdgYh9ivQ3KXbhhL2qQ';

export default function setupStory(story) {
    const store = configureStore();

    class MockApp extends Component {
        componentDidMount() {
            this.loadYoutubeApi();
        }

        loadYoutubeApi() {
            const script = document.createElement("script");
            script.src = "https://apis.google.com/js/client.js";

            script.onload = () => {
                window.gapi.load('client', () => {
                    window.gapi.client.setApiKey(API_KEY);
                    window.gapi.client.load('youtube', 'v3', () => {
                        this.props.youtubeLibraryLoaded();
                    });
                });
            };

            document.body.appendChild(script);
        }

        render() {
            return this.props.children
        }
    }

    function mapDispatchToProps(dispatch) {
        return bindActionCreators({ youtubeLibraryLoaded }, dispatch);
    }

    const MockAppContext = withRouter(connect(null, mapDispatchToProps)(MockApp))

    return (
        <Provider store={store}>
            <BrowserRouter>
                <AppLayout>
                    <MockAppContext>
                        {story()}
                    </MockAppContext>
                </AppLayout>
            </BrowserRouter>
        </Provider>
    )
}


