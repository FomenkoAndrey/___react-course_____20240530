import { ProductInterface } from '../types/Product.interface.ts'
import { FormEvent, useState } from 'react'
import { INITIAL_PRODUCT, PRODUCT_CATEGORIES } from '../data/mockData.ts'

interface ProductFormPropsInterface {
  onSubmit: (product: Partial<ProductInterface>) => void
}

const ProductForm = ({ onSubmit }: ProductFormPropsInterface) => {
  const [name, setName] = useState(INITIAL_PRODUCT.name)
  const [description, setDescription] = useState(INITIAL_PRODUCT.description)
  const [price, setPrice] = useState(INITIAL_PRODUCT.price)
  const [image, setImage] = useState(INITIAL_PRODUCT.image)
  const [category, setCategory] = useState(INITIAL_PRODUCT.category)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()

    onSubmit({ name, description, price, image, category })

    // setId('')
    // setName('')
    // setDescription()
    // setPrice()
    // setImage()
    // setCategory()
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label className="form-label" htmlFor="name">
          Name:
        </label>
        <input
          className="form-control"
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Product name..."
          required
        />
      </div>

      <div className="form-group">
        <label className="form-label" htmlFor="description">
          Description:
        </label>
        <textarea
          className="form-control"
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Product description..."
          required
        />
      </div>

      <div className="form-group">
        <label className="form-label" htmlFor="price">
          Price:
        </label>
        <input
          className="form-control"
          id="name"
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder="Price..."
          required
        />
      </div>

      <div className="form-group">
        <label className="form-label" htmlFor="image">
          Image:
        </label>
        <input
          className="form-control"
          id="image"
          type="text"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          placeholder="Image URL..."
          required
        />
      </div>

      <div className="form-group">
        <label className="form-label" htmlFor="category">
          Category:
        </label>
        <select
          className="form-control"
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        >
          <option value="">Please select a category...</option>
          {PRODUCT_CATEGORIES.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      <div className="form-group">
        <button className="form-button" type="submit">
          Submit
        </button>
      </div>
    </form>
  )
}

export default ProductForm
