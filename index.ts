// const express = require('express');
import express from 'express'
const app = express();
const PORT =3000;

app.get('/',(req, res)=>{

    res.status(201).json({
      res:true,
      msg:'New id: David'
    })
   
});

app.listen(PORT,()=>{
    console.log(`app listening on port ${PORT}`);
});