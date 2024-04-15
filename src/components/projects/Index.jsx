import React from 'react'
import Project from './Project'
import { abaib,restaurant,tictactoe,gpt3,hoobank } from './ImageExport'

const Projects = () => {
  return (
    <div className='container justify-content-center d-flex flex-wrap'>
        <Project        
        name="Payment Method named as HooBank UI/UX Website"
        description="A pixel-perfect ui/ux website made with react, tailwind css and html5. 
        It has many sections as full-fledged payment system website user experience. HooBank is a digital payment system 
        you can use to pay fast and efficiently."
        githubLink="https://github.com/SEWLESEWBIAZEN/pay-better.github.io"
        websiteLink="https://pay-better.netlify.app"
        imgUrl={hoobank}
        />
        <Project        
        name="Restaurant UI/UX Website"
        description="A pixel-perfect ui/ux website made with react, custom css and html5. It has many sections as full-fledged restaurant ui/ux website"
        githubLink="https://github.com/SEWLESEWBIAZEN/sew-restaurant.github.io"
        websiteLink="https://sew-restaurant.netlify.app"
        imgUrl={restaurant}
        />
         <Project        
        name="GPT-3 UI/UX website"
        description="A pixel-perfect ui/ux website made with react, custom css and html5. It has many sections as full-fledged gpt-3 ui/ux website.It has a complete graphics and images."
        githubLink="https://github.com/SEWLESEWBIAZEN/gpt3_sewdevs.github.io"
        websiteLink="https://gpt-three-3.netlify.app"
        imgUrl={gpt3}
        />

       <Project        
        name="Simple Tic Tac Toe Game "
        description="A tic tac toe game that has an AI component /O/. The Player win if it aligns along horizontal or vertical or diagonal , and checked those all boxes in row. It has undo buttons which linked directly to each round. It has Restart game button to restart the game. The popular VITE is used for compilation"
        githubLink="https://github.com/SEWLESEWBIAZEN/tic-tac-toe.github.io"
        websiteLink="https://vite-tic-tac-toe.netlify.app"
        imgUrl={tictactoe}
        />
       
        <Project        
        name="Amhara Bank Internet banking Demo website"
        description="A pixel-perfect ui/ux website made with react, Material UI and html5. It has many sections as full-fledged digital payment system user interface. It is user friendly and responsive for labtop, tablet or smart phones"
        githubLink="https://github.com/SEWLESEWBIAZEN/Amhara-Bank-Internet-Banking"
        websiteLink="https://abaib.netlify.app"
        imgUrl={abaib}
        />
       
    </div>
  )
}

export default Projects