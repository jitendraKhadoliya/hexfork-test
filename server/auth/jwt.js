const jwt = require("jsonwebtoken");
const secret = '7+SvfYdMJWK+98uZvuw529Fn+F/kzO5mrgpcqM49xeY2pOYGDgZRlzm2TjeHrGuKskIs7IlNKlPPg8/5ZOm/i/53+PH/1JNayNIkjgebT9mmJ5dxdpiAE/MXRwAce0gfXoS4rh7SUabBdRrcog3bxvCCN4HnlXq4MePood9vT/uH5dhzI/zeReMq1TlrbrwM'

exports.generateToken = (data) => {
    let token = jwt.sign(
        { user: data },
        secret
    );

    return token
}

exports.verifyToken = (token) => {
    return jwt.verify(
        token.substring(7),
        secret
    )
}