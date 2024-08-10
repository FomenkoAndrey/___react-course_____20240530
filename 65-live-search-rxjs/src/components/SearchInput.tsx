import { forwardRef } from 'react'

const SearchInput = forwardRef<HTMLInputElement>((_, ref) => (
  <div className="row">
    <div className="col-6">
      <div className="mb-3">
        <label className="form-label" htmlFor="search">
          Пошук
        </label>
        <input className="form-control" id="search" type="search" placeholder="Почніть вводити текст..." ref={ref} />
      </div>
    </div>
  </div>
))

export default SearchInput
