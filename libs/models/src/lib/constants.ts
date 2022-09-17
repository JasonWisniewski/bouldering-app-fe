export interface Areas {
  name: string;
  lookUpCode: string;
  createdAt: string;
  updatedAt: string;
  parentAreaId: number;
}


// create_table "areas", force: :cascade do |t|
// t.string "name"
// t.string "look_up_code"
// t.datetime "created_at", null: false
// t.datetime "updated_at", null: false
// t.bigint "parent_area_id"
// end
