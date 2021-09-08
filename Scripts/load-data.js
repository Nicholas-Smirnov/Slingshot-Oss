firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();

function GetChallenge(ChallengeName) {

    var collec = db.collection("OSS").doc(ChallengeName);

    var ListOfData = {};

    collec.get().then(doc => {

        const data = doc.data()
        ListOfData["Name"] = data.Name
        ListOfData["Desc"] = data.Description
        ListOfData["Chal"] = data.Challenges
        ListOfData["Time"] = data.Time
        ListOfData["Part"] = data.Participants
        ListOfData["Winn"] = data.Winner
        ListOfData["Prize"] = data.Prize

    })

    return ListOfData

}