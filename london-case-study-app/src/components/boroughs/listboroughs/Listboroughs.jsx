import Button from "@restart/ui/esm/Button";
import React, {Component} from "react";
import {Modal} from "react-bootstrap";
import DataServices from "../DataServices.js";

class ListBoroughs extends Component{

    constructor(props){
        super(props);
        this.state= {
            showModal: false,
            boroughs : 
            [
                {id:1, description: "City Of London", location: "central", coord: "23/132W",score: "8", pricing: "25000"},
                {id:2, description: "WestMinister", location: "central", coord: "21/155W",score: "6.5", pricing: "23000"},
                {id:3, description: "Kensington and Chelsea", location: "eastern", coord: "23/132W",score: "9", pricing: "15000"},
                {id:4, description: "Hammersmith and Fullham", location: "southern", coord: "23/112W",score: "8", pricing: "15000"},
                {id:5, description: "Wandsworth", location: "western", coord: "23/192W",score: "8", pricing: "25000"},
                {id:6, description: "Lambeth", location: "central", coord: "23/132W",score: "8", pricing: "25000"},
                {id:7, description: "Southwark", location: "central", coord: "23/102W",score: "8", pricing: "24000"}
            ]
           
        }
       this.handleModal = this.handleModal.bind(this);
       this.closeModal  = this.closeModal.bind(this);
    }

    handleModal(){
        console.log("Handle modal function")
        this.setState({
            showModal: true
        })
    }

    closeModal(){
        this.setState({
            showModal: false
        })
    }

    render(){
        return(
            <div>
                <h1>London Boroughs</h1>
                <div className="container">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>District Name</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.boroughs.map(
                                    borough =>
                                    <tr key = {borough.id}>
                                       <td>{borough.id}</td>
                                       <td>{borough.description}</td>
                                       <td>
                                           <button className="btn btn-success" onClick={this.handleModal}>View Detail</button>
                                           
                                           <Modal show= {this.state.showModal}>
                                              <Modal.Header><h5>Borough Information</h5></Modal.Header>
                                              <Modal.Body>
                                                  <h5>Details are here</h5><br/>
                                                  <h6>Name: City of London</h6> <br/> 
                                                  <h6>Location : Central</h6><br/>
                                                  <h6> Latitude/Longitude: 13/132W</h6><br/>
                                                  <h6>Overall Score: 8/10</h6>
                                                  <h6>Real Estate Pricing Trends: 25000</h6>
                                              </Modal.Body>
                                            <Modal.Footer>
                                                <Button onClick={this.closeModal}>Close</Button>
                                            </Modal.Footer>
                                         </Modal>
                                        </td>
                                        
                                   </tr> 
                                   
                                )
                            }
                        </tbody>
                        
                    </table>
                </div>
            </div>
            
        )


    }

    viewDetails(id){
        console.log("ID ===>"+id);
    }

}



export default ListBoroughs;