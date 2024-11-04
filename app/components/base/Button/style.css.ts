import { style } from '@vanilla-extract/css';

export const button = style({
  padding: '10px 20px',
  borderRadius: 4,
  backgroundColor: 'black',
  color: 'white',
  border: 'none',
  cursor: 'pointer',
  transition: 'background-color 0.3s',
  ':hover': {
    backgroundColor: 'gray',
  },
});