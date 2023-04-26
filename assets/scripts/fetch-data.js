export default async function fetchData(){
  try{
    const jsonData = await fetch("./assets/scripts/data.json");
    const data = await jsonData.json();
    let list = data.jobListings;
    return list;
  }
  catch(err){
    console.log(err);
  }
}

