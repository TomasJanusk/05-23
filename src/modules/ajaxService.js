
const getData = async () => {
    try {
        let response = await fetch('https://api.meteo.lt/v1/places/kaunas/forecasts/long-term');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        let data = await response.json();
        let {forecastTimestamps} = data;
        forecastTimestamps = forecastTimestamps.filter((temp)=>{
            return temp.forecastTimeUtc === '2024-05-23 11:00:00'
        })
        console.log(forecastTimestamps);


    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

function Items(id, name, price){
    this.id = id; 
    this.name = name;
    this.price = price
}
 





export default getData


