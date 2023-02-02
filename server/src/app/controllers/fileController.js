const express = require("express");

const url = "http://localhost:3001"

const uploadFile = async (req, res) => {
    if (!req.file) {
        return res.status(404).send("Arquivo não encontrado.")
    }

    const imageUrl = `${url}/file/${req.file.filename}`
    return res.status(200).json(imageUrl)
}

module.exports = {
    uploadFile
}