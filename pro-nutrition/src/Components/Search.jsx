import React from 'react'
// import "./../App.css"
export default function Search(props) {
  return (
    <div className='search'>
        <form>
            <input placeholder='Search here!' type="text" name='search' id='search-box' onChange={(e)=>{
                props.setSearch(e.target.value)
            }}/>
        </form>
    </div>
  )
}
