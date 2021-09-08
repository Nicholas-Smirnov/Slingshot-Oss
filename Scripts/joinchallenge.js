function JoinChallenge(Challenge, Name) {

    const usersRef = db.collection('OSS').doc(Challenge)

    usersRef.get().then(doc => {

        Parti = doc.data().Participants

        Parti.push(Name)

        usersRef.update({ "Participants": Parti })

        removeAllChildNodes(document.getElementById("ParticipantList"))

        Data = GetChallenge(COSS)

        setTimeout(function () {

            document.getElementById("OSSPart").innerHTML = Data["Part"]

            var NewD = document.getElementById("PartT").cloneNode(true)

            NewD.style.display = "block"

            document.getElementById("ParticipantList").appendChild(NewD)

            for (Person in Data["Part"]) {

                var Player = Data["Part"][Person]

                var NewBullet = document.getElementById("Template").cloneNode(true)

                NewBullet.innerHTML = (Number(Person) + 1) + ". " + Player

                document.getElementById("ParticipantList").appendChild(NewBullet)

            }

        }, 2000)

    })

}