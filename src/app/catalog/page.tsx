'use client'
import { useState } from 'react'
import { BaseLayout } from '@/components/base/layout/BaseLayout'
import { CatalogSection } from '@/components/sections/catalog/CatalogSection'
import { ItemModalDialog } from '@/components/sections/catalog/modal/ItemModalDialog'
import { ItemCardInterface } from '@/components/sections/catalog/card/item-card.interface'

export default function CatalogPage() {
  const [isOpen, setIsOpen] =
    useState<boolean>(false)
  const [modalData, setModalData] =
    useState<ItemCardInterface>(null)
  const openModal = ({ item }) => {
    setModalData(item)
    setIsOpen(true)
  }
  const closeModal = () => {
    setIsOpen(false)
  }

  return (
    <BaseLayout>
      <ItemModalDialog
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        item={modalData}
      />
      <CatalogSection openModal={openModal} />
    </BaseLayout>
  )
}
