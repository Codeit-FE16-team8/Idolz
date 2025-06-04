import Button from './Button';

function IdolSponsor({ img, alt = '후원 조공 이미지 베너', subTitle, title, credit, dDay, barProgress = '50' }) {
  return (
    <div className="idol__sponsor">
      <div className="sponsor__imgBtn">
        <div className="sponsor__img">
          <img src={img} alt={alt} />
        </div>
        <Button width="90%" ariaLabel="후원하기">
          후원하기
        </Button>
      </div>
      <div className="sponsor__Info">
        <p className="sponsor__subTitle">{subTitle}</p>
        <h3 className="sponsor__title">{title}</h3>
      </div>
      <div className="sponsor__status">
        <span className="sponsor__credit">{credit.toLocaleString()}</span>
        <span className="sponsor__days">{dDay}</span>
      </div>
      <div className="sponsor__bar" style={{ '--barPer': `${barProgress}%` }}></div>
    </div>
  );
}

export default IdolSponsor;
