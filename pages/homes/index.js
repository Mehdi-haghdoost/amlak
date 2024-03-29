import React, { useEffect, useState } from 'react'
import db from './../../data/db'
import Home from '@/components/modules/Home'

function index() {

  const [searchValue, setSearchValue] = useState('');
  const [homes, setHomes] = useState([...db.homes])
  const [status, setStatus] = useState('-1')
  const [page, setPage] = useState(1)

  const [orderedHomes, setOrderedHomes] = useState(null)


  useEffect(() => {
    switch (status) {
      case 'money': {
        const newHomes = [...homes].sort((a, b) => a.price - b.price)
        setHomes(newHomes)
        setOrderedHomes(newHomes)

        console.log('newHomes =>', newHomes);
        break;
      }
      case 'room': {
        const newHomes = [...homes].sort((a, b) => a.roomCount - b.roomCount)
        setHomes(newHomes)
        setOrderedHomes(newHomes)

        break;
      }
      case 'meterage': {
        const newHomes = [...homes].sort((a, b) => a.meterage - b.meterage)
        setHomes(newHomes)
        setOrderedHomes(newHomes)

        break;
      }
      default: {
        setHomes([...db.homes])

      }
    }

  }, [status])

  useEffect(() => {
    const newHomes = db.homes.filter(home => home.title.includes(searchValue))
    setHomes(newHomes)

  }, [searchValue])

  const paginateHandler = (event, page) => {
    event.preventDefault();
    setPage(page)

    let pageSize = 3
    let endIndex = pageSize * page
    console.log('endIndex =>', endIndex);

    let startIndex = endIndex - pageSize
    console.log('startIndex =>', startIndex);

    let arr = orderedHomes.slice(startIndex, endIndex)
    console.log('arr =>', arr);

    setHomes(arr)

  }



  return (
    <div className="home-section" id="houses">
      <div className="home-filter-search">
        <div className="home-filter">
          <select defaultValue={status} onChange={(e) => setStatus(e.target.value)}>
            <option value="-1">
              انتخاب کنید
            </option>
            <option value="money" >بر اساس قیمت</option>
            <option value="room">بر اساس تعداد اتاق</option>
            <option value="title">بر اساس نام</option>
            <option value="meterage">بر اساس متراژ</option>
          </select>
        </div>
        <div className="home-search">
          <input type="text" value={searchValue} onChange={(event) => setSearchValue(event.target.value)} placeholder="جستجو کنید" />
        </div>
      </div>

      <div className="homes">
        {
          homes.length === 0 ? (
            <div className='alert-warning'>هیچ ملکی یافت نشد</div>
          ) : (
            <>
              {homes.slice(0, 3).map((home) => (
                <Home key={home.id} {...home} />
              ))}
            </>
          )
        }

      </div>

      <ul className="pagination__list">
        {
          Array.from({ length: Math.ceil(db.homes.length / 3) }).map((item, index) => (
            <li className={index + 1 === page ? "pagination__item active" : "pagination__item"}
              onClick={(event) => paginateHandler(event, index + 1)}
              key={index + 1}
            >
              <a href="#"
                className="">
                {index + 1}
              </a>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default index