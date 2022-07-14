import Request from "../Request";

class AuthRequest extends Request {
    login(payload = {}) {
        return this.post('login', payload)
    }

    me() {
        return this.get('me')
    }
}

export default new AuthRequest('auth/')