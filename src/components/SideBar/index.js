
import React, {Component} from 'react'

import { IoSettingsOutline, IoPrintOutline } from "react-icons/io5";
import { ImSpinner11 } from "react-icons/im";
import { IoMdStopwatch, IoIosFunnel } from "react-icons/io";
import { FaFontAwesome, FaFonticons, FaLocationArrow } from "react-icons/fa"
import { CiSearch , CiImport} from "react-icons/ci";
import Navbar from '../Navbar'
import './index.css'
const items = [
    {id:1, name: "BID", font:"GoStopwatch"},
    {id:2, name: "POD", font:"MdOutlineInventory"},
    {id:3, name: "Vendor", font:"VscListUnordered"},
    {id:4, name: "User" , font:"MdEmojiTransportation"},
]

const itemsDown = [
  {id:1, name: "Settings", font:"GoStopwatch"},
  {id:2, name: "Profile", font:"MdOutlineInventory"},
  {id:3, name: "Contact Us", font:"VscListUnordered"},
  {id:4, name: "LogOuts" , font:"MdEmojiTransportation"},
]

const naviItem = [
    {id:1, name: "pending"},
    {id:2, name: "accept"},
    {id:3, name: "AWB created"},
    {id:4, name: "Ready ship"},
    {id:5, name: "Completed"},
    {id:6, name: "Cancle"}
]

const dummyItems = [
  {id:1, cusName: "sunder Yadav",orderNum: "#TKN2088181818",orderDate: 12/12/2023, city: "Mumbai", time: "7hour 20min", status: "pending", operation: "action",location: "Goodgaon to Mumbai", vehicleDetails: "Truck 20ft closeBody I", MaterialWeight: "4000kg", res: "4 View Results", staff:"Mohit 555554242422411" }, 
  {id:2,  cusName: "sunder Yadav",orderNum: "#TKN2088181818",orderDate: 12/12/2023, city: "Mumbai", time: "7hour 20min", status: "pending", operation: "action",location: "Goodgaon to Mumbai", vehicleDetails: "Truck 20ft closeBody I", MaterialWeight: "4000kg", res: "4 View Results", staff:"Mohit 555554242422411"} ,
  {id:3, cusName: "sunder Yadav",orderNum: "#TKN2088181818",orderDate: 12/12/2023, city: "Mumbai", time: "7hour 20min", status: "pending", operation: "action",location: "Goodgaon to Mumbai", vehicleDetails: "Truck 20ft closeBody I", MaterialWeight: "4000kg", res: "4 View Results", staff:"Mohit 555554242422411"},
  {id:4, cusName: "sunder Yadav",orderNum: "#TKN2088181818",orderDate: 12/12/2023, city: "Mumbai", time: "7hour 20min", status: "pending", operation: "action" ,location: "Goodgaon to Mumbai", vehicleDetails: "Truck 20ft closeBody I", MaterialWeight: "4000kg", res: "4 View Results", staff:"Mohit 555554242422411"},
  {id:5, cusName: "sunder Yadav",orderNum: "#TKN2088181818",orderDate: 12/12/2023, city: "Mumbai", time: "7hour 20min", status: "pending", operation: "action",location: "Goodgaon to Mumbai", vehicleDetails: "Truck 20ft closeBody I", MaterialWeight: "4000kg", res: "4 View Results", staff:"Mohit 555554242422411"}
]

class SideBar extends Component{
  constructor(){
    super()
    this.state={
      data: dummyItems,
      isShow: false,
      currentPage: 1,
      itemPerPage: 3
    }
  }
  
  onPrev=()=>{
    const {currentPage} = this.state
    console.log("hello P")
    this.setState(prevState=>({currentPage: prevState.currentPage-1}))

  }
  
  onNxt=()=>{
    const {currentPage} = this.state
    console.log("hello N")
    this.setState(prevState=>({currentPage: prevState.currentPage+1}))
  }

  onShowTrue=()=>{
    this.setState(prevState=>({isShow: !prevState.isShow}))
  }
  

 getAllData=()=>{
    return(
          <div >
            <h1>Bid No. </h1>
            <h1>Manesar Gurgram hariyana </h1>
            <p>Loading Point: Ramchandra Oil Niwas Oil Mill Alwar Rajastan</p>
            <h3>KotPuli Rajastan</h3>
            <p>Unloading Point: Ramchandra Oil Niwas Oil Mill Alwar Rajastan</p>

            <h1>Vehicle Loading date </h1>
            <p>Vehicle type : <span>CNG</span></p>
            <p>material: agricural product Weight: 14 tonne</p>
            <p>request Date :  Expiry Date: 15/02/24 </p>
            <p>Remark : Urgent Delivery</p>

            <p>Assign Staff: Rahul Pandey</p>
            <p>Phone No. 98272262626</p>
            <p>Target Price: 5000 ruppes</p>
            <p>Number of Bider for this.Bid 54</p>
            <h1>View Details</h1>
            <p>View less</p>
          </div>
        )
  }
  
  render(){
    const {data, currentPage, itemPerPage, isShow} = this.state
    const lastIndex = currentPage * itemPerPage
    const firstIndex = lastIndex - itemPerPage
    const rows = data.slice(firstIndex, lastIndex)
    return(
      <>
        <div className='con'>
          <div className='ulSide' >
          <h6><span className='spanLogo'>k</span>Logo </h6>
        <ul className='ulDown1' >
            {items.map(e=>(<li className='list'><FaFontAwesome icon={e.font}/>{e.name}</li>))}
          </ul>
          <ul className='ulDown2'>
            {itemsDown.map(eachI=>
              <li>{eachI.name}</li>
            )}
          </ul>
          </div>
          <Navbar/>
          <div className='mainCon'>
          <div className='navigationBarCon'>
              <ul className='ulNavi'>
                <li >Live</li>
                <li>Results</li>
                <li>History</li>
              </ul>
              <input placeholder='search' className='input' />
              <button className='createBtn'>create +</button>
          </div>
          <div className='setting'>
            <ul className='ulnfo'>
              <li style={{color:"black"}}>live(30)</li>
              <li style={{color:"green"}}>responded(30)</li>
              <li style={{color:"red"}}>Unresponded(30)</li>
            </ul>
            <ul className='ulInfo1'>
              <li>Big Created</li>
              <li>Today</li>
              <li>Yesterday</li>
            </ul>
            <button className='calBtn'>Calender</button>
            <IoIosFunnel className='iconCone'/>
          </div>
          <table>
                    <tr className='tableHeading'>
                        <th>SR NO</th>
                        <th>BID Number Created By</th>
                        <th>Start Date & Time</th>
                        <th>Bid Time Remaining </th>
                        <th>From City To city</th>
                        <th>Vehicle Type size Body, No. of Vehicle</th>
                        <th>Material Weight In (Kilo) </th>
                        <th>Response</th>
                        <th>Assign Staff</th>
                        <th>Details</th>
                    </tr>
                        {rows.map(eacha=>(
                    <tr className='tableData'>
                          <td>{eacha.id}</td>
                          <td>{eacha.orderNum}</td>
                          <td>{eacha.orderDate}</td>
                          <td>{eacha.time}<CiSearch /></td>
                          <td>{eacha.city}</td>
                          <td>{eacha.vehicleDetails}<CiSearch /></td>
                          <td>{eacha.MaterialWeight}</td>
                          <td>{eacha.res}</td>
                          <td>{eacha.staff}</td>
                          <td><button onClick={this.onShowTrue} type="button" className='Btn'>View Details</button></td>
                    </tr>                         
                        ))}

                        <div className='btnCon'>
                        <button onClick={this.onPrev} className='Btn'>Prev</button>
                        <button onClick={this.onPrev} className='Btn'>{currentPage}</button>
                        <button onClick={this.onNxt} className='Btn'>Nxt</button>
                        </div>
                </table>
          </div>
        </div>
      </>
    )
 }
}


export default SideBar

