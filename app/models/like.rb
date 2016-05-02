class Like < ActiveRecord::Base
  belongs_to :liker,
  foreign_key: :liker_id,
  class_name: 'User'

  belongs_to :likee,
  foreign_key: :likee_id,
  class_name: 'User'


end
