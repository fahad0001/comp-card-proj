const passport = require('passport');

module.exports = (app) => {
    // app.post('/auth/google',
    //     (req, res, next) => {
    //         if(req.body.pass && req.body.pass !== 'compcardcreatoradmin') next();
    //         passport.authenticate(
    //         'google',{
    //             scope: ['profile', 'email']
    //         }
    //         )(req, res, next);
    //     }
    // );

    // app.get('/auth/google',
    //     passport.authenticate(
    //         'google',{
    //             scope: ['profile', 'email']
    //         }
    //     )
    // );

    app.use('api/current_user', (req, res) => {
        res.send(req.user);
    })

    app.use('/api/logout', (req, res) => {
        req.logout();
        res.send(req.user);
    });

    app.get('/auth/google/callback', passport.authenticate('google'), (req, res) => res.send("successful"));
}