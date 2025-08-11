const admin = require('firebase-admin');

// 👇 IMPORTANT: Update this path to point to your downloaded service account key
const serviceAccount = require('./pamrose-skin-firebase-adminsdk.json');

const productsData = require('./products.json');

// 👇 IMPORTANT: Update this with your Firebase project's storage bucket URL
const bucketName = 'pamrose-skin.appspot.com';

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: bucketName
});

const db = admin.firestore();
const bucket = admin.storage().bucket();

const uploadProducts = async () => {
  console.log('Starting product upload...');
  const productsCollection = db.collection('products');

  for (const product of productsData) {
    // Encode the filenames to make them URL-safe
    const encodedThumbnail = encodeURIComponent(product.thumbnail);
    const encodedDetailImage = encodeURIComponent(product.detail_image);

    // Construct the full public URLs for the images
    const thumbnailUrl = `https://firebasestorage.googleapis.com/v0/b/${bucket.name}/o/${encodedThumbnail}?alt=media`;
    const detailImageUrl = `https://firebasestorage.googleapis.com/v0/b/${bucket.name}/o/${encodedDetailImage}?alt=media`;

    // Create the final product object for Firestore
    const newProduct = {
      ...product, // a-zA-Z0-9
      thumbnailUrl: thumbnailUrl,
      detailImageUrl: detailImageUrl
    };

    // These are redundant now, so we remove them
    delete newProduct.thumbnail;
    delete newProduct.detail_image;

    try {
      // Use the product's '_id' as the unique document ID in Firestore
      await productsCollection.doc(product._id).set(newProduct);
      console.log(`✅ Successfully uploaded: ${product.name}`);
    } catch (error) {
      console.error(`❌ Failed to upload: ${product.name}`, error);
    }
  }

  console.log('\n🚀 All products have been processed!');
};

uploadProducts();