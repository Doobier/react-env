import React from 'react';
import PropTypes from 'prop-types';
import {Spin} from 'antd';

const HotLoading = ({isLoading, err}) => {
  if(isLoading){
    return <Spin />
  }else if(err){
    return <div>抱歉，加载当前页面出现了错误🙅</div>
  }
  return null;
}

HotLoading.propTypes = {
  isLoading: PropTypes.bool,
  err: PropTypes.string,
}

export default HotLoading;