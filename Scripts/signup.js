function SignUp(User, Disc, Pass) {

    try {

        const usersRef = db.collection('Logins').doc(User)

        usersRef.get()
            .then((docSnapshot) => {
                if (docSnapshot.exists) {
                    usersRef.onSnapshot((doc) => {
                        return false
                    });
                } else {
                    usersRef.set({"Password": Pass, "Discord": Disc})
                    setTimeout(function() {location.href = "./login.html"}, 2000)
                }
            });

    } catch (err) {

        return false

    }

}