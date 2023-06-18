import { itemCardData } from '@/components/sections/catalog/card/item-card-data'
import { ItemCard } from '@/components/sections/catalog/card/ItemCard'

export const ItemList = ({ openModal }) => {
  return (
    <div className='m-4 flex flex-wrap justify-center gap-4'>
      {itemCardData.map((item, idx) => (
        <ItemCard
          key={idx}
          item={item}
          openModal={openModal}
        />
      ))}
    </div>
  )
}
