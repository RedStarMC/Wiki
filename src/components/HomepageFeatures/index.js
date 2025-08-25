import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '永久公益',
    Svg: require('@site/static/img/undraw_wenjian.svg').default,
    description: (
      <>
        绝对不会圈走您的钱.
      </>
    ),
  },
  {
    title: '玩法多样',
    Svg: require('@site/static/img/undraw_pingguo.svg').default,
    description: (
      <>
        有什么点子记得和我们说
      </>
    ),
  },
  {
    title: '社区优质',
    Svg: require('@site/static/img/undraw_snow.svg').default,
    description: (
      <>
        多说无益, 加入社区玩玩就知道了.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
