import React, { useEffect, useState } from 'react'
import db from './../../data/db'
import Home from '@/components/modules/Home'

function index() {

  const [searchValue, setSearchValue] = useState('');
  const [homes, setHomes] = useState([...db.homes])
  const [orderedHomes, setOrderedHomes] = useState([])
  const [status, setStatus] = useState('default')

  useEffect(() => {
    switch (status) {
      case 'money': {
        const newHomes = [...homes].sort((a,b) => a.price -b.price)
        setHomes(newHomes)
        break ;
      }
      case 'room': {
        const newHomes = [...homes].sort((a,b) => a.roomCount -b.roomCount)
        setHomes(newHomes)
        break ;
      }
      case 'meterage': {
        const newHomes = [...homes].sort((a,b) => a.meterage -b.meterage)
        setHomes(newHomes)
        break ;
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

  return (
    <div className="home-section" id="houses">
      <div className="home-filter-search">
        <div className="home-filter">
          <select defaultValue={status} onChange={(e) => setStatus(e.target.value)}>
            <option value="-1" selected>
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
              {homes.map((home) => (
                <Home key={home.id} {...home} />
              ))}
            </>
          )
        }

      </div>

      <ul className="pagination__list">
        <li className="pagination__item">
          <a href="#" className=""></a>
        </li>
        <li className="pagination__item">
          <a href="#" className="">
            2
          </a>
        </li>
        <li className="pagination__item active">
          <a href="#" className="">
            1
          </a>
        </li>
      </ul>
    </div>
  )
}

export default index