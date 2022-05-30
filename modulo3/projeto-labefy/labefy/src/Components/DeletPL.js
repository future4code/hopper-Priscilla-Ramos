// import React from "react";
// import axios from "axios";

// export default class DeletPL extends React.Component {

//     state={
//         resposta: []
//     }


//     //deleta da API//

//     deletaPL = async () =>{

//         const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.id}` //tem que ver pra puxar id//
//         try{
//             const response = await axios.get(url, {
//                 headers: {
//                     Authorization: "priscilla-lucena-hopper"
//                 }
//             }) 
//             this.setState ({resposta: response.data})
//             console.log(response.data)
//             alert ('Playlist excluída!')
//         } catch (error) {
//             console.log(error.response)
//             alert ('Erro: não foi possível deletar')
//         }
        
//     }

//     render () {

       

//         return(
//             <div>
//                 <h3>Delete</h3>
//             </div>
//         )
//     }
// }