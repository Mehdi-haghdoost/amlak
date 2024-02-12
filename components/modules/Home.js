import Link from 'next/link';
import React from 'react'
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDollarSign, faExpand, faHeart, faMapMarked, faUser } from '@fortawesome/free-solid-svg-icons';

config.autoAddCss = false;

function Home({ title, id, roomCount, img, price, meterage }) {
  return (
    <div className="card">
      <img src={img} alt="House 6" className="card__img" />
      <h5 className="card__title">{title}</h5>
      <span className="card__like">
        {/* <i className="fa fa-heart"></i> */}
        <FontAwesomeIcon
          icon={faHeart}
        />
      </span>
      <div className="card__details">
        <span className="">
          {/* <i className="fa fa-map-marker card__icon"></i> */}
          <FontAwesomeIcon
            icon={faMapMarked}
          />
        </span>
        <p className="card__text">مالدیو</p>
        <span className="">
          {/* <i className="fa fa-user card__icon"></i> */}
          <FontAwesomeIcon
            icon={faUser}
          />
        </span>
        <p className="card__text">{roomCount} اتاق</p>
        <span className="">
          {/* <i className="fa fa-expand card__icon"></i> */}
          <FontAwesomeIcon
            icon={faExpand}
          />
        </span>
        <p className="card__text">{meterage} متر مربع</p>
        <span className="">
          {/* <i className="fa fa-key card__icon"></i> */}
          <FontAwesomeIcon
            icon={faDollarSign}
          />
        </span>
        <p className="card__text">{price.toLocaleString()} میلیون تومان</p>
      </div>

      <Link href={`/homes/${id}`} className="btn btn-brown btn-card">
        مشاهده ملک
      </Link>
    </div>
  )
}

export default Home;