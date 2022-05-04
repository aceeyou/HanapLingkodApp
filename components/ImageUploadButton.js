import React, { useState, useEffect } from 'react';
import { TouchableOpacity, Text, Image} from 'react-native';

// import { launchImageLibrary } from 'react-native-image-picker';

import * as ImagePicker from 'expo-image-picker';
import client from '../api/client';

// const options={
//     title: 'Select Image',
//     type: 'library',
//     options: {
//       maxHeight: 200,
//       maxWidth: 300,
//       selectionLimit: 1,
//       mediaType: 'photo',
//       includeBase64: false,
//     },
// }

export default function ImageUploadButton(){
    // const openGallery=async()=>{
    //     const image = await launchImageLibrary(options);
    //     console.log(image)
    // }

    const [image, setImage] = useState(null);


    useEffect(() => {
        (async () => {
        if (Platform.OS !== 'web') {
            const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
            if (status !== 'granted') {
            alert('Sorry, we need camera roll permissions to make this work!');
            }
        }
        })();
    }, []);

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
        });

        console.log(result);

        if (!result.cancelled) {
            setImage(result.uri);
        }
    };

    // const uploadImage = async () => {
    //     const formData = new FormData()
    //     formData.append('GovId', {
    //         name: new Date() + "_GovId",
    //         uri: image,
    //         type: 'image/jpg/png'
    //     })

    //     try {
    //         const res = await client.post('/signup/worker', formData, {
    //             header: {
    //                 Accept: 'application/json',
    //                 'Content-Type': 'multipart/form-data',
    //             }
    //         })
    //     } catch (error) {
    //         console.log(error.message)
    //     }
        
    // }
    
    return(
        <TouchableOpacity style={{backgroundColor: '#c4c4c4', paddingVertical: 8, alignItems: 'center', marginTop: 15, borderRadius: 5}}
            onPress={pickImage}
        >
            <Text style={{fontWeight: 'bold'}}>Attach photos here</Text>
            {image && <Image source={{uri:image}} style={{width: 300, height: 200}} />}
        </TouchableOpacity>
    );
}