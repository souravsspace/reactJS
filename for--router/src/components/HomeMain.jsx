import React from 'react'

export default function home() {
  return (
    <div className='container' style={{marginBlock:'6rem'}}>
        <div className="grid">
          <div>
            <hgroup>
              <h1>What is reading a book?</h1>
              <h4>Five benefits of reading</h4>
            </hgroup>
              <ul>
                <li>Increase your vocabulary and comprehension skills. Reading strengthens your brain, helps you widen your vocabulary and aids in your ability to comprehend information. </li>
                <li>Reduce stress</li>
                <li>Help you prepare to sleep</li>
                <li>Prevents cognitive decline</li>
                <li>Might even help you live longer</li>
              </ul>
          </div>
          <img src="https://png.pngtree.com/element_our/20190531/ourlarge/pngtree-reading-a-book-studying-man-image_1309504.jpg"/>
        </div>
    </div>
  )
}
