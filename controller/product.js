
const express = require('express');

const fs=require('fs')


//const index=fs.readFileSync('index.html','utf-8')
const data = JSON.parse(fs.readFileSync('data.json','utf-8'));
const pro = data.products;


exports.createproduct = (req,res) =>{
    console.log(req.body);
    pro.push(req.body);
    res.status(201).json(req.body);
}

exports.getallproduct = (req,res) =>{
    res.json(pro);
}


exports.getproduct = (req,res) =>{
    //res.json({type:'GET'})
    const id=+req.params.id;//+ se hmne string se number me change krliya
    const p=pro.find(p=>p.id==id)
    res.json(p)
}
exports.updateproduct = (req,res) =>{
    const id=+req.params.id;//+ se hmne string se number me change krliya
    const pindex=pro.find(p=>p.id==id)
    pro.splice(pindex,1,{...req.body, id:id})
    //res.json({product:'updated'})
    res.status(201).json();
}
exports.deleteproduct = (req,res) => {
    const id=+req.params.id;//+ se hmne string se number me change krliya
    const pindex=pro.find(p=>p.id==id)
    pro.splice(pindex,1)
    //res.json({product:'updated'})
    res.status(201).json();
}