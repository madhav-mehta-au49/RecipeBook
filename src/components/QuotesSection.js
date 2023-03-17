import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons'

function QuotesSection() {
  return (
    <div className='section quote'>
      <p className='quote-text'><FontAwesomeIcon icon={faQuoteLeft}/>Food can be very transformational, and it can be more than just about a dish. That’s what happened to me when I first went to France. I fell in love. And if you fall in love, well, then everything is easy.</p>
      <p className='quote-author'>– Alice Waters</p>
      <br/>
      <p className='quote-text'><FontAwesomeIcon icon={faQuoteLeft}/>Food brings people together on many different levels. It’s nourishment of the soul and body; it’s truly love.</p>
      <p className='quote-author'>– Giada De Laurentiis</p>
      <br/>
      <p className='quote-text'><FontAwesomeIcon icon={faQuoteLeft}/>Truly, love is delightful and pleasant food, supplying, as it does, rest to the weary, strength to the weak, and joy to the sorrowful. It in fact renders the yoke of truth easy and its burden light.</p>
      <p className='quote-author'>– Saint Bernard</p>
    </div>
  )
}

export default QuotesSection
