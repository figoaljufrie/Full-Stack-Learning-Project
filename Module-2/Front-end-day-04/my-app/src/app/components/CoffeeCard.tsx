import { Card, CardContent, CardMedia, Typography } from '@mui/material'

interface ICoffee {
  id: number,
  name: string,
  description: string,
  price: number,
  image: string,
}

export default function CoffeeCard ({ id, name, description, price, image}: ICoffee) {
  return (
    <Card className='rounded-xl shadow-lg overflow-hidden'>
      <CardMedia
      component="img"
      height="160"
      image={image}
      alt={name}/>

      <CardContent>
        <Typography
        variant='h6'
        className='text-yellow-900 font-bold'
        >
          {description}
        </Typography>

        <Typography
        className='mt-2 font-semibold'>
          Rp.{price.toLocaleString()}
        </Typography>
      </CardContent>

    </Card>
  )
}