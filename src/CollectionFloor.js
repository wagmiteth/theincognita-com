// CollectionFloor.js
const Airtable = require("airtable");
const sdk = require('api')('@reservoirprotocol/v3.0#36vtrdr1z8lhhl0zsv');

sdk.auth("dafa4fdd-0e5e-5b69-a060-dbb4aadaba22");

const getCollectionFloorask = (collectionAddress) => {
  console.log(`Fetching data for collection: ${collectionAddress}`);
  return sdk.getCollectionsV5({
    id: collectionAddress,
    accept: "*/*",
  });
};

const fetchAndCallCollectionFloor = () => {
  console.log('Running fetchAndCallCollectionFloor...');
  const base = new Airtable({
    apiKey:'patENbyO3dCZagBFn.85c12c38543cb36868c158678cbe27a30ccc1aae3a86d9826cb245cbf41f1576'}).base('apph5x8OLndtokI7d');

    base('ListOfNodes').select({
        // maxRecords: 1, // change this to fetch more records
        view: "Grid view"
    }).firstPage(function(err, records) {
        if (err) {
          console.log('Error fetching records:', err);
          return;
        }
        if (!records || records.length === 0) {
          console.log('No records found');
          return;
        }
        console.log(`Processing ${records.length} records...`);
        records.forEach(function(record) {
            const collectionAddress = record.get('CollectionAddress');
            if (!collectionAddress) {
                console.log('No collection address found for record:', record.id);
                return;
            }
            getCollectionFloorask(collectionAddress)
            .then(({ data }) => { 
              console.log('Data fetched for collection:', data);
              // Here we loop through the 'collections' array and extract the 'decimal' attribute from the response
              data.collections.forEach(collection => {
                if (!collection.floorAsk || !collection.floorAsk.price.amount.decimal || !collection.floorAsk.sourceDomain) {
                  console.log('No floorAsk or decimal value found for collection:', collection.id);
                  return;
                }
                console.log('Updating record:', record.id);
                // update the 'openseaFloor' field
                base('ListOfNodes').update(record.id, {
                  "FloorPrice": collection.floorAsk.price.amount.decimal,
                  "Marketplace": collection.floorAsk.sourceDomain
                }, function(err, record) {
                  if (err) {
                    console.log('Error updating record:', err);
                    return;
                  }
                  console.log('Record updated successfully:', record.id);
                });
              })
            })
            .catch(err => console.log('Error fetching collection data:', err));
        });
      });
  }
    

module.exports = {
  fetchAndCallCollectionFloor
};
