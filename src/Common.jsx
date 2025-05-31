import Img from './assets/images/Chart.png';

function Common() {
  return (
    <div style={{ padding: '15px' }}>
      <h1 style={{ padding: '10px' }}>공통 스타일링</h1>
      <hr />
      <h2 style={{ paddingTop: '30px' }}>root 스타일표</h2>
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
      <h2 style={{ paddingTop: '30px' }}>버튼 스타일</h2>
      <div style={{ display: 'flex', gap: '10px' }}>
        <div style={{ width: '300px', backgroundColor: '#eee', padding: '10px' }}>
          <button className="btn btn--color btn--large">LARGE BTN / width 40</button>
          <br />
          <br />
          <button className="btn btn--color btn--medium">MEDIUM BTN / width 32</button>
          <br />
          <br />
          <button className="btn btn--color btn--medium btn--img">
            <img src={Img} alt="Chart" />
            IMAGES
          </button>
          <br />
          <br />
          <button className="btn btn--color btn--medium" disabled>
            disabled
          </button>
        </div>
        <table>
          <thead>
            <tr>
              <th>className</th>
              <th>설명</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>btn</th>
              <td>기본 버튼 클라스</td>
            </tr>
            <tr>
              <th>
                btn--large <br /> btn--medium
              </th>
              <td>버튼의 높이 값</td>
            </tr>
            <tr>
              <th>btn--img</th>
              <td>버튼 안 이미지가 들어갈 경우</td>
            </tr>
            <tr>
              <th>disabled 속성</th>
              <td>비활성화</td>
            </tr>
          </tbody>
        </table>
      </div>
      <h2 style={{ paddingTop: '30px' }}>인풋(크레딧) 스타일</h2>
      <div style={{ width: '300px', backgroundColor: '#02000E', padding: '10px' }}>
        <input type="text" className="input__credit" placeholder="크레딧 입력" />
      </div>
      <h2 style={{ paddingTop: '30px' }}>라디오 스타일</h2>
      <div style={{ width: '300px', backgroundColor: '#eee', padding: '10px' }}>
        <div className="radio">
          <input type="radio" name="option" id="radio1" defaultChecked />
          <div className="label__inner">
            <label for="radio1">옵션 1</label>
            <span class="radio-icon"></span>
          </div>
        </div>
        <div className="radio">
          <input type="radio" name="option" id="radio2" />
          <div className="label__inner">
            <label for="radio2">옵션 2</label>
            <span class="radio-icon"></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Common;
