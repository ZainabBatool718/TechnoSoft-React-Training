

const App = () => {

  const pageScrolling= (elem) => {
    console.log(' page scrolling....');
  }

 /* function btnClicked(){
    console.log('button is clicked');
  }*/

  /*function inputChanging(){
    console.log('User is Typing');
  }*/
  return (
   /* <div>
      <h1>Hello Guys</h1>
      <button onClick= {btnClicked}> Click Here </button>
      <button onClick={btnClicked}>explore this</button>
      </div>*/
     /* <div>
        <input onChange={inputChanging} type='text' placeholder="Enter Name"/>
      </div>*/
     /* <div>
        <input
        onChange={function (elem){
          console.log(elem.target.value);
        }}
        type="text"
        placeholder='Enter Name'
        />
      </div>*/
      <div onWheel= {(elem)=>{
        pageScrolling(elem.deltaY)
      }
      }>
        <div>className="page1"</div>
        <div>className="page2"</div>
        <div>className="page3"</div>

      </div>
  )
}

export default App