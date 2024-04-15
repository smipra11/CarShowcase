import { CarProps } from "@/types";

export async function FetchCars() {
const headers = {
    
        'X-RapidAPI-Key': '978f2fb7e7msh5f7c7cd4d28631dp168e74jsnbb2ad1045db9',
        'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
    }

const response = await fetch(`https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla`,{headers:headers})

const result = response.json();
return result
}

export const generateCarImageUrl = (car: CarProps, angle?: string) => {
    const url = new URL("https://cdn.imagin.studio/getimage");
    const { make, model, year } = car;
  
    url.searchParams.append('customer', 'hrjavascript-mastery');
    url.searchParams.append('make', make);
    url.searchParams.append('modelFamily', model.split(" ")[0]);
    url.searchParams.append('zoomType', 'fullscreen');
    url.searchParams.append('modelYear', `${year}`);
    // url.searchParams.append('zoomLevel', zoomLevel);
    //url.searchParams.append('angle', `${angle}`);
  console.log(url)
    return `${url}`;
  } 