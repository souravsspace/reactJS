import React from 'react'

export default function About() {
  return (
    <main className='container' style={{minHeight:'calc(80vh - 5rem)', marginBlockStart:'5rem'}}>
      <details>
          <summary>Accordion 1</summary>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere cupiditate consectetur nobis, accusamus quidem cumque modi, saepe ducimus deserunt quae at odit molestias dolor dolore voluptatem, suscipit obcaecati nihil sint.</p>
      </details>
      <details open>
          <summary>Accordion 2</summary>
          <ul>
            <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi dolorum laborum iure nisi porro tempore, qui consectetur. Quidem quas eius cupiditate eveniet ipsam nesciunt quos ut iste repudiandae ipsum ab error, esse veniam accusamus maiores beatae blanditiis? Amet, accusamus minima.</li>
            <li>Culpa perferendis cupiditate et quibusdam ducimus recusandae similique dolores veritatis quis enim nisi nulla, vitae asperiores! Quibusdam debitis eum maxime explicabo blanditiis libero aliquid officia veritatis aliquam, necessitatibus voluptates quae provident labore obcaecati nobis quaerat quas non magni natus quod?</li>
          </ul>
      </details>
    </main>
  )
}
