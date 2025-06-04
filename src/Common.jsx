import { useState } from 'react';
import icon from './assets/images/Chart.png';
import IdolImg from './assets/images/IdolImg.png';
import IdolImg2 from './assets/images/IdolImg2.png';
import Button from './components/Button';
import IdolProfile from './components/IdolProfile';
import IdolProfileImage from './components/IdolProfileImage';
import IdolSponsor from './components/IdolSponsor';
import IdolVoteChart from './components/IdolVoteChart';
import RadioCredit from './components/RadioCredit';
import RadioIdol from './components/RadioIdol';

function Common() {
  const [isCheck, setCheck] = useState(true);

  const handleToggle = () => {
    setCheck(!isCheck);
  };

  return (
    <div style={{ padding: '15px' }}>
      <h1 style={{ padding: '10px' }}>공통 스타일링</h1>
      <hr />
      {/* root 스타일표 */}
      <div>
        <h2 style={{ paddingTop: '30px' }} onClick={handleToggle}>
          {isCheck ? 'root 스타일표 ▼' : 'root 스타일표 ▲'}
        </h2>
        <div style={{ display: isCheck ? 'none' : 'block' }}>
          <div style={{ display: 'flex', gap: '10px' }}>
            <table>
              <thead>
                <tr>
                  <th></th>
                  <th>변수명</th>
                  <th>적용값</th>
                </tr>
              </thead>
              <tbody>
                {/* 색상 */}
                <tr>
                  <th rowSpan={9}>색상</th>
                  <td>--color-black-02000E</td>
                  <td style={{ 'background-color': '#02000E' }}></td>
                </tr>
                <tr>
                  <td>--color-black-181D26</td>
                  <td style={{ 'background-color': '#181D26' }}></td>
                </tr>
                <tr>
                  <td>--color-gray-67666E</td>
                  <td style={{ 'background-color': '#67666E' }}></td>
                </tr>
                <tr>
                  <td>--color-gray-828282</td>
                  <td style={{ 'background-color': '#828282' }}></td>
                </tr>
                <tr>
                  <td>--color-gray-8C92AB</td>
                  <td style={{ 'background-color': '#8C92AB' }}></td>
                </tr>
                <tr>
                  <td>--color-gray-A3A5A8</td>
                  <td style={{ 'background-color': '#A3A5A8' }}></td>
                </tr>
                <tr>
                  <td>--color-white-F7F7F8</td>
                  <td style={{ 'background-color': '#F7F7F8' }}></td>
                </tr>
                <tr>
                  <td>--color-orange-F96D69</td>
                  <td style={{ 'background-color': '#F96D69' }}></td>
                </tr>
                <tr>
                  <td>--color-pink-FE5493</td>
                  <td style={{ 'background-color': '#FE5493' }}></td>
                </tr>
                {/* 폰트 사이즈 */}
                <tr>
                  <th rowSpan={8}>폰트 사이즈</th>
                  <td>--font-size-xxs</td>
                  <td>1.2rem (12px)</td>
                </tr>
                <tr>
                  <td>--font-size-xs</td>
                  <td>1.3rem (13px)</td>
                </tr>
                <tr>
                  <td>--font-size-base</td>
                  <td>1.4rem (14px)</td>
                </tr>
                <tr>
                  <td>--font-size-sm</td>
                  <td>1.5rem (15px)</td>
                </tr>
                <tr>
                  <td>--font-size-md</td>
                  <td>1.6rem (16px)</td>
                </tr>
                <tr>
                  <td> --font-size-lg</td>
                  <td>1.8rem (18px)</td>
                </tr>
                <tr>
                  <td> --font-size-xl</td>
                  <td>2.0rem (20px)</td>
                </tr>
                <tr>
                  <td> --font-size-xxl</td>
                  <td>2.6rem (26px)</td>
                </tr>
              </tbody>
            </table>
            <table>
              <thead>
                <tr>
                  <th></th>
                  <th>변수명</th>
                  <th>적용값</th>
                </tr>
              </thead>
              <tbody>
                {/* 폰트 굵기  */}
                <tr>
                  <th rowSpan={3}>폰트 굵기</th>
                  <td>--font-weight-500</td>
                  <td>500</td>
                </tr>
                <tr>
                  <td>--font-weight-600</td>
                  <td>600</td>
                </tr>
                <tr>
                  <td>--font-weight-700</td>
                  <td>700</td>
                </tr>
                {/* 폰트 행간  */}
                <tr>
                  <th>폰트 행간</th>
                  <td> --line-height-26</td>
                  <td>26px</td>
                </tr>
                {/* 폰트 자간  */}
                <tr>
                  <th rowSpan={3}>폰트 자간</th>
                  <td>--letter-spacing-wide</td>
                  <td>5px</td>
                </tr>
                <tr>
                  <td>--letter-spacing-wide-md</td>
                  <td>2px</td>
                </tr>
                <tr>
                  <td>--letter-spacing-wide-sm</td>
                  <td>0.17px</td>
                </tr>
                {/* 테두리 둥굴기  */}
                <tr>
                  <th rowSpan={5}>테두리 둥굴기</th>
                  <td>--border-radius-xs</td>
                  <td>3px</td>
                </tr>
                <tr>
                  <td>--border-radius-sm</td>
                  <td>8px</td>
                </tr>
                <tr>
                  <td>--border-radius-md</td>
                  <td>12px</td>
                </tr>
                <tr>
                  <td>--border-radius-lg</td>
                  <td>24px</td>
                </tr>
                <tr>
                  <td>--border-radius-round</td>
                  <td>999px</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <hr style={{ margin: '30px 0 ', border: 'none', borderTop: '1px solid var(--color-gray-67666E)' }} />
      {/* 버튼 스타일 */}
      <div>
        <h2>버튼 스타일 [Button]</h2>
        <div style={{ display: 'flex', justifyContent: 'space-evenly', gap: '20px', marginTop: '10px' }}>
          <div style={{ width: '100%' }}>
            <Button height="large" ariaLabel="large size button sample">
              large (width 40)
            </Button>
            <br />
            <br />
            <Button height="medium" ariaLabel="medium size button sample">
              medium (width 32)
            </Button>
            <br />
            <br />
            <Button height="medium" isDisabled={true} ariaLabel="disabled button sample">
              disabled
            </Button>
            <br />
            <br />
            <Button height="medium" width="auto" icon={icon} alt="Chart" ariaLabel="차트 투표하기">
              차트 투표하기
            </Button>
            <span style={{ marginLeft: '10px' }}></span>
            <Button
              height="medium"
              width="auto"
              icon={icon}
              alt="Chart"
              iconGap="10px"
              radius="round"
              ariaLabel="차트 투표하기"
            >
              차트 투표하기
            </Button>
          </div>
          <table style={{ width: '600px' }}>
            <thead>
              <tr>
                <th>prop</th>
                <th>기본 설정 값</th>
                <th>설명</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>ariaLabel</th>
                <td>'버튼'</td>
                <td>
                  <b>'aria-label'을 접근성 고려를 위해 지정해주세요.</b>
                </td>
              </tr>
              <tr>
                <th>height</th>
                <td>'large'</td>
                <td>
                  large : 높이40px <br />
                  medium : 높이32px
                </td>
              </tr>
              <tr>
                <th>width</th>
                <td>'100%'</td>
                <td>px 또는 % 등 값 지정</td>
              </tr>
              <tr>
                <th>radius</th>
                <td>'xs'</td>
                <td>
                  xs : 3px
                  <br />
                  sm : 8px
                  <br /> md : 12px
                  <br /> lg : 24px <br />
                  round : 999px
                </td>
              </tr>
              <tr>
                <th>isDisabled</th>
                <td>false</td>
                <td>true : disabled 활성화</td>
              </tr>
              <tr>
                <th>icon</th>
                <td>false</td>
                <td>import한 이미지 주소 값</td>
              </tr>
              <tr>
                <th>alt</th>
                <td>'icon'</td>
                <td>이미지에 대한 설명</td>
              </tr>
              <tr>
                <th>iconGap</th>
                <td>'4px'</td>
                <td>이미지와 글자 사이의 간격 값</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <hr style={{ margin: '30px 0', border: 'none', borderTop: '1px solid var(--color-gray-67666E)' }} />
      {/* 아이돌 조공 */}
      <div>
        <h2>아이돌 조공 [IdolSponsor]</h2>
        <div style={{ display: 'flex', justifyContent: 'space-evenly', gap: '20px', marginTop: '10px' }}>
          <div style={{ width: '100%' }}>
            <IdolSponsor
              img={IdolImg2}
              alt="뉴진스 민지 지하철 광고"
              subTitle="강남역 광고"
              title="뉴진스 민지 지하철 광고"
              credit={6000}
              dDay="5일 남음"
              barProgress={30}
            />
          </div>
          <table style={{ width: '600px' }}>
            <thead>
              <tr>
                <th>prop</th>
                <th>기본 설정 값</th>
                <th>설명</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>img</th>
                <td>값 지정</td>
                <td>import한 이미지 주소 값</td>
              </tr>
              <tr>
                <th>alt</th>
                <td>'후원 조공 이미지 베너'</td>
                <td>이미지에 대한 설명</td>
              </tr>
              <tr>
                <th>subTitle</th>
                <td>값 지정</td>
                <td>서브 타이틀</td>
              </tr>
              <tr>
                <th>title</th>
                <td>값 지정</td>
                <td>조공 제목</td>
              </tr>
              <tr>
                <th>credit</th>
                <td>값 지정</td>
                <td>크레딧 값</td>
              </tr>
              <tr>
                <th>dDay</th>
                <td>값 지정</td>
                <td>남은 요일</td>
              </tr>
              <tr>
                <th>barProgress</th>
                <td> % 값 지정 (숫자값만)</td>
                <td>크레딧 채워진 퍼센트</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <hr style={{ margin: '30px 0', border: 'none', borderTop: '1px solid var(--color-gray-67666E)' }} />
      {/* 이달의 차트 */}
      <div>
        <h2>이달의 차트 [IdolVoteChart]</h2>
        <div style={{ display: 'flex', justifyContent: 'space-evenly', gap: '20px', marginTop: '10px' }}>
          <div style={{ width: '100%' }}>
            <IdolVoteChart profileImg={IdolImg} alt="아이브 장원영" idx={1} name="아이브 장원영" vote={204000} />
            <IdolVoteChart profileImg={IdolImg} alt="아이브 장원영" idx={2} name="아이브 장원영" vote={204000} />
          </div>
          <table style={{ width: '600px' }}>
            <thead>
              <tr>
                <th>prop</th>
                <th>기본 설정 값</th>
                <th>설명</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>profileImg</th>
                <td>값 지정</td>
                <td>import한 이미지 주소 값</td>
              </tr>
              <tr>
                <th>alt</th>
                <td>'idol profile'</td>
                <td>이미지에 대한 설명</td>
              </tr>
              <tr>
                <th>idx</th>
                <td>값 지정</td>
                <td>순서</td>
              </tr>
              <tr>
                <th>name</th>
                <td>값 지정</td>
                <td>아이돌 그룹과 이름</td>
              </tr>
              <tr>
                <th>vote</th>
                <td>값 지정 (숫자만)</td>
                <td>표 값</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <hr style={{ margin: '30px 0', border: 'none', borderTop: '1px solid var(--color-gray-67666E)' }} />
      {/* 투표 모달창 라디오 버튼 */}
      <div>
        <h2>투표 모달창 라디오 버튼 [RadioIdol]</h2>
        <div style={{ display: 'flex', justifyContent: 'space-evenly', gap: '20px', marginTop: '10px' }}>
          <div style={{ width: '100%' }}>
            <RadioIdol
              id="radio1"
              groupName="radioGroup1"
              profileImg={IdolImg}
              alt="img1"
              idx={1}
              name="아이브 장원영"
              vote={204000}
              isChecked={true}
            />
            <RadioIdol
              id="radio2"
              groupName="radioGroup1"
              alt="img2"
              profileImg={IdolImg}
              idx={2}
              name="아이브 장원영"
              vote={204000}
              isChecked={false}
            />
          </div>
          <table style={{ width: '600px' }}>
            <thead>
              <tr>
                <th>prop</th>
                <th>기본 설정 값</th>
                <th>설명</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>id</th>
                <td>값 지정</td>
                <td>
                  <b>input=id, labe=htmlFor 값</b>
                </td>
              </tr>
              <tr>
                <th>groupName</th>
                <td>값 지정</td>
                <td>
                  <b>input=name 값</b>
                </td>
              </tr>
              <tr>
                <th>profileImg</th>
                <td>값 지정</td>
                <td>import한 이미지 주소 값</td>
              </tr>
              <tr>
                <th>alt</th>
                <td>'idol profile'</td>
                <td>이미지에 대한 설명</td>
              </tr>
              <tr>
                <th>idx</th>
                <td>값 지정</td>
                <td>순서</td>
              </tr>
              <tr>
                <th>name</th>
                <td>값 지정</td>
                <td>아이돌 그룹과 이름</td>
              </tr>
              <tr>
                <th>vote</th>
                <td>값 지정 (숫자만)</td>
                <td>표 값</td>
              </tr>
              <tr>
                <th>isChecked</th>
                <td>false</td>
                <td>true : defaultChecked 값 설정</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <hr style={{ margin: '30px 0', border: 'none', borderTop: '1px solid var(--color-gray-67666E)' }} />
      {/* 크레딧 충전 모달창 라디오 버튼 */}
      <div>
        <h2>크레딧 충전 모달창 라디오 버튼 [RadioCredit]</h2>
        <div style={{ display: 'flex', justifyContent: 'space-evenly', gap: '20px', marginTop: '10px' }}>
          <div style={{ width: '100%' }}>
            <RadioCredit id="radio3" groupName="radioGroup2" isChecked>
              100
            </RadioCredit>
            <RadioCredit id="radio4" groupName="radioGroup2">
              500
            </RadioCredit>
          </div>
          <table style={{ width: '600px' }}>
            <thead>
              <tr>
                <th>prop</th>
                <th>기본 설정 값</th>
                <th>설명</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>id</th>
                <td>값 지정</td>
                <td>
                  <b>input=id, labe=htmlFor 값</b>
                </td>
              </tr>
              <tr>
                <th>groupName</th>
                <td>값 지정</td>
                <td>
                  <b>input=name 값</b>
                </td>
              </tr>
              <tr>
                <th>isChecked</th>
                <td>false</td>
                <td>true : defaultChecked 값 설정</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <hr style={{ margin: '30px 0', border: 'none', borderTop: '1px solid var(--color-gray-67666E)' }} />
      {/* 마이페이지 아이돌 프로필 */}
      <div>
        <h2>마이페이지 아이돌 프로필 [IdolProfile]</h2>
        <p>클릭 시 체크 상태 됨. isDelete 값이 활성화 되면 클릭 시 체크 X </p>
        <div style={{ display: 'flex', justifyContent: 'space-evenly', gap: '20px', marginTop: '10px' }}>
          <div style={{ width: '100%', display: 'flex', gap: '10px' }}>
            <IdolProfile
              size="98px"
              profileImg={IdolImg}
              alt="이미지1"
              idolName="이름"
              idolGroup="그룹"
              isSelect={false}
              isDelete={false}
            />
            <IdolProfile
              size="98px"
              profileImg={IdolImg}
              alt="이미지1"
              idolName="이름"
              idolGroup="그룹"
              isSelect={true}
              isDelete={false}
            />
            <IdolProfile
              size="98px"
              profileImg={IdolImg}
              alt="이미지1"
              idolName="이름"
              idolGroup="그룹"
              isDelete={true}
            />
          </div>
          <table style={{ width: '600px' }}>
            <thead>
              <tr>
                <th>prop</th>
                <th>기본 설정 값</th>
                <th>설명</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>size</th>
                <td>'70px'</td>
                <td>px 값 지정</td>
              </tr>
              <tr>
                <th>profileImg</th>
                <td>값 지정 </td>
                <td>import한 이미지 주소 값</td>
              </tr>
              <tr>
                <th>alt</th>
                <td>'idol profile'</td>
                <td>이미지에 대한 설명</td>
              </tr>
              <tr>
                <th>idolName</th>
                <td>값 지정</td>
                <td>아이돌 이름</td>
              </tr>
              <tr>
                <th>idolGroup</th>
                <td>값 지정</td>
                <td>아이돌 그룹</td>
              </tr>
              <tr>
                <th>isSelect</th>
                <td>false</td>
                <td>true : 선택 값</td>
              </tr>
              <tr>
                <th>isDelete</th>
                <td>false</td>
                <td>true : 삭제 값</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <hr style={{ margin: '30px 0', border: 'none', borderTop: '1px solid var(--color-gray-67666E)' }} />
      {/* 크레딧 인풋 스타일 */}
      <div>
        <h2>크레딧 인풋 스타일 </h2>
        <p>공통은 아닌데 전에 만들어버려서... 필요하면 쓰세요!</p>
        <div style={{ display: 'flex', justifyContent: 'space-evenly', gap: '20px', marginTop: '10px' }}>
          <input type="text" className="input__credit" placeholder="크레딧 입력" />
        </div>
      </div>
    </div>
  );
}

export default Common;
