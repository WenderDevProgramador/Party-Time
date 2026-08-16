
const { Service: ServiceModel } = require('../models/Service');

const serviceController = {
    create: async (req, res) => {
        try {

            const service = {
                name: req.body.name,
                description: req.body.description,
                price: req.body.price,
                image: req.body.image
            };

            const response = await ServiceModel.create(service);
            res.status(201).json({ response,  msg: 'Service created successfully' });



        } catch (error) {
            res.status(500).json({ error: 'Failed to create service' });
        }

    },

    getAll: async (req, res) => {
        try {
            const services = await ServiceModel.find();
            res.status(200).json(services);
        } catch (error) {
            res.status(500).json({ error: 'Failed to retrieve services' });
        }

},

    get: async (req, res) => {
        try {
            const id = req.params.id;
            const service = await ServiceModel.findById(id);
            if (!service) {
                return res.status(404).json({ error: 'Service not found' });
            }
            res.status(200).json(service);
        } catch (error) {
            res.status(500).json({ error: 'Failed to retrieve service' });
        }
    },

    delete: async (req, res) => {
        try {
            const id = req.params.id;
            const service = await ServiceModel.findByIdAndDelete(id);
            if (!service) {
                return res.status(404).json({ error: 'Service not found' });
            }
            res.status(200).json({ msg: 'Service deleted successfully' });
        } catch (error) {
            res.status(500).json({ error: 'Failed to delete service' });
        }
    },

    update: async (req, res) => {
        try {
            const id = req.params.id;
            const updatedService = {
                name: req.body.name,
                description: req.body.description,
                price: req.body.price,
                image: req.body.image
            };

            const service = await ServiceModel.findByIdAndUpdate(id, updatedService, { new: true });
            if (!service) {
                return res.status(404).json({ error: 'Service not found' });
            }
            res.status(200).json(service);

        } catch (error) {
            res.status(500).json({ error: 'Failed to update service' });
        }
    }

};

module.exports = serviceController;