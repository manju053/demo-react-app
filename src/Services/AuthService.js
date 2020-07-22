import { auth, fireStorage } from '../firebase'
export const signInWithEmailAndPassword = async ({ email, password }) => {
    const signInDetails = await auth.signInWithEmailAndPassword(email, password)
    return signInDetails
}

export const createUser = async ({ email, password, user_name }, selectedImage) => {
    console.log("selected file:", selectedImage)
    const storageRef = fireStorage.ref()
    const createdUser = await auth.createUserWithEmailAndPassword(email, password)
    const user = auth.currentUser
    const file = new File([selectedImage], user.uid.toString(), {type: selectedImage.type})
    const childRef = storageRef.child(user.uid.toString())
    const uploadTask = childRef.put(file, {
        contentType: file.type
    })
    // childRef.put(file, {
    //     contentType: file.type
    // }).then(async snapshot => {
    //     await user.updateProfile({
    //         displayName: user_name,
    //         photoURL: PHOTO_URL + `/${user.uid}`
    //     })
    // })
    // .catch(error => {
    //     console.log("Upload error::::::", error);
        
    // })


    uploadTask.on('state_changed', function(snapshot){
        // Observe state change events such as progress, pause, and resume
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        alert('Upload is ' + progress + '% done');
        // switch (snapshot.state) {
        //   case 'paused': // or 'paused'
        //     alert('Upload is paused');
        //     break;
        //   case 'running': // or 'running'
        //     alert('Upload is running');
        //     break;
        // }
      }, function(error) {
        alert("Error in upload::::::", error)
      }, function() {
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        uploadTask.snapshot.ref.getDownloadURL().then(async function(downloadURL) {
          console.log('File available at', downloadURL);
          await user.updateProfile({
            displayName: user_name,
            photoURL: downloadURL
        })
        });
      });
    return createdUser
}

export const logout = () => {
    localStorage.removeItem('isLoggedIn')
    return auth.signOut()
}