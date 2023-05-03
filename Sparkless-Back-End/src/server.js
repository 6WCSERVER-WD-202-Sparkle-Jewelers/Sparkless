import express from 'express';
import bodyParser from 'body-parser';
import { MongoClient } from 'mongodb';

const products = [{
    id: '101',
    name: 'Amie Heart Bracelet',
    price: '170.00',
    description: 'Express an overwhelming sentiment of love with this 14-karat solid gold bracelet. The dainty yet edgy style is sure to be your everyday favorite. Layer this bracelet with other key pieces to create a statement look on special occasions or wear it alone for a more subtle approach. This is best paired with the Amie Heart Necklace.',
    imageUrl: './assets/bracelet2.jpg',
    averageRating: '5.0',
  }, {
    id: '102',
    name: 'Amina Diamond Bracelet',
    price: '150.00',
    description: 'A sparkling diamond wave bracelet handcrafted in 14-karat yellow gold. This looks great when worn with your current favourite bracelets, but know it will look divine on its own, too.',
    imageUrl: './assets/bracelet3.jpg',
    averageRating: '5.0',
  }, {
    id: '103',
    name: 'Angular Round Hoops',
    price: '200.00',
    description: 'A twist on the classic round hoop, these 14-karat babies came to play. The Angular Round Hoops are finely structured, which gives an elevated versatility. This pair does not only polish off an outfit but also stands the test of time. They will look especially adorable side-by-side on multiple piercings.',
    imageUrl:  './assets/earings1.png',
    averageRating: '5.0',
  }, {
    id: '104',
    name: 'Bold Helium Huggies',
    price: '345.00',
    description: 'With a design this breathtaking, these Bold Helium Huggies aren’t going to spend much time in your jewelry box. These huggies sit close to the ear, in a way that’s comfortable (say goodbye to snagging on tops or tangling in hair)',
    imageUrl: './assets/earings2.png',
    averageRating: '5.0',
  }, {
    id: '105',
    name: 'Amina Diamond Studs',
    price: '210.00',
    description: 'Meticulously handcrafted in 14-karat solid gold set with round cut natural diamonds, this pair resembles a soft fluid glittering line on the ear.',
    imageUrl:  './assets/earings4.png',
    averageRating: '5.0',
  }, {
    id: '106',
    name: 'Amina Diamond Necklace',
    price: '190.00',
    description: 'A sparkling diamond wave necklace handcrafted in 14-karat yellow gold. This delicate piece is a refreshing take on gold chains.',
    imageUrl: './assets/necklace1.png',
    averageRating: '5.0',
  }, {
    id: '107',
    name: ' Atalia Open Lariat Necklace',
    price: '240.00',
    description: 'This beautiful 14-karat yellow gold necklace features a tiny open circle and long bar drop pendant. This gently wraps around the neck and can be altered in length using the open circle at the middle.',
    imageUrl: './assets/necklace2.png',
    averageRating: '5.0',
  }, {
    id: '108',
    name: 'Baguette Diamond Necklace',
    price: '230.00',
    description: 'A tiny baguette diamond is the focal point of this 14-karat solid gold necklace. Some think that this type of diamond cut was named after the long, thin loaf of French bread that it often resembles. The baguette cut diamond is similar in shape to a baguette in that it is long and rectangular in shape. A contemporary bezel setting highlights the beauty of the sleek diamond. It often favoured by anyone who dares to be quite different! Dress it up or down, this necklace is totally versatile. The baguette-cut diamond is soldered at each end to a well-crafted chain.',
    imageUrl:  './assets/necklace4.png',
    averageRating: '5.0',
  }, {
    id: '109',
    name: 'Bold Square Diamond Link Ring',
    price: '235.00',
    description: 'The 14-karat gold Bold Square Diamond Link is a sleek, modern addition to your jewelry collection. The angular lines of this ring beautifully frames round cut natural diamonds while dramatically catching the light. This is a timeless pick that you can’t go wrong with.',
    imageUrl:  './assets/ring1.png',
    averageRating: '5.0',
  },
  {
    id: '110',
    name: 'Belt Ring',
    price: '220.00',
    description: 'When worn on its own, this style has a modern geometric look. This ring is a unique wear-daily piece that will be you favorite go-to, never boring, and will add a gorgeous sparkle on your finger. Choose the setting with baguette-cut diamond at the center for a more polished and classic look or opt for the one without for an edgy style.',
    imageUrl: './assets/ring2.jpg',
    averageRating: '5.0',
  },
  {
    id: '111',
    name: 'Addison Ring',
    price: '380.00',
    description: 'Interlocking Tri-color Diamond Ring This mixed metal textured trio ring is a game changer. Either worn simply by itself or stacked with other rings from our Essential Collection’s Stackable Series, its uniqueness can surely complement any look.',
    imageUrl:  './assets/ring3.jpg',
    averageRating: '5.0',
  },
  {
    id: '112',
    name: 'Pippa Bracelet',
    price: '170.00',
    description: 'This lightweight 14-karat yellow gold elongated link bracelet features a toggle lock which adds an interesting dimension and texture to your wrist. Gracefully catches the light, wear it alone or stacked with your other faves to elevate your everyday ensemble.',
    imageUrl: './assets/bracelet4.png',
    averageRating: '5.0',
  },
  ];
  
  export let cartItems = [
    products[0],
    products[2],
    products[3],
  ];
 
const app = express();
app.use(bodyParser.json());

app.get('/api/products', async (req, res) => {
  const client = await MongoClient.connect(
    'mongodb://localhost:27017',
    { useNewUrlParser: true, useUnifiedTopology: true },
  );
  const db = client.db('sparkledb');
  const products = await db.collection('products').find({}).toArray();
  res.status(200).json(products);
  client.close();
});

app.get('/api/users/:userId/cart', async (req, res) => {
  const { userId } = req.params;
  const client = await MongoClient.connect(
    'mongodb://localhost:27017',
    { useNewUrlParser: true, useUnifiedTopology: true },
  );
  const db = client.db('sparkledb');  
  const user = await db.collection('users').findOne({ id: userId });
  if (!user) return res.status(404).json('Could not find user!');
  const products = await db.collection('products').find({}).toArray();
  const cartItemIds = user.cartItems;
  const cartItems = cartItemIds.map(id =>
    products.find(product => product.id === id));
  res.status(200).json(cartItems);
  client.close();
});

app.get('/api/products/:productId', async (req, res) => {
    const { productId } = req.params;
    const client = await MongoClient.connect(
      'mongodb://localhost:27017',
      { useNewUrlParser: true, useUnifiedTopology: true },
    );
    const db = client.db('vue-db');
    const product = await db.collection('products').findOne({ id: productId });
    if (product) {
        res.status(200).json(product);
    } else {
        res.status(404).json('Could not find the product!');
    }
    client.close();
});

app.post('/api/users/:userId/cart', (req, res) => {
  const { productId } = req.body;
  const product = products.find(product => product.id === productId);
  if (product) {
    cartItems.push(product);
    res.status(200).json(cartItems);
  } else {
    res.status(404).json('Could not find product!');
  }
});

  app.delete('/api/users/:userId/cart/:productId', (req, res) => {
    const { productId } = req.params;
    cartItems = cartItems.filter(product => product.id !== productId);
    res.status(200).json(cartItems);
  });
app.listen(8000, () => {
    console.log('Server is listening on port 8000')
});