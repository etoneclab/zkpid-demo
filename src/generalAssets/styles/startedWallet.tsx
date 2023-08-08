import { makeStyles } from '@mui/styles'
import { useTheme } from '@mui/material/styles'

const useStyles = makeStyles((theme) => ({
  wallet: {
    display: 'flex',
    width: '347px',
    height: '674px',
    padding: useTheme().spacing(5, 8, 1, 5),
    flexDirection: 'column',
    // alignItems: "center",
    gap: '37px',
    borderRadius: '16px',
    border: '1px solid var(--primary-20, rgba(222, 225, 248, 0.20))',
    background: 'var(--primary-20, rgba(222, 225, 248, 0.20))',
    boxShadow: '4px 4px 4px 0px rgba(0, 0, 0, 0.05)',
    flexShrink: '0'
  },

  menu: {
    display: 'flex',
    width: '306px',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  subMenu: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: '6px',
    textAlign: 'center'
  },
  title: {
    display: 'flex',
    width: '201px',
    height: '78px',
    flexDirection: 'column',
    justifyContent: 'center',
    flexShrink: '0',
    textAlign: 'center'
  },
  tabMenu: {
    display: 'flex',
    width: '307px',
    height: '31px',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexShrink: '0',
    borderBottom: '1px solid black'
  },
  active: {
    color: 'var(--00-on-surface-high-emphasis, #08141E)',
    textAlign: 'center',

    fontSize: '16px',
    fontStyle: 'normal',
    fontWeight: 600,

    letterSpacing: '1.25px',

    width: '64px',
    borderBottom: '5px solid black'
  },
  titles: { display: 'inline-flex', alignItems: 'flex-start', gap: '24px' },
  elipsTitle: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    alignSelf: 'stretch'
  },

  history: {
    width: '315px',
    height: '78px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderRadius: '16px',
    border: '0.5px solid var(--primary-100, #DEE1F8)',
    background: '#FFF',
    boxShadow: '3px 3px 5px 1px rgba(34, 67, 78, 0.08)'
  }
}))
export default useStyles
