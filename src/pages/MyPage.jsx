// 마이 페이지 컴포넌트
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from '../components/Header';
import IdolCard from '../components/TestIdolCard';
import dummyIdols from '../components/DummyIdolList';
import BtnPagination from '../components/btn_Pagination';

function MyPage() {
  return (
    <div>
      <Header />
      <h2>내가 관심있는 아이돌</h2>

      <h2>관심있는 아이돌을 추가해보세요.</h2>
    </div>
  );
}

export default MyPage;
