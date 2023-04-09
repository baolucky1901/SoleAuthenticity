import Router from 'next/router';
import { wrapper } from '../store';

// types
import type { AppProps } from 'next/app';

// global styles
import 'rc-slider/assets/index.css';
import 'react-rater/lib/react-rater.css';
import 'swiper/swiper.scss';
import '../assets/css/styles.scss';

import * as gtag from './../utils/gtag';
import { AuthContextProvider } from './api/context/AuthContext';
import ChatBox from './../components/chatbox/chatbox';


const isProduction = process.env.NODE_ENV === 'production';

// only events on production
if(isProduction) {
  
  // Notice how we track pageview when route is changed
  Router.events.on('routeChangeComplete', (url: string) => gtag.pageview(url));
}

const MyApp = ({ Component, pageProps }: AppProps) => (
  <AuthContextProvider>
    <Component {...pageProps} />
    <ChatBox widgetId="1gt8v6vl7" pageId='642d8e3431ebfa0fe7f6ad7d'/>
  </AuthContextProvider>
);

export default wrapper.withRedux(MyApp);