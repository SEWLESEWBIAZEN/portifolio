import React,{useState} from 'react'
import CardItem from './CardItem'
import img from '../../../assets/images/programmer_profile.png'
import Rimg from '../../../assets/images/React.jpg'
import Mimg from '../../../assets/images/MaterialUI.jpg'

const Card = () => {

  const [showReact,setShowReact]=useState(false);
  const [showMaterialUI,setShowMaterialUI]=useState(false);
  const [showBootstrap,setShowBootstrap]=useState(false);
  
  const cards=[
  {
    image:Rimg, 
    description:"Armed with React's magic, I breathe life into ideas, sculpting sleek interfaces that captivate and delight users. From performance optimization to pixel-perfect design, I pour my heart into every project, ensuring seamless interactions and lightning-fast load times. Collaborative by nature, I thrive in team environments, ",
    togglableText:" where creativity knows no bounds. Fuelled by curiosity, I'm always on the lookout for new technologies and trends, eager to expand my skills and push boundaries. Let's join forces and turn your vision into reality — together, we'll create something truly extraordinary!",
    overlayText:"React",
    show:showReact,
    githubLink:"https://github.com/SEWLESEWBIAZEN/UserrequestManagementPortal/tree/main/id-request-form"

    
  },
  {
    image:Mimg, 
    description:"As a seasoned frontend developer fluent in Material UI, I bring a wealth of expertise to the table. Leveraging the power of Material Design principles and the versatility of Material UI components, I specialize in crafting seamless and visually stunning user interfaces. With an eye for detail and a passion for pixel-perfect design, ",
    togglableText: "I meticulously customize Material UI themes and components to align with project requirements and branding guidelines. From responsive layouts to interactive elements, my proficiency in Material UI empowers me to deliver intuitive and engaging user experiences that captivate and delight. Whether it's optimizing performance or implementing complex UI features, I thrive on pushing the boundaries of what's possible with Material UI. Let's collaborate and elevate your project to new heights with the magic of Material UI craftsmanship." ,
    overlayText:"Material UI",
    show:showMaterialUI,
    githubLink:"https://github.com/SEWLESEWBIAZEN/Tour-MUI"
    
  },
  {
    image:img, 
    description:" With a mastery of Bootstrap, I bring a wealth of expertise to frontend development projects. Bootstrap isn't just a framework; it's my toolkit for transforming concepts into captivating user experiences. Leveraging Bootstrap's responsive grid system and extensive component library, I design and develop sleek interfaces that seamlessly ",
    togglableText:"adapt to various screen sizes and devices. From stylish navigation bars to interactive modals, my proficiency in Bootstrap allows me to create polished and user-friendly interfaces with ease. Whether it's customizing themes, optimizing performance, or ensuring cross-browser compatibility, I harness the full potential of Bootstrap to elevate every project I touch. Let's collaborate and bring your vision to life with the precision and finesse of Bootstrap craftsmanship.",
    overlayText:"Bootstrap and CSS",
    show:showBootstrap,
    githubLink:"https://github.com/SEWLESEWBIAZEN/Amhara-Bank-Internet-Banking"
    
  }
  
]
  return (
    <div className='container'>
        <CardItem 
        cards={cards} 
        setShowBootstrap={setShowBootstrap}
        setShowReact={setShowReact}
        setShowMaterialUI={setShowMaterialUI}
        showBootstrap={showBootstrap}
        showReact={showReact}
        showMaterialUI={showMaterialUI}
        />
    </div>
  )
}

export default Card