INSERT INTO "Users" ("name", "email") VALUES ('Yarik', 'yarik@gmail.com');

INSERT INTO "Concepts" ("name", "type", "UserId") VALUES ('country', 'string', 1);

INSERT INTO "Properties" ("name", "type", "info", "date") VALUES ('testName', 'string', 'testInfo', '2020-07-19 23:47:04.392492+03');

INSERT INTO "Dimentions" ("key", "ConceptId", "PropertyId") VALUES ('Germany', 1, 1);

INSERT INTO "Indicators" ("value", "PropertyId", "ConceptId") VALUES ('value', 1, 1);

INSERT INTO "DataPoints" ("UserId", "IndicatorId") VALUES (1, 1);

INSERT INTO "DataPointDimention" ("DataPointId", "DimentionId") VALUES (1, 1);

