import { firestore } from "../Firebase/firebase";
export const INIT_FETCH = "INIT_FETCH";
export const FETCH_SUCCESS = "FETCH_SUCCESS"
export const FETCH_FAILURE = "FETCH_FAILURE"; 


export const fetchPhotos = () => {
    return {
        type: INIT_FETCH, 
    }
}

export function getPhotos() {
    //const photosArray = [];
     return (distpatch) => {
        console.log("entrando", distpatch );
        distpatch(fetchPhotos());
        console.log("distpatch fetch", distpatch(fetchPhotos()) );
         
        // calling firestore
        /* 
        const settings = {timestampsInSnapshots: true};
        firestore.settings(settings);
        firestore.collection('photos').get()
        .then((snapshot) => {
            snapshot.forEach((doc) => {
                photosArray.push({id: doc.id, 
                                id_mood:doc.data().id_mood, 
                                url_image:doc.data().url_image});
            });
            //this.setState({ allphotos: photosArray });
        })
        .catch((err) => console.log('Error getting documents', err) ); */
    }
}