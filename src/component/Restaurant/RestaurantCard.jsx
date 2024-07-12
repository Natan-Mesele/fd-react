import { Card, Chip, IconButton } from '@mui/material';
import React from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

function RestaurantCard({item}) {
  return (
    <Card className='m-5 w-[18rem]'>
      <div className={`${true ? 'cursor-pointer' : 'cursor-not-allowed'} relative`}>
        <img 
          className='w-full h-[10rem] rounded-t-md object-cover'
          src={item.images[0]} 
          alt="" 
        />
        <Chip
          size="small"
          className="absolute top-2 left-2"
          color={true ? 'success' : 'error'}
          label={true ? 'open' : 'closed'}
        />
      </div>
      <div className='p-4 textpart lg:flex w-full justify-between text-left'>
        <div className='space-y-1'>
          <p className='font-semibold text-lg'>{item.name}</p>
          <p className='text-gray-500 text-sm'>
            {item.description}
          </p>
        </div>
        <div>
          <IconButton>
            {true ? <FavoriteIcon /> : <FavoriteBorderIcon />}
          </IconButton>
        </div>
      </div>
    </Card>
  )
}

export default RestaurantCard




