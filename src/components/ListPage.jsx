import { getAllIdols, getAllDonations, contributeDonation, createDonation, createVote } from '../api/api';
import Item from './Item';
import { useEffect, useState } from 'react';
import './item.css';
import IdolChart from './IdolChart';

function ListPage() {
  // ==================================
  // 상태 변수 정의
  // ==================================

  // 후원 리스트 및 아이돌 리스트 상태
  const [donationList, setDonationList] = useState([]);
  const [idolList, setIdolList] = useState([]);

  //데이터 로딩 여부 상태
  const [loading, setLoading] = useState(true);

  //성별 필터 상태 (기본값: female)
  const [selectGender, setSelectGender] = useState('female');

  //이달의 차트에서 표시할 아이돌 개수 제한 (더보기 기능용 / 기본값: 10)
  const [visibleCount, setVisibleCount] = useState(10);

  //후원하기 모달 상태
  const [selectedDonation, setSelectedDonation] = useState(null); // 선택된 후원 항목
  const [showModal, setShowModal] = useState(false); // 모달 표시 여부
  const [donationAmount, setDonationAmount] = useState(''); //입력한 후원 금액

  // 새로운 조공 등록 모달 상태
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [newDonation, setNewDonation] = useState({
    title: '',
    subtitle: '',
    deadline: '',
    targetDonation: '',
    idolName: '',
  });

  //투표 모달 상태
  const [showVoteModal, setShowVoteModal] = useState(false);
  const [selectVoteIdol, setSelectVoteIdol] = useState(null);

  // ==================================
  // 데이터 불러오기 (후원 + 아이돌)
  // ==================================
  useEffect(() => {
    async function fetchData() {
      try {
        // 후원, 아이돌 데이터 동시에 요청
        const [donationData, idolData] = await Promise.all([getAllDonations(), getAllIdols()]);

        console.log('후원 데이터:', donationData);
        console.log('아이돌 데이터:', idolData);

        setDonationList(donationData);
        setIdolList(idolData);
      } catch (error) {
        console.error('데이터 불러오기 실패:', error);
      } finally {
        setLoading(false); //로딩 종료
      }
    }

    fetchData();
  }, []);

  // ==================================
  // 필터링 및 정렬된 데이터 생성
  // ==================================

  // 선택한 성별에 따른 이달의 차트 (득표순 정렬)
  const filteredIdolList = idolList
    .filter((idol) => idol.gender === selectGender) // 성별 분리
    .sort((a, b) => b.totalVotes - a.totalVotes) // 득표순 정렬
    .slice(0, visibleCount); //차트에 보이는 개수 10개로 제한

  // 후원 리스트를 마감일 기준으로 정렬 (마감일이 가까운 것부터 보이는 것이 나을 것 같다고 생각했습니다.)
  const sortedDonations = donationList
    .slice() // 원본 배열 보호
    .sort((a, b) => new Date(a.deadline) - new Date(b.deadline));

  // ==================================
  // 새로운 조공 입력 값 핸들링 함수
  // ==================================
  const handleNewDonationChange = (field, value) => {
    setNewDonation((prev) => ({ ...prev, [field]: value }));
  };

  // 새로운 조공 등록 함수
  const handleCreateDonation = async () => {
    // 입력한 아이돌 이름과 일치하는 아이돌을 데이터에서 찾아 id 확인하는 용도
    const matchedIdol = idolList.find((idol) => idol.name === newDonation.idolName);

    if (!matchedIdol) {
      alert('해당 이름의 아이돌을 찾을 수 없습니다.');
      return;
    }

    // API에 POST할 데이터 구성
    const donationData = {
      title: newDonation.title,
      subtitle: newDonation.subtitle,
      deadline: newDonation.deadline,
      targetDonation: parseInt(newDonation.targetDonation, 10),
      idolId: matchedIdol.id,
    };

    const result = await createDonation(donationData);

    if (result) {
      alert('조공이 등록되었습니다!');
      setShowCreateModal(false); //모달 닫기
      setNewDonation({ title: '', subtitle: '', deadline: '', targetDonation: '', idolName: '' });

      // 조공 리스트 새로고침(등록한 조공 반영)
      const updatedDonations = await getAllDonations();
      setDonationList(updatedDonations);
    } else {
      alert('등록 실패');
    }
  };

  // ==================================
  // 렌더링 (UI 영역)
  // ==================================

  // 로딩 또는 데이터 없을 경우 표시 (개발 중 임시용)
  if (loading) return <p>로딩 중...</p>;
  if (donationList.length === 0) return <p>후원 데이터가 없습니다.</p>;

  return (
    <>
      {/* 후원을 기다리는 조공 영역 */}
      <div className="funding">
        <h1>펀딩목록 </h1>
        <button className="btn btn--color btn--large" onClick={() => setShowCreateModal(true)}>
          새로운 조공 만들기
        </button>
        {/* 조공 슬라이더 영역 */}
        <div className="sliderWrapper">
          <div className="donationContainer">
            {sortedDonations.map((item) => (
              <Item
                item={item}
                key={item.id}
                // 후원하기 모달창 임시 구현
                onDonateClick={() => {
                  setSelectedDonation(item);
                  setShowModal(true);
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* 이달의 차트 영역 */}
      <div className="favorite">
        <h1>인기차트</h1>

        {/* 투표 버튼 */}
        <button className="btn btn--color btn--medium" onClick={() => setShowVoteModal(true)}>
          투표하기
        </button>

        {/* 성별 필터 버튼 */}
        <div className="buttonContainer">
          <button
            className="btn btn--color btn--medium"
            onClick={() => {
              setSelectGender('female');
              setVisibleCount(10);
            }}
          >
            이달의 여자아이돌
          </button>
          <button
            className="btn btn--color btn--medium"
            onClick={() => {
              setSelectGender('male');
              setVisibleCount(10);
            }}
          >
            이달의 남자아이돌
          </button>
        </div>

        {/* 아이돌 차트 리스트 */}
        <div className="monthlyChartContainer">
          {filteredIdolList?.map((item, index) => (
            <IdolChart item={item} key={item.id} rank={index + 1} />
          ))}
        </div>

        {/* 더보기 버튼 */}
        {filteredIdolList.length < idolList.filter((idol) => idol.gender === selectGender).length && (
          <button className="btn btn--color btn--medium" onClick={() => setVisibleCount((prev) => prev + 10)}>
            더보기
          </button>
        )}
      </div>

      {/* 후원 모달창 임시 구현*/}
      {showModal && (
        <div className="modalOverlay">
          <div className="modalContent">
            <h2>{selectedDonation?.title} 후원하기</h2>
            <input
              type="number"
              value={donationAmount}
              onChange={(e) => setDonationAmount(e.target.value)}
              placeholder="후원 금액 입력"
            />
            <button
              className="btn"
              onClick={async () => {
                if (!donationAmount) {
                  alert('금액을 입력하세요!');
                  return;
                }

                const result = await contributeDonation(selectedDonation.id, parseInt(donationAmount, 10));

                if (result) {
                  alert('후원 완료');
                  setShowModal(false);
                  setDonationAmount('');
                  // 후원 데이터 새로고침
                  const updatedDonations = await getAllDonations();
                  setDonationList(updatedDonations);
                } else {
                  alert('후원 실패');
                }
              }}
            >
              기여하기
            </button>
            <button className="btn" onClick={() => setShowModal(false)}>
              취소
            </button>
          </div>
        </div>
      )}

      {/* 새로운 조공 만들기 모달 */}
      {showCreateModal && (
        <div className="modalOverlay">
          <div className="modalContent">
            <h2>새로운 조공 만들기</h2>
            <input
              type="text"
              placeholder="제목"
              value={newDonation.title}
              onChange={(e) => handleNewDonationChange('title', e.target.value)}
            />
            <input
              type="text"
              placeholder="부제"
              value={newDonation.subtitle}
              onChange={(e) => handleNewDonationChange('subtitle', e.target.value)}
            />
            <input
              type="datetime-local"
              placeholder="마감일"
              value={newDonation.deadline}
              onChange={(e) => handleNewDonationChange('deadline', e.target.value)}
            />
            <input
              type="number"
              placeholder="목표 금액"
              value={newDonation.targetDonation}
              onChange={(e) => handleNewDonationChange('targetDonation', e.target.value)}
            />
            <input
              type="text"
              placeholder="아이돌 이름"
              value={newDonation.idolName}
              onChange={(e) => handleNewDonationChange('idolName', e.target.value)}
            />
            <button className="btn" onClick={handleCreateDonation}>
              등록
            </button>
            <button className="btn" onClick={() => setShowCreateModal(false)}>
              취소
            </button>
          </div>
        </div>
      )}

      {/* 투표하기 모달 */}
      {showVoteModal && (
        <div className="modalOverlay">
          <div className="modalContent voting" style={{ width: '500px', maxHeight: '90vh', overflowY: 'auto' }}>
            <h2>{selectGender === 'female' ? '이달의 여자아이돌 투표' : '이달의 남자아이돌 투표'}</h2>

            <div style={{ maxHeight: '60vh', overflowY: 'auto' }}>
              {idolList
                .filter((idol) => idol.gender === selectGender)
                .map((idol, index) => (
                  <div
                    key={idol.id}
                    onClick={() => setSelectVoteIdol(idol.id)}
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      border: selectVoteIdol === idol.id ? '5px solid #8C92AB' : '1px solid #ccc',
                      borderRadius: '8px',
                      margin: '8px 0',
                      cursor: 'pointer',
                    }}
                  >
                    <IdolChart item={idol} rank={index + 1} />
                  </div>
                ))}
            </div>

            <button
              className="btn"
              onClick={async () => {
                if (!selectVoteIdol) {
                  alert('아이돌을 선택해주세요.');
                  return;
                }

                const result = await createVote(selectVoteIdol);
                if (result) {
                  alert('투표 성공!');
                  setShowVoteModal(false);
                  setSelectVoteIdol(null);
                  const updatedIdols = await getAllIdols();
                  setIdolList(updatedIdols);
                } else {
                  alert('투표 실패');
                }
              }}
            >
              투표하기
            </button>

            <button className="btn" onClick={() => setShowVoteModal(false)}>
              닫기
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default ListPage;
