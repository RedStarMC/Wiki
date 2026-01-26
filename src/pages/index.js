import React, { useMemo } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

/*
 * ========================================
 * Hero 背景图片配置
 * ========================================
 * 
 * 图片规格要求：
 * - 推荐尺寸：1920 x 800 像素
 * - 格式：JPG 或 PNG
 * - 存放位置：static/img/hero/
 */

// 默认图片池（全年显示）
const defaultImages = [
  '/img/hero/bg1.jpg',
  '/img/hero/bg2.jpg',
  '/img/hero/bg3.jpg',
  '/img/hero/bg4.png',
  '/img/hero/bg5.png',
];

/*
 * 特殊日期图片配置
 * 
 * 配置格式：
 * {
 *   check: (month, day) => boolean,  // 日期判断函数，month: 1-12, day: 1-31
 *   images: string[],                 // 该日期额外显示的图片路径数组
 * }
 * 
 * 注意：特殊日期的图片会与默认图片合并，而非替换
 */
const specialDates = [
  // 圣诞节：12月24日 - 12月26日
  {
    check: (month, day) => month === 12 && day >= 24 && day <= 26,
    images: [
      '/img/hero/xmas/xmas1.png',
      '/img/hero/xmas/xmas2.png',
    ],
  },
  // 愚人节：4月1日
  {
    check: (month, day) => month === 4 && day === 1,
    images: [
      '/img/hero/april/april1.png',
      '/img/hero/april/april2.png',
    ],
  },
  // 春节：1月1日 - 2月末（因春节日期每年不同，覆盖整个时间段）
  {
    check: (month, day) => month === 1 || month === 2,
    images: [
      '/img/hero/cny/cny1.png',
    ],
  },
];

/**
 * 获取当前日期可用的图片池
 * @returns {string[]} 图片路径数组
 */
function getHeroImages() {
  const now = new Date();
  const month = now.getMonth() + 1; // getMonth() 返回 0-11，需 +1
  const day = now.getDate();

  let images = [...defaultImages];

  // 检查所有特殊日期，符合条件则合并图片
  for (const special of specialDates) {
    if (special.check(month, day)) {
      images = [...images, ...special.images];
    }
  }

  return images;
}

/**
 * 首页 Hero 区域组件
 */
function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();

  // 随机选择一张图片（useMemo 确保页面生命周期内不变）
  const randomImage = useMemo(() => {
    const images = getHeroImages();
    return images[Math.floor(Math.random() * images.length)];
  }, []);

  return (
    <header
      className={clsx('hero', styles.heroBanner)}
      style={{ backgroundImage: `url(${randomImage})` }}
    >
      <div className="container">
        <h1 className={clsx('hero__title', styles.heroTitle)}>
          {siteConfig.title}
        </h1>
        <p className={clsx('hero__subtitle', styles.heroSubtitle)}>
          {siteConfig.tagline}
        </p>
        <div className={styles.buttons}>
          <Link
            className={clsx('button button--secondary button--lg', styles.heroButton)}
            to="/intro"
          >
            查看文档
          </Link>
          <Link
            className={clsx('button button--secondary button--lg', styles.heroButton)}
            to="/news"
          >
            最新动态
          </Link>
        </div>
      </div>
      {/* 右下角查看原图按钮 */}
      <a
        href={randomImage}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.previewButton}
        title="查看原图"
      >
        查看原图
      </a>
    </header>
  );
}

/**
 * 首页主组件
 */
export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}