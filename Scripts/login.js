function CheckInfo(User, Pass) {

    try {

        var collec = db.collection("Logins").doc(User);

        var ListOfData = {};

        collec.get().then(doc => {

            const data = doc.data()
            TruePass = data.Password

            if (Pass == TruePass) {

                localStorage.setItem("SLINGSHOTOSSUsername", User)
                localStorage.setItem("SLINGSHOTOSSPassword", TruePass)            
    
                location.href = "./dashboard.html"
    
            }

        })

    } catch (err) {

        return false

    }

}