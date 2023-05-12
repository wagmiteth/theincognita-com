// Reservoir.js
const Airtable = require("airtable");
const sdk = require("api")("@reservoirprotocol/v3.0#36vtrdr1z8lhhl0zsv");

sdk.auth("dafa4fdd-0e5e-5b69-a060-dbb4aadaba22");

const getCollectionFloorask = (collectionAddress) => {
  return sdk.getOracleCollectionsFlooraskV5({
    collection: collectionAddress,
    accept: "*/*",
  });
};

const fetchAndCall = () => {
  const base = new Airtable({
    apiKey:'patENbyO3dCZagBFn.85c12c38543cb36868c158678cbe27a30ccc1aae3a86d9826cb245cbf41f1576'}).base('apph5x8OLndtokI7d');

    base('ListOfNodes').select({
        // maxRecords: 1, // change this to fetch more records
        view: "Grid view"
    }).firstPage(function(err, records) {
        if (err) {
          return; // Removed console.error
        }
        if (!records || records.length === 0) {
          return; // Removed console.log
        }
        records.forEach(function(record) {
            const collectionAddress = record.get('CollectionAddress');
            if (!collectionAddress) {
                return; // Removed console.log
            }
            getCollectionFloorask(collectionAddress)
              .then(({ data }) => { // Here we extract the 'price' attribute from the response
                if (!data || !data.price) {
                  return; // Removed console.log
                }
                // update the 'openseaFloor' field
                base('ListOfNodes').update(record.id, {
                  "openseaFloor": data.price
                }, function(err, record) {
                  if (err) {
                    return; // Removed console.error
                  }
                });
              })
              .catch(err => {}); // Removed console.error
          });
        });
    }
    

module.exports = {
  fetchAndCall
};
