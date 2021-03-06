function topproducts(request, result){
  const topproducts =
  [
    {
      id:"edf0f1a5-a009-4076-b5e0-9ae3c779e11b",
      decathlon_id:"8379739",
      title:"KIPRUN LD",
      image_path:"https://www.decathlon.fr/media/837/8379739/zoom_dd74915f0c5e4aa4a07a641fb38eae98.jpg",
      decathlon_members_id:"9b7659d4-52f9-45e4-a605-7ea81dc9abf6",
      lifetime_max:800,
      product_owner_message:"le coureur s'entraînant sur route, 3 à 6 fois par semaine à des allures allant de 10 à 12km/h.",
      nb_users: 4254,
      percent_male: "91",
      percent_female: "9",
      dur_max: "4:02'12''",
      dur_avr: "39'29''",
      dur_min: "21'07''",
      age_18_25: "8",
      age_26_45: "30",
      age_46_55: "36",
      age_56: "26",
      dist_max: "42,195",
      dist_avr: "12",
      dist_min: "4,5",
      weight_50: "10",
      weight_51_70: "47",
      weight_71_90: "28",
      weight_91: "15",
      dist_total: 102096,
      nb_sessions: 6420
    },
    {
      id:"a3b1ad6a-5063-44dc-aefe-e66e474e4a2d",
      decathlon_id:"8379990",
      title:"CHAUSSURE RUN ACTIVE",
      image_path:"https://www.decathlon.fr/media/837/8379990/zoom_b3fd02b9-2d9f-49a7-bc19-eacc77c21edb.jpg",
      decathlon_members_id:"9b7659d4-52f9-45e4-a605-7ea81dc9abf6",
      lifetime_max:800,
      product_owner_message:"les hommes souhaitant courir jusqu'à une heure, une à deux fois par semaine sur route ou tapis.",
      nb_users: 1260,
      percent_male: "84",
      percent_female: "16",
      dur_max: "32'22''",
      dur_avr: "18'29''",
      dur_min: "10'07''",
      age_18_25: "34",
      age_26_45: "24",
      age_46_55: "26",
      age_56: "16",
      dist_max: "21",
      dist_avr: "10",
      dist_min: "3",
      weight_50: "12",
      weight_51_70: "45",
      weight_71_90: "28",
      weight_91: "15",
      dist_total: 28026,
      nb_sessions: 2420
    },
    {
      id:"10fba447-433e-4304-b68b-1e2233d6f433",
      decathlon_id:"8351471",
      title:"KIPRUN SD FEMME",
      image_path:"https://www.decathlon.fr/media/835/8351471/zoom_7676913a73e04010ba0d868450f23e17.jpg",
      decathlon_members_id:"9b7659d4-52f9-45e4-a605-7ea81dc9abf6",
      lifetime_max:800,
      product_owner_message:"la coureuse sur route voulant travailler sa vitesse lors de ses entraînements ou de ses compétitions.",
      nb_users: 4120,
      percent_male: "1",
      percent_female: "99",
      dur_max: "32'22''",
      dur_avr: "15'29''",
      dur_min: "10'07''",
      age_18_25: "14",
      age_26_45: "44",
      age_46_55: "26",
      age_56: "16",
      dist_max: "10",
      dist_avr: "6",
      dist_min: "3,5",
      weight_50: "15",
      weight_51_70: "70",
      weight_71_90: "14",
      weight_91: "1",
      dist_total: 53490,
      nb_sessions: 3724
    }
  ];
  result.status(200).send(topproducts);
}

module.exports = topproducts;
