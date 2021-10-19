import React from 'react'
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
// import BritishColumbia from '../images.BritishColumbia';

import CardContent from '@material-ui/core/CardContent';
import { IconButton } from '@material-ui/core';
import { DeleteOutlined, Favorite } from '@material-ui/icons';

export default function ProvinceCard({pro}){
    return(
        <div>
            {pro.province}
            {pro.image}.jpg
            {/* <Card>
                <CardHeader
                title= {pro.province}
                image={pro.image}
                />
                <img src={BritishColumbia}> </img>
            </Card> */}

        </div>
    )
}