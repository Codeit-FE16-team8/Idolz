function Button({
  height = 'large',
  width = '100%',
  radius = 'xs',
  isDisabled = false,
  icon = false,
  alt = 'icon',
  iconGap = '4px',
  ariaLabel = '버튼',
  onClick,
  children,
}) {
  const btnHeight = typeof height !== 'string' || height.trim() === '' ? 'large' : height;
  const btnAlt = typeof alt !== 'string' || alt.trim() === '' ? 'icon' : alt;
  const borderRadiusVar = `var(--border-radius-${radius})`;

  return (
    <button
      className={`btn btn--color btn--${btnHeight}`}
      style={{ width, borderRadius: borderRadiusVar }}
      disabled={isDisabled}
      aria-label={ariaLabel}
      onClick={onClick}
    >
      {icon ? (
        <>
          <img src={icon} alt={btnAlt} style={{ paddingRight: iconGap }} />
          {children}
        </>
      ) : (
        children
      )}
    </button>
  );
}

export default Button;
