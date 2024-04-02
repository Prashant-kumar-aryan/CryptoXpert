import React from 'react';
import { useState } from 'react';

const Faq= () => { 
    const [selected,setSelected]= useState(null)
    const toggle = (i) => {
      if (selected === i){
        return setSelected(null)
  
      }
      setSelected(i)
    }
    return(
      <div className='wrapper1'>
          <div className='accordian1'>
            {data.map((item,i) => (
               <div className='item99'>
                   <div className='title12' onClick={()=> toggle(i)}>
                      <h46>{item.question}</h46>
                      <span>{selected ===i ? '-' : '+'}</span>
                   </div>
                <div className={
                  selected === i ? 'show7' : 'content90'}>{item.answer}</div>
               </div> 
            ))}
          </div>
  
        </div>
  
    )
  }
  const data= [
    {
      question: 'What is cryptocurrency?',
      answer: 'Cryptocurrency is a digital form of currency that uses cryptographic security to conduct trusted transactions. It operates on a decentralized network, using blockchain technology to document all transactions.',
    },
    {
      question: 'How does a cryptocurrency like Bitcoin work?',
      answer: 'Bitcoin and other cryptocurrencies work using public-key cryptography, where two different types of keys (public and private) are used in pairs to facilitate transactions. The public key is used for identification and is publicly visible, while the private key is used for authentication and encryption, and is kept secret.',
    },
    {
      question: 'Who controls the cryptocurrency?',
      answer: 'Cryptocurrencies are decentralized and do not have a single entity in control. However, the creators or developers can set specific parameters, and users control the day-to-day operations in a distributed manner. The identity of the owners is anonymous, but there are ongoing efforts to introduce regulations to counter illegal activities.',
    },
    {
      question: 'Is investing in cryptocurrencies a good idea?',
      answer: 'Cryptocurrencies are known for their volatility, which can make them a risky investment. They do not generate cash flow like real currencies and their value can fluctuate significantly. Therefore, potential investors should carefully consider the risks involved.',
    },
    {
      question: 'How can I buy cryptocurrencies?',
      answer: 'You can purchase cryptocurrencies through a wallet, which is an online app for holding your crypto assets. You can create an account on a cryptocurrency exchange, transfer actual money, and then purchase cryptocurrencies like Ethereum or Bitcoin.',
    },
    {
      question: 'What is a cryptocurrency wallet?',
      answer: 'A cryptocurrency wallet is a platform for securely storing your digital assets. It stores the private keys to your cryptocurrency on the blockchain. There are two types of wallets: hot wallets, which are connected to the internet, and cold wallets, which store private keys in offline storage for added security.',
    }
  ];

  
  
  

export default Faq;