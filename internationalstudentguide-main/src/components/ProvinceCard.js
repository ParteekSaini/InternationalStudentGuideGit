import React from 'react'
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';

import CardContent from '@material-ui/core/CardContent';
import { IconButton } from '@material-ui/core';
import { DeleteOutlined, Favorite } from '@material-ui/icons';

export default function ProvinceCard({pro}){
    return(
        <div>
            <Card>
                <CardHeader
                title= {pro.province}
                />
            </Card>
        </div>
    )
}