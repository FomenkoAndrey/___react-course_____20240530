import { FC } from 'react'
import { ResultProps } from '../types/ResultProps.ts'

const Results: FC<ResultProps> = ({ results }) => {
  return (
    <div className="row row-cols-1 row-cols-md-3 g-4">
      {results.map((item) => (
        <div className="col d-flex" key={item.id}>
          <div className="card mb-3 h-100">
            <img className="card-img-top" src={item.avatarUrl} alt={item.name} />
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">{item.fullName}</h5>
              <p className="card-text flex-grow-1">{item.description}</p>
              <div className="mt-auto">
                <a className="btn btn-primary w-100" href={item.url} target="_blank">
                  Learn more
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Results
