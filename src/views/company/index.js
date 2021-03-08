import React from 'react';
import axios from 'axios';
import Page from 'src/components/Page';
import {
  makeStyles,
  Typography
} from '@material-ui/core';
import CardList from '../hot/cardLayout';
import { NavLink } from 'react-router-dom';
import './index.css';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.white,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3),
    paddingLeft: theme.spacing(2)
  },
  tabItemContainer: {
    height: '40px',
    lineHeight: '40px'
  },
  tabItem: {
    padding: '0 10px',
    color: 'black'
  },
  tabItemActive: {
    background: 'RGB(63,81,181)',
	color:'#FFF',
	padding:'4px 8px',
  }
}));
const CompanyView = () => {
  const classes = useStyles();
  let headData = [
    {
      title: '公司地点：',
      items: ['全国', '北京', '上海', '深圳', '广州', '杭州', '成都', '南京', '武汉', '西安', '厦门', '长沙', '苏州', '天津']
    }, {
      title: '融资阶段：',
      items: ['不限', '未融资', '天使轮', 'A轮', 'B轮', 'C轮', 'D轮及以上', '上市公司', '不需要融资']
    }, {
      title: '公司规模：',
      items: ['不限', '少于15人', '15-50人', '50-150人', '150-500人', '500-2000人', '2000人以上']
    }, {
      title: '行业领域：',
      items: ['不限', '移动互联网', '电商', '金融', '企业服务', '教育', '文娱|内容', '游戏', '消费生活', '硬件']
    }
  ];
  let handleClick = (e) => {
    let target = e.target;
    if (target.tagName !== 'A') return;
    let siblings = target.parentNode.children;
    for (let i = 1; i < siblings.length; i++) {
      siblings[i].classList.remove(classes.tabItemActive);
    }
    target.classList.add(classes.tabItemActive);
    let id = +location.search.split('=')[1];
    axios.get('url').then(r => {

    });
  };
  return (
    <Page
      className={classes.root}
      title='company list'
      onClick={handleClick.bind(this)}
    >
      {headData.map((i, idx) => (
        <div key={idx} className={classes.tabItemContainer}>
          <b>{i.title}&nbsp;</b>
          {i.items.map((i, idx2) => <NavLink to={'/findJob/companyList?id=' + (idx + 1) + idx2}
                                             className={[classes.tabItem, idx2 === 0 ? classes.tabItemActive : null].join(' ')}
                                             key={idx2}>{i}</NavLink>)}
        </div>
      ))}
      <CardList />
    </Page>);
};
export default CompanyView;
