class Visit < ActiveRecord::Base
  validates :visitor_id, uniqueness: {scope: :visitee_id}

  belongs_to :visitor,
  foreign_key: :visitor_id,
  class_name: 'User'

  belongs_to :visitee,
  foreign_key: :visitee_id,
  class_name: 'User'


end
