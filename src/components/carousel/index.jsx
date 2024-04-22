import { useEffect, useState } from 'react';
import {
  Box,
  Image
} from '@chakra-ui/react';
import img1 from '../../assets/kid_1.png';
import img2 from '../../assets/kid_2.png';
import img3 from '../../assets/kid_3.png';
import img4 from '../../assets/kid_4.png';
import img5 from '../../assets/kid_5.png';

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [
    img1,
    img2,
    img3,
    img4,
    img5
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length])

  return (
    <Box 
      h={'100vh'} 
      overflow={'hidden'}
      display={'flex'}
      minW={0}
    >
      {
        images.map((image, index) => (
          <Image 
            key={index}
            src={image}
            minW={'100%'}
            transform={`translateX(-${currentSlide * 100}%)`}
            objectFit='cover'
            transition={'transform 0.5s ease-in-out'}
          />
        ))
      } 
    </Box>
  );
}

export default Carousel;