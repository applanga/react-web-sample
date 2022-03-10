import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

const FooterNav = ({
  className,
  ...props
}) => {

  const classes = classNames(
    'footer-nav',
    className
  );

  return (
    <nav
      {...props}
      className={classes}
    >
      <ul className="list-reset">
        <li>
          <Link to="#0">
		  	<FormattedMessage
				id="contact-text"
				defaultMessage="Contact"
			/>
		  </Link>
        </li>
        <li>
          <Link to="#0">
		  	<FormattedMessage
				id="about-text"
				defaultMessage="About us"
			/>
		  </Link>
        </li>
        <li>
          <Link to="#0">
		  	<FormattedMessage
				id="faq-text"
				defaultMessage="FAQ's"
			/>
		  </Link>
        </li>
        <li>
          <Link to="#0">
		  	<FormattedMessage
				id="support-text"
				defaultMessage="Support"
			/>
		  </Link>
        </li>
      </ul>
    </nav>
  );
}

export default FooterNav;