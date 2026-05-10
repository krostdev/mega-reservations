const Property = require("../models/Property.js");
const mongoose = require("mongoose");

// Create property
const newProperty = async(req, res) => {
    const { name, type, address, description, amenities, isActive } = req.body;

    if (!name || !type || !description) {
        return res.status(400).json({
            success: false,
            message: "Missing required fields: name, type or description"
        });
    };

    if (!address || !address.street || !address.city || !address.state || !address.country || !address.zipCode) {
        return res.status(400).json({
            success: false,
            message: "Incomplete address data"
        });
    };

    try {
        const property = await Property.create({
            host: req.user.id, name, type, address, description, amenities, isActive
        });

        return res.status(201).json({
            success: true,
            data: property
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        });
    };
};

// List properties
const listProperties = async(req, res) => {
    try {
        const properties = await Property.find();
        
        return res.status(200).json({
            success: true,
            total: properties.length,
            data: properties
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        })
    };
};

// Get property by ID
const propertyById = async(req, res) => {
    try {
        const { id } = req.params;

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({
                success: false,
                message: "Invalid ID"
            });
        }

        const property = await Property.findById(id);
    
        if (!property) {
            return res.status(404).json({
                success: false,
                message: "Property not found"
            });
        };
        
        return res.status(200).json({
            success: true,
            data: property
        })
            
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        })
    }
};

// Delete property
const deleteProperty = async(req, res) => {
    try {
        const { id } = req.params;

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({
                success: false,
                message: "Invalid ID"
            });
        }

        const property = await Property.findByIdAndDelete(id)

        if (!property) {
            return res.status(404).json({
                success: false,
                message: "Property not found"
            });
        };
        
        return res.status(200).json({
            success: true,
            message: "Property deleted successfully",
            data: property
        })
            
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

// Update property
const updateProperty = async(req, res) => {
    try {
        const { id } = req.params;

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({
                success: false,
                message: "Invalid ID"
            });
        };

        if (!req.body || Object.keys(req.body).length === 0) {
            return res.status(400).json({
                success: false,
                message: "No data provided for update"
            });
        };

        const updatedProperty = await Property.findByIdAndUpdate(id, req.body, { new: true, runValidators: true });

        if (!updatedProperty) {
            return res.status(404).json({
                success: false,
                message: "Property not found"
            });
        };

        return res.status(200).json({
            success: true,
            message: "Property updated successfully",
            data: updatedProperty
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        }); 
    }
}

module.exports = { newProperty, listProperties, propertyById, deleteProperty, updateProperty }