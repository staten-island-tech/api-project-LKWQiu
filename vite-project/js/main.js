import '../css/style.css'
const Brawlstars = require('./brawlstars.js/index.js')
const token  = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6IjhkN2RlM2FjLTEwZjctNDBkOS1iNzE4LTlkMTRhZWU4NzVmOCIsImlhdCI6MTcwMjMwMjUwNiwic3ViIjoiZGV2ZWxvcGVyLzlkODg0OWVlLWYxYWMtMGRlOS1kZjhhLWYyMTQ2OTIxN2VmMyIsInNjb3BlcyI6WyJicmF3bHN0YXJzIl0sImxpbWl0cyI6W3sidGllciI6ImRldmVsb3Blci9zaWx2ZXIiLCJ0eXBlIjoidGhyb3R0bGluZyJ9LHsiY2lkcnMiOlsiMTY1LjE1NS4xNjQuMSJdLCJ0eXBlIjoiY2xpZW50In1dfQ.mebZxxaBsv8Ymn24lSZAE2HhLLjKivcm0SjSy5gtUJmOsiqNmSwSc7J_Jfdf9MR8pwCpBrLwCarQaQBr2bxoCQ" 
const client = new Brawlstars.Client(token)

(async () => {
    const player = await client.getPlayer("#PLAYERTAG")
    console.log(player.tag) //#PLAYERTAG
})
async function getData(client){
  try {
      const player = await client.getPlayer("#PLAYERTAG");
      if(player.status != 200) {
        console.log("works ig")
      }
      console.log(player)
      const data = await player.json();
      console.log(data)
  } catch (error) {
      console.log("NO WORK");
  }
}