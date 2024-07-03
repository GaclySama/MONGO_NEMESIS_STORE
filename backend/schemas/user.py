def user_schema( user ) -> dict:
    return {
        "id": str(user['_id']),
        "name": user['name'],
        "lastName": user['lastName'],
        "email": user['email'],
        "password": user['password']
      }