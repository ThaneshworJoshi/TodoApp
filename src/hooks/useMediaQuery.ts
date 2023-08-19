/* 
xs, extra-small: 0px
sm, small: 600px
md, medium: 900px
lg, large: 1200px
xl, extra-large: 1536px 
*/

import { useMediaQuery as useMuiMediaQuery, useTheme } from '@mui/material'

/**
 * A custom hook that provides a set of media query flags based on Material-UI theme breakpoints.
 * Helps to determine the current screen size category.
 * @returns {Object} Media query flags for different screen size categories.
 *   - isMobile: True if the screen size is within the 'md' breakpoint or smaller.
 *   - isSmallMobile: True if the screen size is within the 'sm' breakpoint or smaller.
 *   - isLargeMobile: True if the screen size is within the range of 'sm' to 'md' breakpoints.
 *   - isTablet: True if the screen size is within the range of 'md' to 'lg' breakpoints.
 */
export const useMediaQuery = () => {
  const theme = useTheme()
  const isSmallMobile = useMuiMediaQuery(theme.breakpoints.down('sm'))
  const isLargeMobile = useMuiMediaQuery(theme.breakpoints.between('sm', 'md'))
  const isMobile = useMuiMediaQuery(theme.breakpoints.down('md'))
  const isTablet = useMuiMediaQuery(theme.breakpoints.between('md', 'lg'))

  return {
    isMobile,
    isSmallMobile,
    isLargeMobile,
    isTablet,
  }
}
