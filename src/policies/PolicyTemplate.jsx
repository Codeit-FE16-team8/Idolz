// Footer 연결 페이지 공통 컴포넌트
const PolicyTemplate = ({ title, description }) => {
  return (
    <main
      style={{
        backgroundColor: '#000',
        color: '#ddd',
        padding: '40px 20px',
        maxWidth: '720px',
        margin: '0 auto',
        lineHeight: '1.8',
        fontSize: '16px',
      }}
    >
      <h1
        style={{
          fontSize: '24px',
          color: '#fff',
          marginBottom: '24px',
          fontWeight: '700',
        }}
      >
        {title}
      </h1>
      <article
        style={{
          whiteSpace: 'pre-wrap',
        }}
      >
        {description || `${title}에 대한 안내 페이지입니다. 추후 상세 내용이 추가될 예정입니다.`}
      </article>
    </main>
  );
};

export default PolicyTemplate;
