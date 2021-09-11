import React, { useState } from 'react'
import * as Space from 'react-spaces'
import { ViewPort } from 'react-spaces'
const ReactSpacesExample = () => {
   let [rSize, setRSize] = useState('20%');
   return (
      <Space.Fixed height={400}>
         <Space.Left size={rSize} as="aside" onMouseEnter={() => setRSize("50%")} onMouseLeave={() => setRSize("20%")} >
            <h1>Left</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error velit non nihil labore. Molestiae consequatur quas deleniti iusto maiores sunt suscipit esse architecto aut possimus, nihil animi laudantium alias deserunt. Ea perferendis exercitationem animi nostrum dolore quae magnam fugit nihil id quidem dolores vero corrupti eligendi quos assumenda, sunt delectus explicabo, inventore natus modi quisquam? Repellendus voluptas rem dicta qui vero, dolor tempore beatae tempora! Laudantium aut ipsam consectetur iste mollitia rerum repellat eius, minima libero, molestias esse obcaecati? Porro, eaque ipsum totam delectus fugiat, libero velit in provident asperiores, quod quisquam enim. Dolorem repudiandae magni ullam inventore quas sunt?</p>
         </Space.Left>
         <Space.Fill />
         <Space.Right size="20%" > right</Space.Right>
      </Space.Fixed>
   )
}

export default ReactSpacesExample
