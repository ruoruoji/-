import { DefaultFooter } from '@ant-design/pro-layout';
import { GithubOutlined } from '@ant-design/icons';
import React from 'react';

export default () => (
  <DefaultFooter
    copyright="2020 孙权毕业设计作品"
    links={[
      // {
      //   key: 'Ant Design Pro',
      //   title: 'Ant Design Pro',
      //   href: 'https://pro.ant.design',
      //   blankTarget: true,
      // },
      {
        key: 'github',
        title: <GithubOutlined />,
        href: 'https://github.com/ruoruoji',
        blankTarget: true,
      },
      // {
      //   key: 'Ant Design',
      //   title: 'Ant Design',
      //   href: 'https://ant.design',
      //   blankTarget: true,
      // },
    ]}
  />
);
