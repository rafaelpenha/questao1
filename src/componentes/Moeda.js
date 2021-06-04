function Moeda(props){
    const faces = ["cara.jpeg","coroa.jpg"];

    const indice = props.indice;

    if (indice === -1) return null;
    else 

    return (
    <div className="w-64 bg-red-300 self-center mt-8">
             <img src={faces[props.indice]} alt="moeda"/>    
     </div>
    );

}
export default Moeda;