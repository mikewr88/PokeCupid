class Visit < ActiveRecord::Base
  belongs_to :visitor,
  foreign_key: :visitor_id,
  class_name: 'User'

  belongs_to :visitee,
  foreign_key: :visitee_id,
  class_name: 'User'


end
