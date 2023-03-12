import axios from 'axios';

export const markersFetcher = async (
  southWest: number[],
  northEast: number[]
) => {
  const response = await axios.get(
    `https://api.waqi.info/v2/map/bounds?latlng=${southWest},${northEast}&networks=all&token=b4a90c69db861da6fd209f61dcbf5d8f1b874f57`
  );
  const data = response.data;
  console.log(data);
  return data;
};

export const getHistoricData = async (uid: string) => {
  const response = await axios.get(
    `https://api.waqi.info/api/attsse/${uid}/yd.json`
  );
  const data = response.data;

  console.log(data);
  return data;
};

// ????? new EventSource ?????

// token
// b4a90c69db861da6fd209f61dcbf5d8f1b874f57

// HISTORICAL DATA ---> different fetched data :
// SAMPLE --> SSE - stream of server-sent or 'EventSource' data

// event: debug
// data: "Fetching 2023-P3"

// event: data
// data: {"msg":{"now":"2023-03-12T07:01:04Z","st":466008,"ps":{"no2":"1|0QCgfBG2cBJic","o3":"1VfAMdcGAabFa"},"dh":24,"time":{"span":["2023-03-12T00:00:00Z","2023-03-12T00:00:00Z"]},"meta":{"si":{"sources":[{"name":"Citizen Weather Observer Program (CWOP/APRS)","url":"http://wxqa.com/","pols":["weather"],"logo":""},{"name":"Regional Inspectorate for Environmental Protection in Warsaw (Wojewódzki Inspektorat Ochrony Środowiska w Warszawie)","url":"http://wios.warszawa.pl/","pols":null,"logo":"poland-wios-warszawa.png"},{"name":"Główny inspektorat ochrony środowiska","url":"http://powietrze.gios.gov.pl/","pols":null,"logo":"poland-wios-national.png"}],"city":{"name":"PL:Mazowieckie/Warszawa/Targówek","idx":3391},"timezone":"1.00"},"dt":"0ms"}},"status":"ok","cached":"2h44m3.804564106s"}

// two types of events = debug & data
// debug - some sort of logging or diagnostic information
// data - actual data being sent from the server to client
