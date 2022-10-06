import './App.css';
import './style.css'
import './style2.css'
import './newcommon.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import {Route, Routes} from 'react-router-dom'

import HomePage from 'pages/HomePage';
import SubscribersPage from '../../pages/instagramPage/SubscribersPage'
import LikePage from 'pages/instagramPage/LikePage';
import CommentsPage from 'pages/instagramPage/CommentsPage';
import VideoPage from 'pages/instagramPage/VideoPage';
import HistoryPage from 'pages/instagramPage/HistoryPage';
import SubscribersTelegramPage from 'pages/telegram/SubscribersTelegramPage';
import ViewsTelegramPage from 'pages/telegram/ViewsTelegramPage';
import ReactionTelegramPage from 'pages/telegram/ReactionTelegramPage';
import FacebookLikePage from 'pages/facebookPage/FacebookLikePage';
import FacebookSubscribersPage from '../../pages/facebookPage/FacebookSubscribersPage'
import FacebookVotingPage from 'pages/facebookPage/FacebookVotingPage';
import FacebookCommentsPage from 'pages/facebookPage/FacebookCommentsPage';
import SpamOdnoklassnikiPage from '../../pages/SpamOdnoklassnikiPage'
import SpamVkPage from 'pages/SpamVkPage';
import SEOpage from 'pages/traficpage/SEOpage';
import Webpage from 'pages/traficpage/Webpage';
import Googlepage from 'pages/traficpage/Googlepage ';
import OrderPage from 'pages/orderPage/orderPage';
import Basket from 'components/basket/basket';
import { ContactUs } from 'components/form/contactForm';
import { Context } from 'components/context';

function App() {


const basket = (name, sum) =>{

  localStorage.setItem('name', name);
  localStorage.setItem('sum', sum);
}

  return (
    <Context.Provider value={{basket}}>
        <div id='wrapper'>
        <Routes>
          <Route  exact  path="/" element={<HomePage/>} />
          <Route  path="/InstagramSubscribers" element={<SubscribersPage/>} />
          <Route  path="/InstagramLike" element={<LikePage/>} />
          <Route  path="/InstagramComments" element={<CommentsPage/>} />
          <Route  path="/InstagramVideo" element={<VideoPage/>} />
          <Route  path="/InstagramHistory" element={<HistoryPage/>} />
          <Route  path="/TelegramSubscribers" element={<SubscribersTelegramPage/>} />
          <Route  path="/TelegramViews" element={<ViewsTelegramPage/>} />
          <Route  path="/TelegramReaction" element={<ReactionTelegramPage/>} />
          <Route  path="/FacebookLike" element={<FacebookLikePage/>} />
          <Route  path="/FacebookSubscribers" element={<FacebookSubscribersPage/>} />
          <Route  path="/FacebookVoting" element={<FacebookVotingPage/>} />
          <Route  path="/FacebookComments" element={<FacebookCommentsPage/>} />
          <Route  path="/SpamOdnoklassniki" element={<SpamOdnoklassnikiPage/>} />
          <Route  path="/SpamVk" element={<SpamVkPage/>} />
          <Route  path="/TraficSEO" element={<SEOpage/>} />
          <Route  path="/TraficWeb" element={<Webpage/>} />
          <Route  path="/TraficGoogle" element={<Googlepage/>} />
          <Route  path="/Order" element={<OrderPage/>} />
          <Route path= "/basket" element = {<Basket/>} />
          <Route path= "/Contact" element = {<ContactUs/>} />
      </Routes>
        
      </div>
    </Context.Provider>
  );
}

export default App;