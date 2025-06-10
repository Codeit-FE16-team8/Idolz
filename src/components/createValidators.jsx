//유효성 검사
export const createValidators = (refs) => ({
  email: (value) => {
    if (!value) return { isValid: false, message: '이메일을 입력해주세요.' };
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      return { isValid: false, message: '올바른 이메일 형식이 아닙니다.' };
    }
    return { isValid: true, message: '' };
  },
  password: (value) => {
    if (!value) return { isValid: false, message: '비밀번호를 입력해주세요.' };
    if (value.length < 8) {
      return { isValid: false, message: '비밀번호는 8자 이상이어야 합니다.' };
    }
    return { isValid: true, message: '' };
  },
  nickname: (value) => {
    if (!value) return { isValid: false, message: '닉네임을 입력해주세요.' };
    return { isValid: true, message: '' };
  },
  passwordConfirm: (value) => {
    if (value === refs.password.current.value) {
      return { isValid: false, message: '비밀번호가 일치하지 않습니다.' };
    }
    return { isValid: true, message: '' };
  },
});
export default createValidators;
