const color = {
  primary: '#035943',
  secondary: '#68CAA2',
  tertiary: '#686FCA',
  gray: '#F9F6FD',
  regularGray: '#868482',
  lightGray: '#aeadac',
  paleGray: '#d7d6d5',
  light: '#fff',
  placeholder: '#eee',
  danger: '#F32013',
};

export const headers = (contentType, token) => ({
  headers: {
    'Content-Type': contentType,
    Authorization: 'Bearer ' + token,
  },
});

export default color;
