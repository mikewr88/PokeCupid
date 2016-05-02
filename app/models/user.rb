class User < ActiveRecord::Base

  attr_reader :password

	validates :username, :password_digest, :session_token, presence: true
	validates :username, uniqueness: true
	validates :password, length: {minimum: 6}, allow_nil: :true

  has_many :likers,
  foreign_key: :liker_id,
  class_name: 'Like'

  has_many :likees,
  foreign_key: :likee_id,
  class_name: 'Like'

  has_many :visitors,
  foreign_key: :visitor_id,
  class_name: 'Visitor'

  has_many :visitees,
  foreign_key: :visitee_id,
  class_name: 'Visitor'

  
	after_initialize :ensure_session_token
	before_validation :ensure_session_token_uniqueness

  def password= password
		self.password_digest = BCrypt::Password.create(password)
		@password = password
	end

	def self.find_by_credentials(username, password)
		user = User.find_by(username: username)
    return nil unless user && user.password_is?(password)
    user
	end

	def password_is?(password)
		BCrypt::Password.new(self.password_digest).is_password?(password)
	end

	def reset_session_token!
		self.session_token = new_session_token
		ensure_session_token_uniqueness
		self.save
		self.session_token
	end

	private

	def ensure_session_token
		self.session_token ||= new_session_token
	end

	def new_session_token
		SecureRandom.base64
	end

	def ensure_session_token_uniqueness
		while User.find_by(session_token: self.session_token)
			self.session_token = new_session_token
		end
	end

end
