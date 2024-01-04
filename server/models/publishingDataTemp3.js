const mongoose = require("mongoose");


const DataSchema = mongoose.Schema(
    {
        userId: {
            type: String,
        },
        publishToken: {
            type: String,

        },
        companyNameText: {
            type: String,
        },
        designCompanyNameText: {
            fontSize: { type: String },
            color: { type: String },
            font: { type: String },
            textAlign: { type: String },
        },
        navigationText: {
            navigationText1: { type: String },
            navigationText2: { type: String },
            navigationText3: { type: String },
        },
        designNavigationText: {
            fontSize: { type: String },
            color: { type: String },
            font: { type: String },
            textAlign: { type: String },
        },
        buttonText: {
            type: String,
        },
        designNavButton: {
            fontSize: { type: String },
            color: { type: String },
            font: { type: String },
            textAlign: { type: String },
        },


        enteranceHeadText: {
            type: String,
        },
        designHead: {
            fontSize: { type: String },
            color: { type: String },
            font: { type: String },
            textAlign: { type: String },
        },
        enteranceDiscText: {
            type: String,
        },
        designEntranceDisc: {
            fontSize: { type: String },
            color: { type: String },
            font: { type: String },
            textAlign: { type: String },
        },
        enteranceButtonText: {
            type: String,
        },
        designEntranceButton: {
            fontSize: { type: String },
            color: { type: String },
            font: { type: String },
            textAlign: { type: String },
        },
        images:{ 
            selectedImage: { type: String },
            selectedImage1: { type: String },
            selectedImage2: { type: String },
        },

        serviceHeaderText: {
            type: String,
        },
        designServiceHeader: {
            fontSize: { type: String },
            color: { type: String },
            font: { type: String },
            textAlign: { type: String },
        },
        serviceDiscText: {
            type: String,
        },
        designServiceDisc: {
            fontSize: { type: String },
            color: { type: String },
            font: { type: String },
            textAlign: { type: String },
        },



        serviceBoxHeader: {
            serviceBoxHeaderText1: { type: String },
            serviceBoxHeaderText2: { type: String },
            serviceBoxHeaderText3: { type: String },
        },

        serviceBoxDisc: {
            serviceBoxDiscText1: { type: String },
            serviceBoxDiscText2: { type: String },
            serviceBoxDiscText3: { type: String },
        },

        serviceBoxImages: {
            selectedImage: { type: String },
            selectedImage1: { type: String },
            selectedImage2: { type: String },
        },

        designServiceBoxDisc: {
            fontSize: { type: String },
            color: { type: String },
            font: { type: String },
            textAlign: { type: String },
        },

        designServiceBoxHeader: {
            fontSize: { type: String },
            color: { type: String },
            font: { type: String },
            textAlign: { type: String },
        },

        tempNo: { type: String }

    }

);

module.exports = mongoose.model("PublishingDataTemp3", DataSchema);