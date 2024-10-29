function approvedResolution(width,height){
    if(width == 1280 && height == 720){
        return 'HD';
    }else if(width == 1920 && height == 1080){
        return 'FHD';
    }else if(width == 2560 && height == 1440){
        return 'WQHD';
    }else if(width == 3840 && height == 2160){
        return '4K';
    }else if(width == 7680 && height == 4320){
        return '8K';
    }else{
        return 'Resolucion no encontrada';
    }
}
let test = approvedResolution(1920,1080);
console.log(test);