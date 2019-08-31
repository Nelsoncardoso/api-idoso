import models from '../models';
const { Profissional } = models;

class Login {
    static SingIn(req, res) {
        try {
            const _data = req.body;
            Profissional.findOne({
                where: {
                    email: _data.email
                }
            }).then(response => {
                if (!response) {
                    res.status(422).send({
                        mensage: 'EmailNotFound'
                    });
                    return;
                }
                if (!response.validPassword(_data.password)) {
                    res.status(412).send({
                        mensage: 'InvalidPassword'
                    });
                    return;
                }
                req.session.Professional = response;
                res.status(200).send({
                    mensage: 'UserAuth',
                    data: response
                });
            });
        } catch (error) {
            res.status(500).send({
                mensage: 'InternalError',
                details: error
            });
        }
    }
    static Logout(req, res) {
        req.session = null
        res.status(200).send({
            mensage: 'UserLogout',
            data: req.session
        });
    }
    static CheckAuthentication(req, res, next){
        console.log(req.session);
        // if (!req.session.Professional) {
        //     res.status(401).send({
        //         mensage: 'Unauthorized',
        //         data: req.session.Professional
        //     });
        //     return false;
        // }
        return next();
    }
}

export default Login;