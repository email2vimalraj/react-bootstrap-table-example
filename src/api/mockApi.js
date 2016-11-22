import _ from 'underscore';

// Mock data generated from https://www.mockaroo.com/
const mockData = [{"id":1,"productName":"pain reliever","price":14,"manufacturedDate":"2016-08-01","expiryDate":"2016-07-11"},
  {"id":2,"productName":"Dorzolamide Hydrochloride and Timolol Maleate","price":100,"manufacturedDate":"2015-12-30","expiryDate":"2016-05-29"},
  {"id":3,"productName":"Fentanyl Citrate","price":52,"manufacturedDate":"2016-10-12","expiryDate":"2016-10-29"},
  {"id":4,"productName":"Luminous Pure Aura CC","price":22,"manufacturedDate":"2016-09-07","expiryDate":"2015-12-12"},
  {"id":5,"productName":"LBEL NATURAL FINISH MOISTURIZING FOUNDATION SPF 25","price":14,"manufacturedDate":"2016-10-12","expiryDate":"2016-04-03"},
  {"id":6,"productName":"VP-GGR-B6","price":68,"manufacturedDate":"2016-05-30","expiryDate":"2016-10-19"},
  {"id":7,"productName":"Sweet Potato","price":40,"manufacturedDate":"2016-04-27","expiryDate":"2016-06-11"},
  {"id":8,"productName":"MEIJER ALOE GEL","price":38,"manufacturedDate":"2016-11-04","expiryDate":"2016-05-02"},
  {"id":9,"productName":"Neomycin and Polymyxin B Sulfates and Dexamethasone","price":28,"manufacturedDate":"2016-04-06","expiryDate":"2016-08-05"},
  {"id":10,"productName":"CRESTOR","price":63,"manufacturedDate":"2016-02-02","expiryDate":"2016-06-26"},
  {"id":11,"productName":"ASPERGILLUS FUMIGATUS","price":90,"manufacturedDate":"2016-07-25","expiryDate":"2016-09-03"},
  {"id":12,"productName":"DOXYCYCLINE","price":4,"manufacturedDate":"2016-05-22","expiryDate":"2016-01-06"},
  {"id":13,"productName":"methylphenidate hydrochloride","price":42,"manufacturedDate":"2016-11-12","expiryDate":"2016-06-06"},
  {"id":14,"productName":"Kinray Vitamin A D","price":53,"manufacturedDate":"2015-12-02","expiryDate":"2016-06-09"},
  {"id":15,"productName":"VUSION","price":85,"manufacturedDate":"2016-05-13","expiryDate":"2016-05-22"},
  {"id":16,"productName":"Baclofen","price":54,"manufacturedDate":"2016-02-27","expiryDate":"2016-04-10"},
  {"id":17,"productName":"Nephrocaps","price":47,"manufacturedDate":"2016-10-20","expiryDate":"2015-12-14"},
  {"id":18,"productName":"Clindamycin","price":74,"manufacturedDate":"2016-08-04","expiryDate":"2016-05-01"},
  {"id":19,"productName":"Mineral Wear Oh So Radiant Powder","price":24,"manufacturedDate":"2016-09-11","expiryDate":"2016-08-08"},
  {"id":20,"productName":"Actoplus Met","price":52,"manufacturedDate":"2016-09-28","expiryDate":"2016-08-29"},
  {"id":21,"productName":"White Real Time Pain Relief","price":11,"manufacturedDate":"2016-02-26","expiryDate":"2016-03-04"},
  {"id":22,"productName":"Doxorubicin Hydrochloride","price":73,"manufacturedDate":"2016-05-19","expiryDate":"2016-11-18"},
  {"id":23,"productName":"Bambusa Pulsatilla","price":89,"manufacturedDate":"2016-07-09","expiryDate":"2016-03-20"},
  {"id":24,"productName":"Carbo Vegetabilis 30c","price":78,"manufacturedDate":"2016-03-25","expiryDate":"2016-11-19"},
  {"id":25,"productName":"Extra Strength Rapid Release Acetaminophen PM","price":81,"manufacturedDate":"2015-11-26","expiryDate":"2016-11-12"},
  {"id":26,"productName":"OSTEOBIOS","price":64,"manufacturedDate":"2016-06-14","expiryDate":"2016-07-25"},
  {"id":27,"productName":"Pain Relief","price":72,"manufacturedDate":"2016-04-30","expiryDate":"2016-10-23"},
  {"id":28,"productName":"Bio-Scriptives Extreme AF","price":57,"manufacturedDate":"2016-04-14","expiryDate":"2016-11-04"},
  {"id":29,"productName":"Rimmel London","price":12,"manufacturedDate":"2016-06-15","expiryDate":"2016-01-14"},
  {"id":30,"productName":"Equaline Heartburn Relief","price":6,"manufacturedDate":"2016-07-28","expiryDate":"2016-04-01"},
  {"id":31,"productName":"flormar Soft Touch Foundation Sunscreen Broad Spectrum SPF 20 ST08 Bronze Beige","price":68,"manufacturedDate":"2016-07-25","expiryDate":"2016-01-15"},
  {"id":32,"productName":"thrombin human","price":91,"manufacturedDate":"2016-10-10","expiryDate":"2016-08-01"},
  {"id":33,"productName":"Hydrochlorothiazide","price":96,"manufacturedDate":"2016-02-26","expiryDate":"2016-02-16"},
  {"id":34,"productName":"Losartan Potassium","price":68,"manufacturedDate":"2016-07-22","expiryDate":"2016-01-21"},
  {"id":35,"productName":"Atenolol","price":77,"manufacturedDate":"2016-07-23","expiryDate":"2016-03-07"},
  {"id":36,"productName":"Ultrasol","price":2,"manufacturedDate":"2016-05-09","expiryDate":"2016-09-22"},
  {"id":37,"productName":"Sterile Vancomycin Hydrochloride","price":51,"manufacturedDate":"2016-09-14","expiryDate":"2016-10-16"},
  {"id":38,"productName":"Soothanol X2","price":15,"manufacturedDate":"2015-12-17","expiryDate":"2016-03-29"},
  {"id":39,"productName":"Bupropion Hydrochloride","price":16,"manufacturedDate":"2016-06-18","expiryDate":"2016-11-04"},
  {"id":40,"productName":"Indigo Carmine","price":32,"manufacturedDate":"2016-09-14","expiryDate":"2016-10-29"},
  {"id":41,"productName":"ck one 3-in-1 face makeup","price":85,"manufacturedDate":"2016-08-13","expiryDate":"2016-03-16"},
  {"id":42,"productName":"Meclizine Hydrochloride","price":97,"manufacturedDate":"2016-07-07","expiryDate":"2016-10-08"},
  {"id":43,"productName":"Ondansetron","price":41,"manufacturedDate":"2016-04-06","expiryDate":"2016-05-10"},
  {"id":44,"productName":"Rhustoxoforce","price":61,"manufacturedDate":"2016-08-03","expiryDate":"2015-12-30"},
  {"id":45,"productName":"equate hemorrhodial suppositories","price":66,"manufacturedDate":"2016-01-12","expiryDate":"2016-07-19"},
  {"id":46,"productName":"HYDROCHLOROTHIAZIDE","price":75,"manufacturedDate":"2016-10-20","expiryDate":"2016-10-15"},
  {"id":47,"productName":"Estomax","price":15,"manufacturedDate":"2016-07-20","expiryDate":"2016-11-09"},
  {"id":48,"productName":"Salmon","price":66,"manufacturedDate":"2016-08-21","expiryDate":"2016-01-08"},
  {"id":49,"productName":"FANAPT","price":32,"manufacturedDate":"2016-04-21","expiryDate":"2015-12-08"},
  {"id":50,"productName":"Loma Lux Psoriasis","price":54,"manufacturedDate":"2016-08-25","expiryDate":"2016-06-21"},
  {"id":51,"productName":"Eczema - Skin Care","price":65,"manufacturedDate":"2016-05-30","expiryDate":"2016-10-09"},
  {"id":52,"productName":"Triamterene and Hydrochlorothiazide Capsules","price":67,"manufacturedDate":"2016-07-15","expiryDate":"2016-10-28"},
  {"id":53,"productName":"Paprika","price":35,"manufacturedDate":"2016-09-16","expiryDate":"2016-03-02"},
  {"id":54,"productName":"healthy accents cetirizine hydrochloride","price":50,"manufacturedDate":"2016-06-01","expiryDate":"2016-07-04"},
  {"id":55,"productName":"LEVAQUIN","price":67,"manufacturedDate":"2016-07-16","expiryDate":"2016-04-14"},
  {"id":56,"productName":"Hormone Mix System Formula","price":7,"manufacturedDate":"2015-12-20","expiryDate":"2016-05-28"},
  {"id":57,"productName":"Pramipexole","price":54,"manufacturedDate":"2016-08-03","expiryDate":"2016-09-20"},
  {"id":58,"productName":"IBUPROFEN","price":90,"manufacturedDate":"2015-11-29","expiryDate":"2016-10-12"},
  {"id":59,"productName":"Methylergonovine Maleate","price":68,"manufacturedDate":"2016-07-10","expiryDate":"2016-11-20"},
  {"id":60,"productName":"Alternaria alternata","price":6,"manufacturedDate":"2015-11-30","expiryDate":"2016-01-28"},
  {"id":61,"productName":"Ropinirole Hydrochloride","price":42,"manufacturedDate":"2016-05-19","expiryDate":"2016-06-21"},
  {"id":62,"productName":"Iodine Topical Solution","price":10,"manufacturedDate":"2016-01-11","expiryDate":"2015-12-30"},
  {"id":63,"productName":"100% Pure Everywhere Sunscreen","price":72,"manufacturedDate":"2016-01-25","expiryDate":"2016-05-20"},
  {"id":64,"productName":"Diazepam","price":97,"manufacturedDate":"2016-02-03","expiryDate":"2016-01-05"},
  {"id":65,"productName":"Oxygen","price":5,"manufacturedDate":"2016-10-02","expiryDate":"2016-10-20"},
  {"id":66,"productName":"Testosterone Cypionate","price":3,"manufacturedDate":"2016-06-02","expiryDate":"2016-11-02"},
  {"id":67,"productName":"ANTIBACTERIAL FOAMING","price":89,"manufacturedDate":"2016-03-07","expiryDate":"2016-01-23"},
  {"id":68,"productName":"Lisinopril and Hydrochlorothiazide","price":50,"manufacturedDate":"2016-10-28","expiryDate":"2016-03-28"},
  {"id":69,"productName":"Argentum carbonicum 6 Special Order","price":24,"manufacturedDate":"2016-11-06","expiryDate":"2016-04-01"},
  {"id":70,"productName":"Night Time Sinus","price":36,"manufacturedDate":"2016-09-11","expiryDate":"2016-08-12"},
  {"id":71,"productName":"DOUBLE PERFECTION LUMIERE","price":62,"manufacturedDate":"2016-02-27","expiryDate":"2015-12-23"},
  {"id":72,"productName":"Cold Relief","price":49,"manufacturedDate":"2016-02-17","expiryDate":"2016-03-19"},
  {"id":73,"productName":"ARNICA MONTANA","price":90,"manufacturedDate":"2016-09-02","expiryDate":"2016-06-26"},
  {"id":74,"productName":"Short Ragweed Pollen","price":30,"manufacturedDate":"2016-07-24","expiryDate":"2016-01-06"},
  {"id":75,"productName":"FLUEndz","price":26,"manufacturedDate":"2015-12-23","expiryDate":"2016-02-08"},
  {"id":76,"productName":"citroma","price":44,"manufacturedDate":"2016-04-05","expiryDate":"2016-11-13"},
  {"id":77,"productName":"Moexipril Hydrochloride","price":66,"manufacturedDate":"2016-02-22","expiryDate":"2016-06-13"},
  {"id":78,"productName":"Zosyn","price":41,"manufacturedDate":"2016-11-07","expiryDate":"2016-08-09"},
  {"id":79,"productName":"Myambutol","price":54,"manufacturedDate":"2016-11-01","expiryDate":"2016-08-25"},
  {"id":80,"productName":"Acid Reducer","price":90,"manufacturedDate":"2015-12-17","expiryDate":"2016-03-04"},
  {"id":81,"productName":"ZOLOFT","price":73,"manufacturedDate":"2016-07-30","expiryDate":"2016-09-13"},
  {"id":82,"productName":"Corn Smut","price":26,"manufacturedDate":"2016-02-04","expiryDate":"2016-01-28"},
  {"id":83,"productName":"Endure 200","price":55,"manufacturedDate":"2016-04-25","expiryDate":"2015-12-08"},
  {"id":84,"productName":"Frankincense and Myrrh Neuropathy","price":84,"manufacturedDate":"2016-06-29","expiryDate":"2016-05-04"},
  {"id":85,"productName":"Banana Boat Deep Tanning Dry SPF 8","price":32,"manufacturedDate":"2016-02-08","expiryDate":"2016-10-31"},
  {"id":86,"productName":"NIACIN","price":61,"manufacturedDate":"2016-07-11","expiryDate":"2016-05-06"},
  {"id":87,"productName":"Wal Zyr D","price":51,"manufacturedDate":"2016-09-13","expiryDate":"2016-08-22"},
  {"id":88,"productName":"BestHealth Honey Lemon","price":38,"manufacturedDate":"2016-02-01","expiryDate":"2015-12-01"},
  {"id":89,"productName":"Mentholatum Nighttime Vaporizing Rub","price":13,"manufacturedDate":"2016-01-28","expiryDate":"2016-05-18"},
  {"id":90,"productName":"Gelato Topical Anesthetic","price":11,"manufacturedDate":"2016-06-03","expiryDate":"2016-09-30"},
  {"id":91,"productName":"Russian Thistle","price":24,"manufacturedDate":"2016-11-06","expiryDate":"2016-05-07"},
  {"id":92,"productName":"benzonatate","price":72,"manufacturedDate":"2016-08-29","expiryDate":"2016-07-31"},
  {"id":93,"productName":"Nitrogen","price":81,"manufacturedDate":"2016-02-26","expiryDate":"2016-04-24"},
  {"id":94,"productName":"Allergy Multi-Symptom Relief","price":20,"manufacturedDate":"2016-06-26","expiryDate":"2016-09-10"},
  {"id":95,"productName":"Extra Strength Gas Relief","price":8,"manufacturedDate":"2015-12-19","expiryDate":"2016-06-19"},
  {"id":96,"productName":"Furosemide","price":59,"manufacturedDate":"2016-02-21","expiryDate":"2016-09-14"},
  {"id":97,"productName":"Promethazine Hydrochloride","price":42,"manufacturedDate":"2016-04-16","expiryDate":"2016-02-11"},
  {"id":98,"productName":"Irritable Bowel Syndrome Therapy","price":41,"manufacturedDate":"2015-11-22","expiryDate":"2016-03-07"},
  {"id":99,"productName":"Nplate","price":11,"manufacturedDate":"2015-12-18","expiryDate":"2016-05-21"},
  {"id":100,"productName":"Bamboo Sap Patch","price":31,"manufacturedDate":"2016-05-13","expiryDate":"2016-03-20"}];

class ProductApi {
  static getProducts(page) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let products = {};
        products.pageCount = 10;
        products.resultsCount = 100;
        products.productList = _.first(_.rest(mockData, page * 10 - 10), 10);
        resolve(Object.assign({}, products));
      }, 100);
    });
  }
}

export default ProductApi;

// for (let i = 1; i <= 10; i++) {
//   console.log(_.first(_.rest(mockData, i * 10 - 10), 10));
// }

// console.log(_.filter(mockData, function(item) {
//   return item.price === 42;
// }));
