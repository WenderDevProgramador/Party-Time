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
    }
};

module.exports = partyController;
