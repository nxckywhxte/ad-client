import { ItemList } from '@/components/sections/catalog/list/ItemList'

export const CatalogSection = ({ openModal }) => {
  return (
    <section className='body-font'>
      <ItemList openModal={openModal}></ItemList>
    </section>
  )
}
