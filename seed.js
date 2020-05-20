const Models = require('./models');

const User = {
    id: 1,
    name: 'Yarik',
    email: 'yarik@gmail.com'
};

const Concept1 = {
    id: 1,
    name: 'counrty',
    type: 'string',
    UserId: 1
};

const Concept2 = {
    id: 2,
    name: 'year',
    type: 'number',
    UserId: 1
};

const Concept3 = {
    id: 3,
    name: 'leader',
    type: 'string',
    UserId: 1
};

const Indicator = {
    id: 1,
    value: 'Angela Merkel',
    ConceptId: 3,
};

const Dimention1 = {
    id: 1,
    key: 'Germany',
    ConceptId: 1
};

const Dimention2 = {
    id: 2,
    key: '2005',
    ConceptId: 1
};

const DataPoint = {
    id: 1,
    UserId: 1,
    IndicatorId: 1
};

const DataPointDimention1 = {
    DataPointId: 1,
    DimentionId: 1,
};

const DataPointDimention2 = {
    DataPointId: 1,
    DimentionId: 2,
};

const runSeed = async () => {
    await Models.User.create(User);
    await Models.Concept.create(Concept1);
    await Models.Concept.create(Concept2);
    await Models.Concept.create(Concept3);
    await Models.Indicator.create(Indicator);
    await Models.Dimention.create(Dimention1);
    await Models.Dimention.create(Dimention2);
    await Models.DataPoint.create(DataPoint);
    await Models.DataPointDimention.create(DataPointDimention1);
    await Models.DataPointDimention.create(DataPointDimention2);
}

runSeed();