from pydantic import BaseModel


class Token(BaseModel):
    access_token: str
    token_type: str


class TokenData(BaseModel):
    username: str | None = None


class UserBase(BaseModel):
    username: str


class UserCreate(UserBase):
    email: str
    password: str


class UserResponse(UserBase):
    email: str | None = None


class UserInDB(UserBase):
    email: str | None = None
    hashed_password: str
