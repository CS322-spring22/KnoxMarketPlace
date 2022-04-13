import React from 'react'
import PhoneIphoneOutlinedIcon from '@mui/icons-material/PhoneIphoneOutlined';
import WeekendOutlinedIcon from '@mui/icons-material/WeekendOutlined';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import AccessibilityOutlinedIcon from '@mui/icons-material/AccessibilityOutlined';
import WatchOutlinedIcon from '@mui/icons-material/WatchOutlined';
import RestaurantOutlinedIcon from '@mui/icons-material/RestaurantOutlined';
import PaletteOutlinedIcon from '@mui/icons-material/PaletteOutlined';
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';

export const SidebarData = [
    {
        title: "Electronics",
        icon: <PhoneIphoneOutlinedIcon />,
        link: "/Electronics"
    },
    {
        title: "Furniture",
        icon: <WeekendOutlinedIcon />,
        link: "/Furniture"
    },
    {
        title: "Books",
        icon: <MenuBookIcon />,
        link: "/Books"
    },
    {
        title: "Clothing",
        icon: <AccessibilityOutlinedIcon />,
        link: "/Clothing"
    },
    {
        title: "Accessories",
        icon: <WatchOutlinedIcon />,
        link: "/Accessories"
    },
    {
        title: "Food",
        icon: <RestaurantOutlinedIcon />,
        link: "/Food"
    },
    {
        title: "Artwork",
        icon: <PaletteOutlinedIcon />,
        link: "/Artwork"
    },
    {
        title: "Others",
        icon: <AddCircleOutlinedIcon />,
        link: "/Others"
    },
]