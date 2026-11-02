import { style } from '@vanilla-extract/css';
import { vars } from '../../styles/theme.css';

export const topBar = style({
    height: vars.size.topbarHeight,
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    paddingLeft: vars.spacing.xl,
    gap: vars.spacing.lg,
});

export const avatar = style({
    width: '49px',
    height: '49px',
    borderRadius: '50%',
});

export const text = style({
    fontSize: vars.fontSize.sm,
    fontWeight: vars.fontWeight.medium,
});
