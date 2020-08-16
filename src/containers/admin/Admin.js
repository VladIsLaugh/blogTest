import React from 'react';
import AddComponent from "./AddComponent/AddComponent"
import NewsPreview from "./NewsPreview/NewsPreview"
import Modal from '@material-ui/core/Modal';
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import ConfirmationModalWrapper from '../../components/sharedComponents/ConfirmationModalWrapper'
import EditibleModalWrapper from '../../components/sharedComponents/EditibleModalWrapper'

class Admin extends React.Component{
    state = {
        personalInfo:[
            { 
            id:0,
            avatar: "sf",
            name:"qe",
            date:"dsds",
            msg:"ddsadsa"
        },
                    {
            id:1,
            avatar: "sf",
            name:"qe",
            date:"dswerweds",   
            msg:"ddsadsa"
        },
                    { 
            id:2,
            avatar: "sf",
            name:"qe",
            date:"dsqwreqwreds",
            msg:"ddsadsa"
        },
        ],
        isOpen:false,
        focusId: null,
        moduleType:"delete"
    }
    handleOpen = (id, type) =>{
        this.setState({
            isOpen: true,
             focusId: id,
             moduleType: type

        })
 
    }
    handleClose = ()=>{
         this.setState({
            isOpen: false,
        })
    }
        handleDelete = (id)=>{
         this.setState({
            isOpen: false,
            personalInfo: this.state.personalInfo.filter((item) => item.id != this.state.focusId)

        })
    }
    handleUpdate = (message)=>{
        console.log(message);
        const upd = this.state.personalInfo.concat()
        upd.find((item)=>item.id===this.state.focusId).msg = message
         this.setState({
            isOpen: false,
            personalInfo: upd
            
           
        }) 
        }

         handleCreate = (message)=>{
        let newItem = { 
            id:Math.random().toString(36).substr(2, 9),
            avatar: "sf",
            name:"qe",
            date: this.date(new Date()),
            msg: message
        }
         this.setState({
            isOpen: false,
            personalInfo: [...this.state.personalInfo, newItem]
           
        }) 
    }

    date = (d) =>{
        return (("0" + d.getDate()).slice(-2) + "-" + ("0"+(d.getMonth()+1)).slice(-2) + "-" +
  d.getFullYear());
    }


    render(){
  return(
        <div>
            <AddComponent 
                state={this.state} 
                handleOpen={this.handleOpen} 
            />
            Your news
            <NewsPreview personalInfo={this.state.personalInfo} handleOpen={this.handleOpen}/>
            <ConfirmationModalWrapper 
                type={this.state.moduleType}
                state={this.state} 
                handleOpen={this.handleOpen} 
                handleClose={this.handleClose} 
                handleDelete={this.handleDelete}
                handleUpdate={this.handleUpdate}
                handleCreate={this.handleCreate}

            />
        </div>
    )
    }
  
}
export default Admin