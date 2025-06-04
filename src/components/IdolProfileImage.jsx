function IdolProfileImage({ size = '70px', img, alt = 'idol profile', isSelect = false, className }) {
  const imgAlt = typeof alt !== 'string' || alt.trim() === '' ? 'idol profile' : alt;

  return (
    <div
      className={`${isSelect ? 'idol__img--select' : ''} ${className} idol__img`}
      style={{ width: size, height: size }}
    >
      <img src={img} alt={imgAlt} />
    </div>
  );
}

export default IdolProfileImage;
