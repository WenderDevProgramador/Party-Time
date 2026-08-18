const PartyModel = require('../models/Party');

const checkPartyBudget = (budget, services) => {
    const priceSum = services.reduce((sum, service) => sum + service.price, 0);

    if (priceSum > budget) return false;

    return true;
};

const partyController = {
    create: async (req, res) => {
        try {
            const party = {
                title: req.body.title,
                author: req.body.author,
                description: req.body.description,
                budget: req.body.budget,
                image: req.body.image,
                services: req.body.services, // plural e array
            };

            if (party.services && !checkPartyBudget(party.budget, party.services)) {
                res.status(406).json({ error: 'Budget is not enough for the selected services' });
                return;
            }

            const response = await PartyModel.create(party);

            res.status(201).json({ ...response, msg: 'Party created successfully' });

        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal server error' });
        }
    },

    getAll: async (req, res) => {
        try {

            const parties = await PartyModel.find();

            res.status(200).json(parties);

        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal server error' });
        }
    },

    getById: async (req, res) => {
        try {
            const partyId = req.params.id;
            const party = await PartyModel.findById(partyId);

            if (!party) {
                res.status(404).json({ error: 'Party not found' });
                return;
            }

            res.status(200).json(party);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal server error' });
        }
    },

    update: async (req, res) => {
        try {
            const partyId = req.params.id;
            const updatedData = req.body;

            if (updatedData.services && !checkPartyBudget(updatedData.budget, updatedData.services)) {
                res.status(406).json({ error: 'Budget is not enough for the selected services' });
                return;
            }

            const updatedParty = await PartyModel.findByIdAndUpdate(partyId, updatedData, { new: true });

            if (!updatedParty) {
                res.status(404).json({ error: 'Party not found' });
                return;
            }

            res.status(200).json(updatedParty);

        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal server error' });
        }
    },

    delete: async (req, res) => {
        try {
            const partyId = req.params.id;
            const deletedParty = await PartyModel.findByIdAndDelete(partyId);

            if (!deletedParty) {
                res.status(404).json({ error: 'Party not found' });
                return;
            }
            res.status(200).json({ msg: 'Party deleted successfully' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal server error' });
        }
    }
    

};

module.exports = partyController;
