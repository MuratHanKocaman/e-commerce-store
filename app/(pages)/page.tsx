import getBillboard from '@/actions/get-billboard'
import getProducts from '@/actions/get-products'
import Billboard from '@/components/Billboard'
import Container from '@/components/Container'
import ProductList from '@/components/ProductList'
import React from 'react'

const Home = async() => {
  const billboard = await getBillboard("d84914d6-9e5d-41c0-860a-c132fbeebcbf")
  const products = await getProducts({isFeatured:true})

  return (
    <Container>
      <div className='pb-10'>

        <Billboard data={billboard}/>



      </div>

      <div className='flex flex-col gap-3 px-4 '>

        <ProductList title='Featured Products' items={products}></ProductList>


      </div>





    </Container>
  )
}

export default Home