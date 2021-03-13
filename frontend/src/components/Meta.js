import React from 'react';
import { Helmet } from 'react-helmet';

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='title' property='og:title' content='Cart•Me' />
      <meta
        name='description'
        property='og:description'
        content={description}
      />
      <meta
        name='url'
        property='og:url'
        content='http://cart-me.herokuapp.com/'
      ></meta>
      <meta name='keywords' content={keywords} />
      <meta property='og:locale' content='en_US' />
      <meta property='og:type' content='website' />
      <meta
        name='image'
        property='og:image'
        content='http://cart-me.herokuapp.com/images/logo192.png'
      />
      <meta
        property='og:image:secure_url'
        content='http://cart-me.herokuapp.com/images/logo192.png'
      />
      <meta property='og:image:width' content='743' />
      <meta property='og:image:height' content='272' />
      <meta property='og:image:type' content='image/png' />
      <meta name='twitter:card' content='summary_large_image'></meta>
      <meta name='twitter:creator' content='@davidmcodes' />
      <meta name='twitter:title' content='Cart•Me'></meta>
      <meta name='twitter:description' content={description} />
      <meta
        name='twitter:image'
        content='http://cart-me.herokuapp.com/images/logo192.png'
      />
    </Helmet>
  );
};

Meta.defaultProps = {
  title: 'Cart•Me',
  keywords: 'shopping, electronics, home goods, covid supplies, ppe',
  description:
    "CartMe offers the best prices on all of your favorite brands. It's your cart, faster.",
};

export default Meta;
